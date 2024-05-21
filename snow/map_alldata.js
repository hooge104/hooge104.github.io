
    
    
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

            

        
    
            var tile_layer_29f017e616b80eed2afe50f05cdb866c = L.tileLayer(
                "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg",
                {"attribution": "\u0026copy \u003ca href=https://www.swisstopo.admin.ch/en/home.html\"\u003eFederal Office of Topography swisstopo\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            );
        
    
            tile_layer_29f017e616b80eed2afe50f05cdb866c.addTo(map_1);
        
    
            var tile_layer_cad5b3c2567140593e06518411bb63f3 = L.tileLayer(
                "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.swisstlm3d-wanderwege/default/current/3857/{z}/{x}/{y}.png",
                {"attribution": "\u0026copy \u003ca href=https://www.swisstopo.admin.ch/en/home.html\"\u003eFederal Office of Topography swisstopo\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            );
        
    
            tile_layer_cad5b3c2567140593e06518411bb63f3.addTo(map_1);
        
    
            var tile_layer_f8be6f49cec368799e11bdb379bf5057 = L.tileLayer(
                "https://earthengine.googleapis.com/v1/projects/earthengine-legacy/maps/3ac491c3a121148fd2d93151d6ef39c7-ab43808c57735301cf9f266a18f4a220/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            );
        
    
            tile_layer_f8be6f49cec368799e11bdb379bf5057.addTo(map_1);
        
    
            var tile_layer_44ed5a393d68ce0c3bfb99151b8feeaa = L.tileLayer(
                "https://earthengine.googleapis.com/v1/projects/earthengine-legacy/maps/9ff9d82d22f26de3eed71e72695335ac-00d20e2c2a824e477dba67a5d2b546cf/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            );
        
    
            var tile_layer_96420b187238f1db13e4dffd3cf2b41e = L.tileLayer(
                "https://earthengine.googleapis.com/v1/projects/earthengine-legacy/maps/ccf9a6f8908466d90118cabd9d0672ab-385ddd78de3ad1add76a1b77f562e4c3/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            );
        
    
            var tile_layer_bb610043bd660a44ab3e46cf622b9ba6 = L.tileLayer(
                "https://earthengine.googleapis.com/v1/projects/earthengine-legacy/maps/b65daadab4a4d66ef9faf0c7f389cdf7-b2f4537ac60885d31834c8144ad23b8f/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            );
        
    
            var layer_control_01bb0f2c72ccedd47564800bf765c214_layers = {
                base_layers : {
                },
                overlays :  {
                    "Satellite 2024-05-20" : tile_layer_f8be6f49cec368799e11bdb379bf5057,
                    "Satellite 2024-05-18" : tile_layer_44ed5a393d68ce0c3bfb99151b8feeaa,
                    "Satellite 2024-05-17" : tile_layer_96420b187238f1db13e4dffd3cf2b41e,
                    "Satellite 2024-05-16" : tile_layer_bb610043bd660a44ab3e46cf622b9ba6,
                },
            };
            let layer_control_01bb0f2c72ccedd47564800bf765c214 = L.control.layers(
                layer_control_01bb0f2c72ccedd47564800bf765c214_layers.base_layers,
                layer_control_01bb0f2c72ccedd47564800bf765c214_layers.overlays,
                {"autoZIndex": true, "collapsed": true, "position": "topright"}
            ).addTo(map_1);

        
L.control.sideBySide([tile_layer_f8be6f49cec368799e11bdb379bf5057, tile_layer_44ed5a393d68ce0c3bfb99151b8feeaa, tile_layer_96420b187238f1db13e4dffd3cf2b41e, tile_layer_bb610043bd660a44ab3e46cf622b9ba6],[]).addTo(map_1);