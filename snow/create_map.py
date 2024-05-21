# Import the modules of interest
import pandas as pd
import folium
import ee
import time
from bs4 import BeautifulSoup

# ee.Initialize()
service_account = 'johan-945@gem-eth-analysis.iam.gserviceaccount.com'
credentials = ee.ServiceAccountCredentials(service_account, '/Users/johanvandenhoogen/ETH/Projects/google_cloud/crowther-gee-serviceaccount/gem-eth-analysis-96ea9ecb2158.json')
ee.Initialize(credentials)

# Map
map = folium.Map(location = [46.75, 8.5],
                 zoom_start = 10,
                 tiles = None,
                 min_zoom = 8)

# Swisstopo layer
folium.TileLayer(tiles = 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg',
                 attr='&copy <a href=https://www.swisstopo.admin.ch/en/home.html">Federal Office of Topography swisstopo</a>',
                 name = 'Swisstopo',
                 overlay = False,
                 control = True).add_to(map)

folium.TileLayer(tiles = 'https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swisstlm3d-wanderwege/default/current/3857/{z}/{x}/{y}.png',
                 attr='&copy <a href=https://www.swisstopo.admin.ch/en/home.html">Federal Office of Topography swisstopo</a>',
                 name = 'Wanderwege',
                 overlay = False,
                 control = True).add_to(map)

# Function to add ee.Image() to map
def add_ee_layer_showT(self, ee_image_object, vis_params, name):
  map_id_dict = ee.Image(ee_image_object).getMapId(vis_params)
  folium.raster_layers.TileLayer(
      tiles = map_id_dict['tile_fetcher'].url_format,
      attr = '&copy; <a href="https://earthengine.google.com/">Google Earth Engine</a>',
      name = name,
      overlay = True,
      control = True,
      show = True
  ).add_to(self)

folium.Map.add_ee_layer_showT = add_ee_layer_showT

# Function to add ee.Image() to map
def add_ee_layer_showF(self, ee_image_object, vis_params, name):
  map_id_dict = ee.Image(ee_image_object).getMapId(vis_params)
  folium.raster_layers.TileLayer(
      tiles = map_id_dict['tile_fetcher'].url_format,
      attr = '&copy; <a href="https://earthengine.google.com/">Google Earth Engine</a>',
      name = name,
      overlay = True,
      control = True,
      show = False
  ).add_to(self)

folium.Map.add_ee_layer_showF = add_ee_layer_showF

# Dates for imagery: past month
end = ee.Date(time.time()*1000)
start = end.advance(-1, 'month')

#  # Function to mask clouds using the Sentinel-2 QA band
# def maskS2clouds(image):
#     qa = image.select('QA60')

#     # // Bits 10 and 11 are clouds and cirrus, respectively.
#     cloudBitMask = 1 << 10
#     cirrusBitMask = 1 << 11

#     # Both flags should be set to zero, indicating clear conditions.
#     mask = qa.bitwiseAnd(cloudBitMask).eq(0).And(qa.bitwiseAnd(cirrusBitMask).eq(0))

#     return image.updateMask(mask).divide(10000).copyProperties(image, image.propertyNames())

Switzerland_bounds = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level0").filterMetadata('ADM0_NAME', 'equals', 'Switzerland')

# s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')\
#                     .filterBounds(Switzerland_bounds)\
#                     .filter(ee.Filter.date(start, end))\
#                     .map(maskS2clouds)

s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')

# // Cloud Score+ image collection. Note Cloud Score+ is produced from Sentinel-2
# // Level 1C data and can be applied to either L1C or L2A collections.
csPlus = ee.ImageCollection('GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED')

# // Use 'cs' or 'cs_cdf', depending on your use-case; see docs for guidance.
QA_BAND = 'cs_cdf'

# // The threshold for masking; values between 0.50 and 0.65 generally work well.
# // Higher values will remove thin clouds, haze & cirrus shadows.
CLEAR_THRESHOLD = 0.60

s2 = s2\
    .filterBounds(Switzerland_bounds)\
    .filter(ee.Filter.date(start, end))\
    # .linkCollection(csPlus, [QA_BAND])\
    # .map(lambda img: img.updateMask(img.select(QA_BAND).gte(CLEAR_THRESHOLD)))

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
thirdImage = ee.Image(listOfImages.get(2))
fourthImage = ee.Image(listOfImages.get(3))

snow_threshold = 2700

constantImgLatest = (latestImage.updateMask(latestImage.gt(snow_threshold))).divide(latestImage.updateMask(latestImage.gt(snow_threshold))).select(1)
constantImgSecond = (secondImage.updateMask(secondImage.gt(snow_threshold))).divide(secondImage.updateMask(secondImage.gt(snow_threshold))).select(1)
constantImgThird = (thirdImage.updateMask(thirdImage.gt(snow_threshold))).divide(thirdImage.updateMask(thirdImage.gt(snow_threshold))).select(1)
constantImgFourth = (fourthImage.updateMask(fourthImage.gt(snow_threshold))).divide(fourthImage.updateMask(fourthImage.gt(snow_threshold))).select(1)

# Visualisation parameters
rgbVis = {
  'min': 0,
  'max': 2500,
  'bands': ['B4', 'B3', 'B2'],
}

vis_params_snow = {'palette': ['#FF0000'], 'opacity': 0.3}

# Get dates
latestDate=latestImage.get('system:date').getInfo()
secondDate=secondImage.get('system:date').getInfo()
thirdDate=thirdImage.get('system:date').getInfo()
fourthDate=fourthImage.get('system:date').getInfo()

# Add the image layer to the map and display it.
map.add_ee_layer_showT(latestImage, rgbVis, 'Satellite '+latestDate)
map.add_ee_layer_showF(secondImage, rgbVis, 'Satellite '+secondDate)
map.add_ee_layer_showF(thirdImage, rgbVis, 'Satellite '+thirdDate)
map.add_ee_layer_showF(fourthImage, rgbVis, 'Satellite '+fourthDate)
# map.add_ee_layer_showT(constantImgLatest, vis_params_snow, 'Snow cover '+latestDate)
# map.add_ee_layer_showF(constantImgSecond, vis_params_snow, 'Snow cover '+secondDate)
# map.add_ee_layer_showF(constantImgThird, vis_params_snow, 'Snow cover '+thirdDate)
# map.add_ee_layer_showF(constantImgFourth, vis_params_snow, 'Snow cover '+fourthDate)

# Add layer control
folium.map.LayerControl(collapsed=True).add_to(map)

# Hard-code map._id to make it referenceable
map._id = "1"

# Write to html file
map.save('./map_gee_blurbs.html')


# Open html file
with open('map_gee_blurbs.html') as fp:
    soup = BeautifulSoup(fp, 'html.parser')

# Get script tag
data = soup.find_all("script")[5]

# Get references for tiles
tile_refs = data.string.split('var ')[-1].split('{')[3].split('\n')[1:7]
tile_refs = [string.replace('                    ', '').replace('"','').replace(',','').split(' : ') for string in tile_refs]
df = pd.DataFrame(tile_refs, columns = ['tile', 'ref'])

s2_tiles = list(df[df['tile'].str.startswith('Satellite')]['ref'])
snow_tiles = list(df[df['tile'].str.startswith('Snow')]['ref'])

map_ref = data.string.split('var ')[1].split(' = ')[0]

control_string = 'L.control.sideBySide(' + str(s2_tiles) + ',' + str(snow_tiles) + ').addTo('+ str(map_ref) +');'
control_string = control_string.replace("'", "")

# Convert to string and remove script tags
data = data.string.replace('<script>', '').replace('</script>', '')

# Write to js file
stringToWrite = data + control_string

with open('map_alldata.js', 'w') as f:
    f.write(stringToWrite)
