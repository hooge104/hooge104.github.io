    
    
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

            

        
    
            var tile_layer_5799feac0273419d98bcd985dd6e042a = L.tileLayer(
                "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg",
                {"attribution": "\u0026copy \u003ca href=https://www.swisstopo.admin.ch/en/home.html\"\u003eFederal Office of Topography swisstopo\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_4fea1b3dcb9b408ca352dcc42d144ffb = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/875e8dbe0057861dcc9a3301e1e36f60-0ab49a3c9c9481e14bc379a3a59c94b5/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_2dc34adf55564c888c6818a7b8c0c1b7 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/c6039fecced37350de30a782effec37b-65ab5c26eabe0193b0d59dade2f7f616/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_3e52e4eea229476e882257114e11e534 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/4d42d951e3beaa1a6a3b1cbeecc71f3f-e5e370179b86e92ed0bdeb40ba259bf1/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_1a80b1e111ef4b3e92fe60c09788e8b3 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/c746ad1ef6f9ff300107a2d90b20ec4f-6a603fe5c15a848bf9a17fdc56b28b1a/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_2453c5db789b4a55a25b9ca5fa57cd76 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/b97aa610a00fc89ae6eec058051c1851-b3591a6f4705253af95e3813d3ca953b/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_d09fd547b0ac486e9092a695378a31e5 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/d2fc39e71515648ba3ba354b1d85ef81-f1d1360efe2dfbb61699dd12ca907c9a/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var layer_control_1c40ffc7337946e1a32ff69176f0634e = {
                base_layers : {
                    "Swisstopo" : tile_layer_5799feac0273419d98bcd985dd6e042a,
                },
                overlays :  {
                    "Satellite 2022-05-14" : tile_layer_4fea1b3dcb9b408ca352dcc42d144ffb,
                    "Satellite 2022-05-13" : tile_layer_2dc34adf55564c888c6818a7b8c0c1b7,
                    "Satellite 2022-05-12" : tile_layer_3e52e4eea229476e882257114e11e534,
                    "Snow cover 2022-05-14" : tile_layer_1a80b1e111ef4b3e92fe60c09788e8b3,
                    "Snow cover 2022-05-13" : tile_layer_2453c5db789b4a55a25b9ca5fa57cd76,
                    "Snow cover 2022-05-12" : tile_layer_d09fd547b0ac486e9092a695378a31e5,
                },
            };
            L.control.layers(
                layer_control_1c40ffc7337946e1a32ff69176f0634e.base_layers,
                layer_control_1c40ffc7337946e1a32ff69176f0634e.overlays,
                {"autoZIndex": true, "collapsed": true, "position": "topright"}
            ).addTo(map_1);
            tile_layer_2dc34adf55564c888c6818a7b8c0c1b7.remove();
            tile_layer_3e52e4eea229476e882257114e11e534.remove();
            tile_layer_2453c5db789b4a55a25b9ca5fa57cd76.remove();
            tile_layer_d09fd547b0ac486e9092a695378a31e5.remove();
        
L.control.sideBySide([tile_layer_4fea1b3dcb9b408ca352dcc42d144ffb, tile_layer_2dc34adf55564c888c6818a7b8c0c1b7, tile_layer_3e52e4eea229476e882257114e11e534],[tile_layer_1a80b1e111ef4b3e92fe60c09788e8b3, tile_layer_2453c5db789b4a55a25b9ca5fa57cd76, tile_layer_d09fd547b0ac486e9092a695378a31e5]).addTo(map_1);