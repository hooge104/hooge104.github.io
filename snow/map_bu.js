    
    
            var map_1 = L.map(
                "map_1",
                {
                    center: [46.75, 8.5],
                    crs: L.CRS.EPSG3857,
                    zoom: 10,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_5fae08dd765945dc8d12031c5e4a8300 = L.tileLayer(
                "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg",
                {"attribution": "\u0026copy \u003ca href=https://www.swisstopo.admin.ch/en/home.html\"\u003eFederal Office of Topography swisstopo\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_e3886f4892be43e2bb3ad12e93201cb0 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/70d5385e562f5a2199eb88b406762116-2e5fc341e1339ddd1c67d237450bc3ce/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_18e8e9705e8a410296d1d37e5576dc7f = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/d5162e2ac0c8fce0c26d5dbbd1662035-79f9e03deb4c4e3169338deed98ff645/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_aeae077f4bb5463ba97f919d19f6f755 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/343c17e3268719d7a7b5efe1148286e4-eda04f8f0aef35a145a17692d602576a/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_71f4973dafd04b369a9aaedcef7fac38 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/3ddf859263a2c10d46cce21f8a0db0a0-7fad5e74c3ef63c3a2bffadb0883c924/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_ecef7dcc184d4663879029007a1f2968 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/3fb76a92cdc988e73be3724b312f6344-ca429c783d318174451cc08bb690940c/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_85f3043e9b13434dbb1a46725e560d30 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/dfd8cfab6539423d56ba1333285a7993-072065cdc1dc5aea6d27eb543cf8c5ea/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_934ec4fb6b534c6cbe2a22929d9c40d1 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/81f3353d84b732ec33e5512aec7e8b08-56900fb6ad8a93ceca8c33c9a9e2b209/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_0e8f0e878b7347639d1fa495a69d682f = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/1e67f0c85d0a5e80591a46d8fd7643be-44a2b93a70dc01b7b81bc6934d497b74/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var layer_control_bdaec9fa9ef143cb8c5f518f773cffb0 = {
                base_layers : {
                    "Swisstopo" : tile_layer_5fae08dd765945dc8d12031c5e4a8300,
                },
                overlays :  {
                    "Satellite 2022-09-19" : tile_layer_e3886f4892be43e2bb3ad12e93201cb0,
                    "Satellite 2022-09-18" : tile_layer_18e8e9705e8a410296d1d37e5576dc7f,
                    "Satellite 2022-09-16" : tile_layer_aeae077f4bb5463ba97f919d19f6f755,
                    "Satellite 2022-09-15" : tile_layer_71f4973dafd04b369a9aaedcef7fac38,
                    "Snow cover 2022-09-19" : tile_layer_ecef7dcc184d4663879029007a1f2968,
                    "Snow cover 2022-09-18" : tile_layer_85f3043e9b13434dbb1a46725e560d30,
                    "Snow cover 2022-09-16" : tile_layer_934ec4fb6b534c6cbe2a22929d9c40d1,
                    "Snow cover 2022-09-15" : tile_layer_0e8f0e878b7347639d1fa495a69d682f,
                },
            };
            L.control.layers(
                layer_control_bdaec9fa9ef143cb8c5f518f773cffb0.base_layers,
                layer_control_bdaec9fa9ef143cb8c5f518f773cffb0.overlays,
                {"autoZIndex": true, "collapsed": true, "position": "topright"}
            ).addTo(map_1);
            tile_layer_18e8e9705e8a410296d1d37e5576dc7f.remove();
            tile_layer_aeae077f4bb5463ba97f919d19f6f755.remove();
            tile_layer_71f4973dafd04b369a9aaedcef7fac38.remove();
            tile_layer_85f3043e9b13434dbb1a46725e560d30.remove();
            tile_layer_934ec4fb6b534c6cbe2a22929d9c40d1.remove();
            tile_layer_0e8f0e878b7347639d1fa495a69d682f.remove();
        
L.control.sideBySide([tile_layer_e3886f4892be43e2bb3ad12e93201cb0, tile_layer_18e8e9705e8a410296d1d37e5576dc7f, tile_layer_aeae077f4bb5463ba97f919d19f6f755, tile_layer_71f4973dafd04b369a9aaedcef7fac38],[tile_layer_ecef7dcc184d4663879029007a1f2968, tile_layer_85f3043e9b13434dbb1a46725e560d30]).addTo(map_1);