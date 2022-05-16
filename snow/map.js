

            var map_1 = L.map(
                "map_1",
                {
                    center: [46.75, 8.5],
                    crs: L.CRS.EPSG3857,
                    zoom: 10,
                    minzoom: 8,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );





            var tile_layer_49950e72d1824b5cb5e4573089bd1df2 = L.tileLayer(
                "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg",
                {"attribution": "\u0026copy \u003ca href=https://www.swisstopo.admin.ch/en/home.html\"\u003eFederal Office of Topography swisstopo\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);


            var tile_layer_748e319fa0374fa088d65a04e9e677e4 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/7d32fff0fd55cbf0d74fb4e594210f45-7794dcc40af3cf76bfd6ddf6b6f2f9be/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);


            var tile_layer_88dde6da50754a72b2b4c36187a719ad = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/4dd39e9be3d0b9aeae70696ed4748cf7-e1ec12bb538b57c4eeba167cbd821d95/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);


            var tile_layer_9c3a24fc2bdd4e15a2e17ff4fbe6e55e = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/00cc5381d94abb2a3ce099dca8e3db7d-deea2b3acf5fe1c5c2b0722d1f88535d/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);


            var tile_layer_e2fe256633ff4613aebe26d569cf737e = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/2f6d29d7cb76f12a33ebd77b7af6b4b4-d0eeba3c3afffdc732302447a2a0cb83/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);


            var tile_layer_d5f5a73ff58d4518ab3c691f713549b9 = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/728f8d2208f61ef7cf87f471655a3019-52873554fedeca83b0c595221a2d6255/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);


            var tile_layer_3308edb79d8c4368ba5b221b1505e4ad = L.tileLayer(
                "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/445b4b45201b719c0d0f1e451b95df69-4ab5ced855a11c9a9faba4714da13235/tiles/{z}/{x}/{y}",
                {"attribution": "\u0026copy; \u003ca href=\"https://earthengine.google.com/\"\u003eGoogle Earth Engine\u003c/a\u003e", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_1);


            var layer_control_483b69042b6d499aa1948d4405e52b88 = {
                base_layers : {
                    "Swisstopo" : tile_layer_49950e72d1824b5cb5e4573089bd1df2,
                },
                overlays :  {
                    "Satellite 2022-05-14" : tile_layer_748e319fa0374fa088d65a04e9e677e4,
                    "Satellite 2022-05-13" : tile_layer_88dde6da50754a72b2b4c36187a719ad,
                    "Satellite 2022-05-12" : tile_layer_9c3a24fc2bdd4e15a2e17ff4fbe6e55e,
                    "Snow cover 2022-05-14" : tile_layer_e2fe256633ff4613aebe26d569cf737e,
                    "Snow cover 2022-05-13" : tile_layer_d5f5a73ff58d4518ab3c691f713549b9,
                    "Snow cover 2022-05-12" : tile_layer_3308edb79d8c4368ba5b221b1505e4ad,
                },
            };
            L.control.layers(
                layer_control_483b69042b6d499aa1948d4405e52b88.base_layers,
                layer_control_483b69042b6d499aa1948d4405e52b88.overlays,
                {"autoZIndex": true, "collapsed": true, "position": "topright"}
            ).addTo(map_1);
            tile_layer_88dde6da50754a72b2b4c36187a719ad.remove();
            tile_layer_9c3a24fc2bdd4e15a2e17ff4fbe6e55e.remove();
            tile_layer_d5f5a73ff58d4518ab3c691f713549b9.remove();
            tile_layer_3308edb79d8c4368ba5b221b1505e4ad.remove();

L.control.sideBySide([tile_layer_748e319fa0374fa088d65a04e9e677e4, tile_layer_88dde6da50754a72b2b4c36187a719ad, tile_layer_9c3a24fc2bdd4e15a2e17ff4fbe6e55e],[tile_layer_e2fe256633ff4613aebe26d569cf737e, tile_layer_d5f5a73ff58d4518ab3c691f713549b9, tile_layer_3308edb79d8c4368ba5b221b1505e4ad]).addTo(map_1);
