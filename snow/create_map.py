# Import the modules of interest
import pandas as pd
import numpy as np
import folium
import ee
from folium.plugins import DualMap
import time
from bs4 import BeautifulSoup
import re

ee.Initialize()

# Map
map = folium.Map(location = [46.75, 8.5],
                 zoom_start = 8)

# Swisstopo layers; layer stored as jpeg tiles on wmts server
folium.TileLayer(tiles = 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg',
                 attr='Swisstopo',
                 name = 'Swisstopo',
                 overlay = True,
                 control = True).add_to(map)

# Function to add ee.Image() to map
def add_ee_layer(self, ee_image_object, vis_params, name):
  map_id_dict = ee.Image(ee_image_object).getMapId(vis_params)
  folium.raster_layers.TileLayer(
      tiles = map_id_dict['tile_fetcher'].url_format,
      attr = '&copy; <a href="https://earthengine.google.com/">Google Earth Engine</a>',
      name = name,
      overlay = True,
      control = True
  ).add_to(self)

folium.Map.add_ee_layer = add_ee_layer

start = ee.Date('2022-04-14')
end = ee.Date(time.time()*1000)

 # Function to mask clouds using the Sentinel-2 QA band
def maskS2clouds(image):
    qa = image.select('QA60')

    # // Bits 10 and 11 are clouds and cirrus, respectively.
    cloudBitMask = 1 << 10
    cirrusBitMask = 1 << 11

    # Both flags should be set to zero, indicating clear conditions.
    mask = qa.bitwiseAnd(cloudBitMask).eq(0).And(qa.bitwiseAnd(cirrusBitMask).eq(0))

    return image.updateMask(mask).divide(10000).copyProperties(image, image.propertyNames())

Switzerland_bounds = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level0").filterMetadata('ADM0_NAME', 'equals', 'Switzerland')

s2 = ee.ImageCollection('COPERNICUS/S2_SR')\
                    .filterBounds(Switzerland_bounds)\
                    .filter(ee.Filter.date(start, end))\
                    .map(maskS2clouds)

# Latest S2 image
latestImage = s2.sort('system:index',False).first()

# Function to mosaic by date, orbit, etc
def mosaicBy(imgCol):
    # imgcol: An image collection
    # returns: An image collection

    # return the collection as a list of images (not an image collection)
    imglist = imgCol.toList(imgCol.size());

    # Get all the dates as list
    all_dates = imglist.map(lambda img: ee.Image(img).date().format("YYYY-MM-dd"));

    # get all orbits as list
    all_orbits = imglist.map(lambda img: ee.Image(img).get('SENSING_ORBIT_NUMBER'));

    # get all spacecraft names as list
    all_spNames = imglist.map(lambda img: ee.Image(img).get('SPACECRAFT_NAME'));

    # this puts dates, orbits and names into a nested list
    concat_all = all_dates.zip(all_orbits).zip(all_spNames);

    # here we unnest the list with flatten, and then concatenate the list elements with " "
    concat_all = concat_all.map(lambda el:ee.List(el).flatten().join(" "));

    # here, just get distinct combintations of date, orbit and name
    concat_unique = concat_all.distinct();

    # mosaic
    def mosaic(d):
        # split into components
        d1 = ee.String(d).split(" ");
        date1 = ee.Date(d1.get(0));
        orbit = ee.Number.parse(d1.get(1)).toInt();
        spName = ee.String(d1.get(2));

        #filter with start date, and then end date, ie date + 1 day
        img = imgCol.filter(ee.Filter.date(date1, date1.advance(1, 'day')))\
                .filterMetadata('SPACECRAFT_NAME', 'equals', spName)\
                .filterMetadata('SENSING_ORBIT_NUMBER','equals', orbit)\
                .mosaic();

        return img.set("system:time_start", date1.millis()).set("system:date", date1.format("YYYY-MM-dd")).set("system:id", d1)

    mosaic_imglist = concat_unique.map(mosaic)

    return ee.ImageCollection(mosaic_imglist);

s2day = mosaicBy(s2);

# // Make list of image to display each one
listOfImages = s2day.toList(s2day.size()).reverse()

latestImage = ee.Image(listOfImages.get(0))

secondImage = ee.Image(listOfImages.get(1))

constantImgLatest = (latestImage.updateMask(latestImage.gt(0.27))).divide(latestImage.updateMask(latestImage.gt(0.27))).select(1)
constantImgSecond = (secondImage.updateMask(secondImage.gt(0.27))).divide(secondImage.updateMask(secondImage.gt(0.27))).select(1)

# Visualisation parameters
rgbVis = {
  'min': 0.0,
  'max': 0.3,
  'bands': ['B4', 'B3', 'B2'],
}

vis_params_snow = {'palette': ['#FF0000'], 'opacity': 0.3}

# Add the image layer to the map and display it.
map.add_ee_layer(latestImage, rgbVis, 'Sentinel 2 '+latestImage.get('system:date').getInfo())
map.add_ee_layer(secondImage, rgbVis, 'Sentinel 2 '+secondImage.get('system:date').getInfo())
map.add_ee_layer(constantImgLatest, vis_params_snow, 'Snow cover '+latestImage.get('system:date').getInfo())
map.add_ee_layer(constantImgSecond, vis_params_snow, 'Snow cover '+secondImage.get('system:date').getInfo())

# Add layer control
folium.map.LayerControl(collapsed=False).add_to(map)

map._id = "1"

# Write to html file
map.save('./map_gee_blurbs.html')

# Open html file
with open('map_gee_blurbs.html') as fp:
    soup = BeautifulSoup(fp, 'html.parser')

# Get script tag
data = soup.find_all("script")[5]
# data = data.string.replace('\n                ','').split('var ')
# data.pop(0)

# Get references for tiles
tile_refs = data.string.split('var ')[8].split('{')[3].split('\n')[1:6]
tile_refs = [string.replace('                    ', '').replace('"','').replace(',','').split(' : ') for string in tile_refs]
df = pd.DataFrame(tile_refs, columns = ['tile', 'ref'])

s2_tiles = list(df[df['tile'].str.startswith('Sentinel')]['ref'])
snow_tiles = list(df[df['tile'].str.startswith('Snow')]['ref'])

map_ref = data.string.split('var ')[1].split(' = ')[0]

control_string = 'L.control.sideBySide(' + str(s2_tiles) + ',' + str(s2_tiles) + ').addTo('+ str(map_ref) +');'
control_string = control_string.replace("'", "")

# Convert to string and remove script tags
data = data.string.replace('<script>', '').replace('</script>', '')

# Write to js file
# stringToWrite = data + 'L.control.sideBySide([s2_tiles_latest, s2_tiles_second], [snow_cover_latest, snow_cover_second]).addTo(map);'
stringToWrite = data + control_string

with open('map.js', 'w') as f:
    f.write(stringToWrite)
