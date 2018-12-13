/**
 * Created by Administrator on 2018/8/14/014.
 * 绿化覆盖率
 */

//var vector_BJ_lhfg_layer1test;
//function add_BJ_lhfg_layer1test() {
//
//    vector_BJ_lhfg_layer1test = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_lhfg&outputFormat=application/json&srsname=EPSG:4326&cql_filter=GreenCrate between 0 and 0.1'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(204,255,204)',
//                //    width: 3
//                //}),
//                fill: new ol.style.Fill({
//
//                    color: 'rgba(204,255,204,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_lhfg_layer1test);
//
//}
//function del_BJ_lhfg_layer1test() {
//
//    delete_layer(vector_BJ_lhfg_layer1test);
//
//}


//var vector_BJ_lhfg_layer1;
//function add_BJ_lhfg_layer1() {
//
//    vector_BJ_lhfg_layer1 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_lhfg&outputFormat=application/json&srsname=EPSG:4326&cql_filter=GreenCrate between 0 and 0.1'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(204,255,204)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(204,255,204,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_lhfg_layer1);
//
//}

//var vector_BJ_lhfg_layer2;
//function add_BJ_lhfg_layer2() {
//
//    vector_BJ_lhfg_layer2 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_lhfg&outputFormat=application/json&srsname=EPSG:4326&cql_filter=GreenCrate between 0.10000001 and 0.3'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(164,245,157)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(164,245,157,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_lhfg_layer2);
//
//}

//var vector_BJ_lhfg_layer3;
//function add_BJ_lhfg_layer3() {
//
//    vector_BJ_lhfg_layer3 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_lhfg&outputFormat=application/json&srsname=EPSG:4326&cql_filter=GreenCrate between 0.3000001 and 0.6'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(123,232,111)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(123,232,111,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_lhfg_layer3);
//
//}
//
//
//var vector_BJ_lhfg_layer4;
//function add_BJ_lhfg_layer4() {
//
//    vector_BJ_lhfg_layer4 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_lhfg&outputFormat=application/json&srsname=EPSG:4326&cql_filter=GreenCrate between 0.6000001 and 0.9'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(77,217,67)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(77,217,67,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_lhfg_layer4);
//
//}
//
//
//var vector_BJ_lhfg_layer5;
//function add_BJ_lhfg_layer5() {
//
//    vector_BJ_lhfg_layer5 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_lhfg&outputFormat=application/json&srsname=EPSG:4326&cql_filter=GreenCrate between 0.90000001 and 4'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(14,204,14)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(14,204,14,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_lhfg_layer5);
//
//}


//var vector_BJ_lhfg_layer1;
//function add_BJ_lhfg_layer1() {
//    var featurearray = [];
//    var source;
//    //矢量图层 获取gejson数据
//    //&cql_filter=age between 0 and 60
//    $.ajax({
//        // url: "data/" + dataurl,
//        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_lhfg&outputFormat=application/json&srsname=EPSG:4326&cql_filter=GreenCrate between 0 and 0.1',
//        type: "GET",
//        success: function (result) {
//
//            var features = result.features;
//            var coord_first = [];
//
//
//            for (var i = 0; i < features.length; i++) {
//                var coord_second = [];
//
//                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {
//
//                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
//                }
//
//                coord_first.push(coord_second);
//
//
//            }
//            // console.log(coord_first[0]);
//            for (var i = 0; i < coord_first.length; i++) {
//
//                var polygon = new ol.Feature({
//
//
//                    geometry: new ol.geom.Polygon([coord_first[i]]),
//                    地物名称: features[i].properties.GREENNAME,
//                    绿化面积:features[i].properties.GreenArea,
//                    绿化率:features[i].properties.GreenCrate,
//                });
//
//
//                polygon.setStyle(new ol.style.Style({
//                        //image: new ol.style.Icon({
//                        //    //color: '#4271AE',
//                        //    src: 'images/olimg/park.png',
//                        //    scale: 0.1
//                        //}),
//
//                        text: new ol.style.Text({
//                            text: "" + features[i].properties.GREENNAME,
//                            fill: new ol.style.Fill({
//                                color: 'black'
//                            }),
//                            padding:[10,0,0,0]
//                        }),
//                        fill: new ol.style.Fill({
//
//                            color: 'rgba(204,255,204,0.8)'
//
//                        }),
//                        //stroke: new ol.style.Stroke({
//                        //    color: '#ff0000'
//                        //})
//
//                    })
//                );
//                featurearray.push(polygon);
//
//            }
//
//            //alert(featurearray.length);
//            source = new ol.source.Vector({
//                features: featurearray
//            });
//            vector_BJ_lhfg_layer1 = new ol.layer.Vector({
//                source: source,
//                zIndex: 1002
//            });
//            map.addLayer(vector_BJ_lhfg_layer1);
//        },
//        error: function () {
//            alert('error');
//        }
//    })
//}
//
//
//var vector_BJ_lhfg_layer2;
//function add_BJ_lhfg_layer2() {
//    var featurearray = [];
//    var source;
//    //矢量图层 获取gejson数据
//    //&cql_filter=age between 0 and 60
//    $.ajax({
//        // url: "data/" + dataurl,
//        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_lhfg&outputFormat=application/json&srsname=EPSG:4326&cql_filter=GreenCrate between  0.10000001 and 0.3',
//        type: "GET",
//        success: function (result) {
//
//            var features = result.features;
//            var coord_first = [];
//
//
//            for (var i = 0; i < features.length; i++) {
//                var coord_second = [];
//
//                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {
//
//                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
//                }
//
//                coord_first.push(coord_second);
//
//
//            }
//            // console.log(coord_first[0]);
//
//
//            for (var i = 0; i < features.length; i++) {
//
//                var polygon = new ol.Feature({
//
//
//                    geometry: new ol.geom.Polygon([coord_first[i]]),
//                    地物名称: features[i].properties.GREENNAME,
//                    绿化面积:features[i].properties.GreenArea,
//                    绿化率:features[i].properties.GreenCrate,
//                });
//
//
//                polygon.setStyle(new ol.style.Style({
//                        //image: new ol.style.Icon({
//                        //    //color: '#4271AE',
//                        //    src: 'images/olimg/park.png',
//                        //    scale: 0.1
//                        //}),
//
//                        text: new ol.style.Text({
//                            text: "" + features[i].properties.GREENNAME,
//                            fill: new ol.style.Fill({
//                                color: 'black'
//                            })
//                        }),
//                        fill: new ol.style.Fill({
//
//                            color: 'rgba(164,245,157,0.8)'
//
//                        }),
//                        //stroke: new ol.style.Stroke({
//                        //    color: '#ff0000'
//                        //})
//
//                    })
//                );
//                featurearray.push(polygon);
//
//            }
//            //// console.log(featurearray);
//            source = new ol.source.Vector({
//                features: featurearray
//            });
//            vector_BJ_lhfg_layer2 = new ol.layer.Vector({
//                source: source,
//                zIndex: 1002
//            });
//            map.addLayer(vector_BJ_lhfg_layer2);
//        },
//        error: function () {
//            alert('error');
//        }
//    })
//}
//
//var vector_BJ_lhfg_layer3;
//function add_BJ_lhfg_layer3() {
//    var featurearray = [];
//    var source;
//    //矢量图层 获取gejson数据
//    //&cql_filter=age between 0 and 60
//    $.ajax({
//        // url: "data/" + dataurl,
//        url:server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_lhfg&outputFormat=application/json&srsname=EPSG:4326&cql_filter=GreenCrate between   0.3000001 and 0.6',
//        type: "GET",
//        success: function (result) {
//
//            var features = result.features;
//            var coord_first = [];
//
//
//            for (var i = 0; i < features.length; i++) {
//                var coord_second = [];
//
//                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {
//
//                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
//                }
//
//                coord_first.push(coord_second);
//
//
//            }
//            // console.log(coord_first[0]);
//
//
//            for (var i = 0; i < features.length; i++) {
//
//                var polygon = new ol.Feature({
//
//
//                    geometry: new ol.geom.Polygon([coord_first[i]]),
//                    地物名称: features[i].properties.GREENNAME,
//                    绿化面积:features[i].properties.GreenArea,
//                    绿化率:features[i].properties.GreenCrate,
//                });
//
//
//                polygon.setStyle(new ol.style.Style({
//                        //image: new ol.style.Icon({
//                        //    //color: '#4271AE',
//                        //    src: 'images/olimg/park.png',
//                        //    scale: 0.1
//                        //}),
//
//                        text: new ol.style.Text({
//                            text: "" + features[i].properties.GREENNAME,
//                            fill: new ol.style.Fill({
//                                color: 'black'
//                            })
//                        }),
//                        fill: new ol.style.Fill({
//
//                            color:'rgba(123,232,111,0.8)'
//
//                        }),
//                        //stroke: new ol.style.Stroke({
//                        //    color: '#ff0000'
//                        //})
//
//                    })
//                );
//                featurearray.push(polygon);
//
//            }
//            //// console.log(featurearray);
//            source = new ol.source.Vector({
//                features: featurearray
//            });
//            vector_BJ_lhfg_layer3 = new ol.layer.Vector({
//                source: source,
//                zIndex: 1002
//            });
//            map.addLayer(vector_BJ_lhfg_layer3);
//        },
//        error: function () {
//            alert('error');
//        }
//    })
//}
//
//var vector_BJ_lhfg_layer4;
//function add_BJ_lhfg_layer4() {
//    var featurearray = [];
//    var source;
//    //矢量图层 获取gejson数据
//    //&cql_filter=age between 0 and 60
//    $.ajax({
//        // url: "data/" + dataurl,
//        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_lhfg&outputFormat=application/json&srsname=EPSG:4326&cql_filter=GreenCrate between   0.6000001 and 0.9',
//        type: "GET",
//        success: function (result) {
//
//            var features = result.features;
//            var coord_first = [];
//
//
//            for (var i = 0; i < features.length; i++) {
//                var coord_second = [];
//
//                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {
//
//                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
//                }
//
//                coord_first.push(coord_second);
//
//
//            }
//            // console.log(coord_first[0]);
//
//
//            for (var i = 0; i < features.length; i++) {
//
//                var polygon = new ol.Feature({
//
//
//                    geometry: new ol.geom.Polygon([coord_first[i]]),
//                    地物名称: features[i].properties.GREENNAME,
//                    绿化面积:features[i].properties.GreenArea,
//                    绿化率:features[i].properties.GreenCrate,
//                });
//
//
//                polygon.setStyle(new ol.style.Style({
//                        //image: new ol.style.Icon({
//                        //    //color: '#4271AE',
//                        //    src: 'images/olimg/park.png',
//                        //    scale: 0.1
//                        //}),
//
//                        text: new ol.style.Text({
//                            text: "" + features[i].properties.GREENNAME,
//                            fill: new ol.style.Fill({
//                                color: 'black'
//                            })
//                        }),
//                        fill: new ol.style.Fill({
//
//                            color:'rgba(77,217,67,0.8)'
//
//                        }),
//                        //stroke: new ol.style.Stroke({
//                        //    color: '#ff0000'
//                        //})
//
//                    })
//                );
//                featurearray.push(polygon);
//
//            }
//            //// console.log(featurearray);
//            source = new ol.source.Vector({
//                features: featurearray
//            });
//            vector_BJ_lhfg_layer4 = new ol.layer.Vector({
//                source: source,
//                zIndex: 1002
//            });
//            map.addLayer(vector_BJ_lhfg_layer4);
//        },
//        error: function () {
//            alert('error');
//        }
//    })
//}
//
//
//var vector_BJ_lhfg_layer5;
//function add_BJ_lhfg_layer5() {
//    var featurearray = [];
//    var source;
//    //矢量图层 获取gejson数据
//    //&cql_filter=age between 0 and 60
//    $.ajax({
//        // url: "data/" + dataurl,
//        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_lhfg&outputFormat=application/json&srsname=EPSG:4326&cql_filter=GreenCrate between   0.9000001 and 4',
//        type: "GET",
//        success: function (result) {
//
//            var features = result.features;
//            var coord_first = [];
//
//
//            for (var i = 0; i < features.length; i++) {
//                var coord_second = [];
//
//                for (var j = 0; j < features[i].geometry.coordinates[0][0].length; j++) {
//
//                    coord_second.push(ol.proj.fromLonLat(features[i].geometry.coordinates[0][0][j]));
//                }
//
//                coord_first.push(coord_second);
//
//
//            }
//            // console.log(coord_first[0]);
//
//
//            for (var i = 0; i < features.length; i++) {
//
//                var polygon = new ol.Feature({
//
//
//                    geometry: new ol.geom.Polygon([coord_first[i]]),
//                    地物名称: features[i].properties.GREENNAME+"   ",
//                    绿化面积:features[i].properties.GreenArea,
//                    绿化率:features[i].properties.GreenCrate,
//                });
//
//
//                polygon.setStyle(new ol.style.Style({
//                        //image: new ol.style.Icon({
//                        //    //color: '#4271AE',
//                        //    src: 'images/olimg/park.png',
//                        //    scale: 0.1
//                        //}),
//
//                        text: new ol.style.Text({
//                            text: "" + features[i].properties.GREENNAME,
//                            fill: new ol.style.Fill({
//                                color: 'black'
//                            })
//                        }),
//                        fill: new ol.style.Fill({
//
//                            color:'rgba(14,204,14,0.8)'
//
//                        }),
//                        //stroke: new ol.style.Stroke({
//                        //    color: '#ff0000'
//                        //})
//
//                    })
//                );
//                featurearray.push(polygon);
//
//            }
//            //// console.log(featurearray);
//            source = new ol.source.Vector({
//                features: featurearray
//            });
//            vector_BJ_lhfg_layer5 = new ol.layer.Vector({
//                source: source,
//                zIndex: 1002
//            });
//            map.addLayer(vector_BJ_lhfg_layer5);
//        },
//        error: function () {
//            alert('error');
//        }
//    })
//}
//
//function add_BJ_lhfg_layer() {
//
//    add_BJ_lhfg_layer1();
//    add_BJ_lhfg_layer2();
//    add_BJ_lhfg_layer3();
//    add_BJ_lhfg_layer4();
//    add_BJ_lhfg_layer5();
//
//
//}
//
//
//function delete_BJ_lhfg_layer() {
//
//    delete_layer(vector_BJ_lhfg_layer1);
//    delete_layer(vector_BJ_lhfg_layer2);
//    delete_layer(vector_BJ_lhfg_layer3);
//    delete_layer(vector_BJ_lhfg_layer4);
//    delete_layer(vector_BJ_lhfg_layer5);
//
//
//}