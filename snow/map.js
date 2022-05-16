    
    
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

            

        
    
            var tile_layer_8616b5b4728248ef88acb87794026cb4 = L.tileLayer(
                "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg",
                {"attribution": "\u0026copy \u003ca href=https://www.swisstopo.admin.ch/en/home.html\"\u003eFederal Office of Topography swisstopo\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_1448dddf3c544e6fba960406b2896c0f = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/c5a2237047d69fba9e1a174d7bb6a9e6-b671655ddf1d9498ac38f90a28992775/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_b32494a6d04d4e71bd62ef2894dc3e13 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/241c0dd0815d8722962697d8b7ba96b3-d72263819325a365fe30ed58e1fefef3/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_76ab3f9894d2401891db3d2219038153 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/57316375970f683195bcc888eaa71a9d-529cc5d3a553b9a5e02abc7b20a37e4c/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_c958711ee3e94765be0d871c6bd2ce3e = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/d958ee6c797b6ca8bfb8cd4a39995590-fdec926aa1b28d84f4ebb9215c638472/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_3afd4a81155f4f6dabd7b3b3994f9f79 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/3076f40a3a88659737d21c7be4532cc3-5a52f62b951898fb2323acc24c005829/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var tile_layer_88be6f05a21148dfbde456e2171625b9 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/1c74dfd0d648234b8cab6a1b52a3f425-ae27dbe984136628d2dcdeab70e150da/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);
        
    
            var layer_control_5240b21178a645fba25f07ac82bfedbf = {
                base_layers : {
                    "Swisstopo" : tile_layer_8616b5b4728248ef88acb87794026cb4,
                },
                overlays :  {
                    "Satellite 2022-05-14" : tile_layer_1448dddf3c544e6fba960406b2896c0f,
                    "Satellite 2022-05-13" : tile_layer_b32494a6d04d4e71bd62ef2894dc3e13,
                    "Satellite 2022-05-12" : tile_layer_76ab3f9894d2401891db3d2219038153,
                    "Snow cover 2022-05-14" : tile_layer_c958711ee3e94765be0d871c6bd2ce3e,
                    "Snow cover 2022-05-13" : tile_layer_3afd4a81155f4f6dabd7b3b3994f9f79,
                    "Snow cover 2022-05-12" : tile_layer_88be6f05a21148dfbde456e2171625b9,
                },
            };
            L.control.layers(
                layer_control_5240b21178a645fba25f07ac82bfedbf.base_layers,
                layer_control_5240b21178a645fba25f07ac82bfedbf.overlays,
                {"autoZIndex": true, "collapsed": false, "position": "topright"}
            ).addTo(map_1);
        
L.control.sideBySide([],[]).addTo(map_1);