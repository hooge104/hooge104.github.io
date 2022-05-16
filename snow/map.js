    
    
            var map_1 = L.map(
                "map_1",
                {
                    center: [46.75, 8.5],
                    crs: L.CRS.EPSG3857,
                    zoom: 8,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_d5eca4b3a3934827ad094358fd7571c7 = L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_ede392b2bb7f460fbcff404379269ff5 = L.tileLayer(
                "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg",
                {"attribution": "Swisstopo", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_f9c0b2057ec8430a9378bb04fab3b7c7 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/daba6ebf1080536d91b9b7f75903826b-d088c97dc365340353c0f8262810d76a/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_2213a3037fd3457fb64175e781d2ce96 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/9ab6b387cf7a7005805b88832f02132a-a71a523e7f4e7a44ab7de79b46d82b28/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_986b5f68f1294c628fc4e3f8162a14c2 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/806f74b6c64e284344e59a69277cb66e-5e2230558f11076dc8b5d7f06dee4a9a/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_f009e723395c4e759b33ecff5d28a001 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/a37cf836e07b091a3a91d234449dded5-3f8e4eb3a952fd3b22e28b0b07eb3ea7/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var layer_control_ae8b9cc321bf420180cc230491cc7fb7 = {
                base_layers : {
                    "openstreetmap" : tile_layer_d5eca4b3a3934827ad094358fd7571c7,
                },
                overlays :  {
                    "Swisstopo" : tile_layer_ede392b2bb7f460fbcff404379269ff5,
                    "Sentinel 2 2022-05-14" : tile_layer_f9c0b2057ec8430a9378bb04fab3b7c7,
                    "Sentinel 2 2022-05-13" : tile_layer_2213a3037fd3457fb64175e781d2ce96,
                    "Snow cover 2022-05-14" : tile_layer_986b5f68f1294c628fc4e3f8162a14c2,
                    "Snow cover 2022-05-13" : tile_layer_f009e723395c4e759b33ecff5d28a001,
                },
            };
            L.control.layers(
                layer_control_ae8b9cc321bf420180cc230491cc7fb7.base_layers,
                layer_control_ae8b9cc321bf420180cc230491cc7fb7.overlays,
                {"autoZIndex": true, "collapsed": false, "position": "topright"}
            ).addTo(map_1);
        
L.control.sideBySide([tile_layer_f9c0b2057ec8430a9378bb04fab3b7c7, tile_layer_2213a3037fd3457fb64175e781d2ce96],[tile_layer_f9c0b2057ec8430a9378bb04fab3b7c7, tile_layer_2213a3037fd3457fb64175e781d2ce96]).addTo(map_1);