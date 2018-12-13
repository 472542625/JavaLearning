/**
 * Created by Administrator on 2018/8/14/014.
 */
//var vector_BJ_ldl_layer1;
//function add_BJ_ldl_layer1() {
//
//    vector_BJ_ldl_layer1 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0 and 0.07'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(236,252,204)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(236,252,204,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_ldl_layer1);
//
//}
//var vector_BJ_ldl_layer2;
//function add_BJ_ldl_layer2() {
//
//    vector_BJ_ldl_layer2 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.0700001 and 0.2'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(218,240,158)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(218,240,158,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_ldl_layer2);
//
//}
//var vector_BJ_ldl_layer3;
//function add_BJ_ldl_layer3() {
//
//    vector_BJ_ldl_layer3 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.2000001 and 0.4'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(199,227,113)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(199,227,113,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_ldl_layer3);
//
//}
//var vector_BJ_ldl_layer4;
//function add_BJ_ldl_layer4() {
//
//    vector_BJ_ldl_layer4 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.400001 and 0.7'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(180,217,69)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(180,217,69,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_ldl_layer4);
//
//}
//var vector_BJ_ldl_layer5;
//function add_BJ_ldl_layer5() {
//
//    vector_BJ_ldl_layer5 = new ol.layer.Vector({
//        source: new ol.source.Vector({
//            format: new ol.format.GeoJSON(),
//            url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.700001 and 1'
//        }),
//        style: function (feature, resolution) {
//            return new ol.style.Style({
//                //stroke: new ol.style.Stroke({
//                //    color: 'rgb(157,204,16)',
//                //    width: 3
//                //}),
//                fill:new ol.style.Fill({
//
//                    color:'rgba(157,204,16,0.8)'
//
//                })
//            });
//        },
//        zIndex: 999
//    });
//    map.addLayer(vector_BJ_ldl_layer5);
//
//}


//var vector_BJ_ldl_layer1;
//function add_BJ_ldl_layer1() {
//    var featurearray = [];
//    var source;
//    //矢量图层 获取gejson数据
//    //&cql_filter=age between 0 and 60
//    $.ajax({
//        // url: "data/" + dataurl,
//        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0 and 0.07',
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
//            for (var i = 0; i < coord_first.length; i++) {
//
//                var polygon = new ol.Feature({
//
//
//                    geometry: new ol.geom.Polygon([coord_first[i]]),
//                    地物名称: features[i].properties.GREENNAME,
//                    绿地面积: features[i].properties.greenArea,
//                    绿地率: features[i].properties.greentrate,
//
//                });
//
//
//                polygon.setStyle(new ol.style.Style({
//
//
//                        text: new ol.style.Text({
//                            text: "" + features[i].properties.GREENNAME,
//                            fill: new ol.style.Fill({
//                                color: 'black'
//                            })
//                        }),
//                        fill: new ol.style.Fill({
//
//                            color: 'rgba(236,252,204,0.8)'
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
//            vector_BJ_ldl_layer1 = new ol.layer.Vector({
//                source: source,
//                zIndex: 1002
//            });
//            map.addLayer(vector_BJ_ldl_layer1);
//        },
//        error: function () {
//            alert('error');
//        }
//    })
//}
//var vector_BJ_ldl_layer2;
//functi}on add_BJ_ldl_layer2() {
//    var featurearray = [];
//    var source;
//    //矢量图层 获取gejson数据
//    //&cql_filter=age between 0 and 60
//    $.ajax({
//        // url: "data/" + dataurl,
//        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.070000001 and 0.2',
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
//            for (var i = 0; i < coord_first.length; i++) {
//
//                var polygon = new ol.Feature({
//
//
//                    geometry: new ol.geom.Polygon([coord_first[i]]),
//                    地物名称: features[i].properties.GREENNAME,
//                    绿地面积: features[i].properties.greenArea,
//                    绿地率: features[i].properties.greentrate,
//
//                });
//
//
//                polygon.setStyle(new ol.style.Style({
//
//
//                        text: new ol.style.Text({
//                            text: "" + features[i].properties.GREENNAME,
//                            fill: new ol.style.Fill({
//                                color: 'black'
//                            })
//                        }),
//                        fill: new ol.style.Fill({
//
//                            color: 'rgba(236,252,204,0.8)'
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
//            vector_BJ_ldl_layer2 = new ol.layer.Vector({
//                source: source,
//                zIndex: 1002
//            });
//            map.addLayer(vector_BJ_ldl_layer2);
//        },
//        error: function () {
//            alert('error');
//        }
//    })
//}
//var vector_BJ_ldl_layer3;
//function add_BJ_ldl_layer3() {
//    var featurearray = [];
//    var source;
//    //矢量图层 获取gejson数据
//    //&cql_filter=age between 0 and 60
//    $.ajax({
//        // url: "data/" + dataurl,
//        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.200001 and 0.4',
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
//                    geometry: new ol.geom.Polygon([coord_first[i]]),
//                    地物名称: features[i].properties.GREENNAME,
//                    绿地面积: features[i].properties.greenArea,
//                    绿地率: features[i].properties.greentrate,
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
//                            color: 'rgba(180,217,69,0.8)'
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
//            vector_BJ_ldl_layer3 = new ol.layer.Vector({
//                source: source,
//                zIndex: 1002
//            });
//            map.addLayer(vector_BJ_ldl_layer3);
//        },
//        error: function () {
//            alert('error');
//        }
//    })
//}
//var vector_BJ_ldl_layer4;
//function add_BJ_ldl_layer4() {
//    var featurearray = [];
//    var source;
//    //矢量图层 获取gejson数据
//    //&cql_filter=age between 0 and 60
//    $.ajax({
//        // url: "data/" + dataurl,
//        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.400001 and 0.7',
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
//                    geometry: new ol.geom.Polygon([coord_first[i]]),
//                    地物名称: features[i].properties.GREENNAME,
//                    绿地面积: features[i].properties.greenArea,
//                    绿地率: features[i].properties.greentrate,
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
//                            color: 'rgba(180,217,69,0.8)'
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
//            vector_BJ_ldl_layer4 = new ol.layer.Vector({
//                source: source,
//                zIndex: 1002
//            });
//            map.addLayer(vector_BJ_ldl_layer4);
//        },
//        error: function () {
//            alert('error');
//        }
//    })
//}
//var vector_BJ_ldl_layer5;
//function add_BJ_ldl_layer5() {
//    var featurearray = [];
//    var source;
//    //矢量图层 获取gejson数据
//    //&cql_filter=age between 0 and 60
//    $.ajax({
//        // url: "data/" + dataurl,
//        url: server_url+'geoserver/wfs?service=wfs&version=1.1.0&request=GetFeature&typeNames=forest:BJ_ldl&outputFormat=application/json&srsname=EPSG:4326&cql_filter=greentrate between 0.700001 and 1',
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
//            for (var i = 0; i < coord_first.length; i++) {
//
//                var polygon = new ol.Feature({
//
//
//                    geometry: new ol.geom.Polygon([coord_first[i]]),
//                    地物名称: features[i].properties.GREENNAME,
//                    绿地面积: features[i].properties.greenArea,
//                    绿地率: features[i].properties.greentrate,
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
//                        
//                        text : new ol.style.Text({
//							text : "  " + features[i].properties.GREENNAME+"  ",
//							fill : new ol.style.Fill({
//								color : 'white'
//							}),
//							backgroundFill:new ol.style.Fill({
//								color : 'rgb(0,0,0)'
//							}),
//							offsetY : 45
//
//						}),
//                        
//                        fill: new ol.style.Fill({
//
//                            color: 'rgba(157,204,16,0.8)'
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
//            vector_BJ_ldl_layer5 = new ol.layer.Vector({
//                source: source,
//                zIndex: 1002
//            });
//            map.addLayer(vector_BJ_ldl_layer5);
//        },
//        error: function () {
//            alert('error');
//        }
//    })
//}

 

//function add_BJ_ldl_layer() {

   // add_BJ_ldl_layer1();
    ////add_BJ_ldl_layer2();
    //add_BJ_ldl_layer3();
   // add_BJ_ldl_layer4();
   // add_BJ_ldl_layer5();
  

//}

