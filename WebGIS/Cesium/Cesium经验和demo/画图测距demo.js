var bimEngine;
var msgControl;
var toolbar;
var fileControl;
var spaceControl;
var domainControl;
var propertyControl;
var searchControl;
var markControl;
var storeyControl;
var roamingControl;
var bimevent;

var viewer = new Cesium.Viewer("cesiumContainer", {
    animation: false, //是否显示动画控件
    baseLayerPicker: false, //是否显示图层选择控件
    geocoder: true, //是否显示地名查找控件
    timeline: false, //是否显示时间线控件
    sceneModePicker: true, //是否显示投影方式控件
    navigationHelpButton: false, //是否显示帮助信息控件
    infoBox: true, //是否显示点击要素之后显示的信息
    imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
        url: "http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
        layer: "tdtBasicLayer",
        style: "default",
        format: "image/jpeg",
        tileMatrixSetID: "GoogleMapsCompatible",
        show: false
    })
});
var scene = viewer.scene;
var pinBuilder = new Cesium.PinBuilder();

var vecLayer = null,
    roadLayer = null,
    electricLayers = null;

var getEnumPropertyNames = function(obj) {
    var props = [];
    for (prop in obj) {
        props.push(prop + ': ' + obj[prop]);
    }
    return props;
}

var models = new Array();
models[0] = {
    id: 'house1',
    name: 'house1',
    url: '../SampleData/house/house1.gltf',
    lon: 121.41,
    lat: 31.22,
    height: 0,
    pid: '4e027d42-f033-4bab-87f1-e34c8860b90e'
};
models[1] = {
    id: 'house2',
    name: 'house2',
    url: '../SampleData/house/house2.gltf',
    lon: 121.42,
    lat: 31.21,
    height: 0,
    pid: '918dcfaa-4568-4468-ba03-e379deaa99b7'
};
models[2] = {
    id: 'house3',
    name: 'house3',
    url: '../SampleData/house/house3.gltf',
    lon: 121.43,
    lat: 31.20,
    height: 0,
    pid: '2071736b-0054-4041-ad34-34f2e7a975e5'
};
models[3] = {
    id: 'house4',
    name: 'house4',
    url: '../SampleData/house/house4.gltf',
    lon: 121.44,
    lat: 31.22,
    height: 0,
    pid: '4e027d42-f033-4bab-87f1-e34c8860b90e'
};
models[4] = {
    id: 'house5',
    name: 'house5',
    url: '../SampleData/house/house5.gltf',
    lon: 121.41,
    lat: 31.21,
    height: 0,
    pid: '918dcfaa-4568-4468-ba03-e379deaa99b7'
};
models[5] = {
    id: 'house6',
    name: 'house6',
    url: '../SampleData/house/house6.gltf',
    lon: 121.42,
    lat: 31.20,
    height: 0,
    pid: '2071736b-0054-4041-ad34-34f2e7a975e5'
};
models[6] = {
    id: 'house7',
    name: 'house7',
    url: '../SampleData/house/house7.gltf',
    lon: 121.43,
    lat: 31.22,
    height: 0,
    pid: '4e027d42-f033-4bab-87f1-e34c8860b90e'
};
models[7] = {
    id: 'house8',
    name: 'house8',
    url: '../SampleData/house/house8.gltf',
    lon: 121.44,
    lat: 31.21,
    height: 0,
    pid: '918dcfaa-4568-4468-ba03-e379deaa99b7'
};
models[8] = {
    id: 'house9',
    name: 'house9',
    url: '../SampleData/house/house9.gltf',
    lon: 121.45,
    lat: 31.20,
    height: 0,
    pid: '2071736b-0054-4041-ad34-34f2e7a975e5'
};
models[9] = {
    id: 'house10',
    name: 'house10',
    url: '../SampleData/house/house10.gltf',
    lon: 121.46,
    lat: 31.21,
    height: 0,
    pid: '918dcfaa-4568-4468-ba03-e379deaa99b7'
};
models[10] = {
    id: 'house11',
    name: 'house11',
    url: '../SampleData/house/house11.gltf',
    lon: 121.40,
    lat: 31.20,
    height: 0,
    pid: '4e027d42-f033-4bab-87f1-e34c8860b90e'
};
models[11] = {
    id: 'villa',
    name: 'villa',
    url: '../SampleData/house3/house3.gltf',
    lon: 121.45,
    lat: 31.22,
    height: 0,
    pid: '2071736b-0054-4041-ad34-34f2e7a975e5'
};

var loadedModels = [];

var shapes = new Array();
shapes[0] = {
    layer: '测试层',
    author: 'liu',
    date: '2017-06-18',
    ploy: [{
        name: 'A区',
        type: 'ploy',
        points: []
    }]
};



$(function() {

    /**初始化**/
    $("input[name='optionsRadios']").click(function() {
        if ($("input[name='optionsRadios']:eq(1)").prop("checked")) {
            //viewer.imageryLayers.addImageryProvider(vecLayer);
            vecLayer = viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
                url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
                layer: "tdtVecBasicLayer",
                style: "default",
                format: "image/jpeg",
                tileMatrixSetID: "GoogleMapsCompatible",
                show: false
            }));
        } else if ($("input[name='optionsRadios']:eq(0)").prop("checked")) {
            if (viewer.imageryLayers.contains(vecLayer)) {
                viewer.imageryLayers.remove(vecLayer);
            }
        }
    });
    //标记层
    $("#cbxPinLayer").change(function() {
        if ($("#cbxPinLayer").prop("checked")) {
            for (var i = 0; i < tempPinEntities.length; i++) {
                viewer.entities.add(tempPinEntities[i]);
            }

        } else {
            for (var i = 0; i < tempPinEntities.length; i++) {
                viewer.entities.remove(tempPinEntities[i]);
            }
        }
    });
    $("#pinColor").change(function() {
        $(this).css("background-color", $(this).val());
    });

    $("#cbxRoad").click(function() {
        if ($(this).prop("checked")) {
            roadLayer = viewer.imageryLayers.addImageryProvider(new Cesium.WebMapTileServiceImageryProvider({
                url: "http://t0.tianditu.com/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
                layer: "tdtImgAnnoLayer",
                style: "default",
                format: "image/jpeg",
                tileMatrixSetID: "GoogleMapsCompatible",
                show: false
            }));
        } else {
            viewer.imageryLayers.remove(roadLayer);
        }
    });
    $("#cbxTestArc").click(function() {
        if ($(this).prop("checked")) {
            electricLayers = viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
                url: 'https://nationalmap.gov.au/proxy/http://services.ga.gov.au/site_3/rest/services/Electricity_Infrastructure/MapServer'
            }));
            viewer.camera.flyTo({
                destination: Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.970, -5.730)
            });
        } else {
            viewer.imageryLayers.remove(electricLayers);
        }
    });
    $("#opts .btn").click(function() {
        window.setTimeout(function() {
            if ($("input[name='opt']:eq(0)").prop("checked")) {
                clearEffects();
                setTips("");
            } else if ($("input[name='opt']:eq(1)").prop("checked")) {
                clearEffects();
                SetMode("addPin");
                setTips("首先在地图上点击需要加点的位置，然后在弹出框内选取颜色，设置提示文字和显示内容，点击保存");
            } else if ($("input[name='opt']:eq(2)").prop("checked")) {
                tempPoints = [];
                for (var i = 0; i < tempEntities.length; i++) {
                    viewer.entities.remove(tempEntities[i]);
                }
                for (var i = 0; i < loadedModels.length; i++) {
                    if (loadedModels[i].color == Cesium.Color.SPRINGGREEN) {
                        loadedModels[i].color = {
                            red: 1,
                            green: 1,
                            blue: 1,
                            alpha: 1
                        };
                    }
                }
                clearEffects();
                setTips("绘制的图形被清除，点选页面标记可以删除标记");
                SetMode("erase");
            } else if ($("input[name='opt']:eq(3)").prop("checked")) {
                clearEffects();
                SetMode("drawLine");
                setTips("在地图上分别点击，即可绘制多个线段，点右键结束绘制");
            } else if ($("input[name='opt']:eq(4)").prop("checked")) {
                clearEffects();
                SetMode("drawCircle");
                setTips("第一次点击绘制圆心，第二次点击根据和圆心的位置绘制半径");
            } else if ($("input[name='opt']:eq(5)").prop("checked")) {
                clearEffects();
                SetMode("drawSquare");
                setTips("第一、二次点击绘制长方形的一个边，再次点击根据点和边的距离绘制方形");
            } else if ($("input[name='opt']:eq(6)").prop("checked")) {
                clearEffects();
                SetMode("drawPloy");
                setTips("如果需要绘制多边形，在地图上使用左键逐个点选地点，右击闭合多边形");
            } else if ($("input[name='opt']:eq(7)").prop("checked")) {
                clearEffects();
                SetMode("pickBuilding");
                setTips("点选建筑查看详细的三维模型");
            }
        }, 100);
    });

    var homeView = {
        destination: new Cesium.Cartesian3(-2852877.756667368, 4655857.919027944, 3288673.682311567),
        orientation: {
            direction: new Cesium.Cartesian3(0.5437275903005284, -0.8386290220423197, -0.03258329225728158),
            up: new Cesium.Cartesian3(0.05520718287689969, -0.00299987805272847, 0.9984704140286108)
        },
        // complete: function() { LoadModel(); },
    };

    setTimeout(
        function() {
            // scene.primitives.removeAll();
            //reset();
            viewer.camera.flyTo(homeView);

            //viewer.zoomTo(wyoming);
        }, 3000);

    //var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
    //Cesium.Cartesian3.fromDegrees(121.49, 31.22, 0.0));
    //var model = scene.primitives.add(Cesium.Model.fromGltf({
    //    url: '../SampleData/house/house1.gltf',
    //    modelMatrix: modelMatrix,
    //    scale: 20.0,
    //    name: 'SampleHouse',
    //    color: getColor('Red', 1)
    //}));

    $("#poly-show").click(function() {
        LoadModel();
    });

    $("#poly-hide").click(function() {
        HideModel();
    });

    //alert(getEnumPropertyNames(model).join('\r'));

});
// LoadGLTF
function LoadModel() {
    for (var i = 0; i < models.length; i++) {
        var hasLoaded = false;
        for (var j = 0; j < loadedModels.length; j++) {
            if (models[i].id == loadedModels[j].id) {
                hasLoaded = true;
            }
        }
        if (!hasLoaded) {
            var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
                Cesium.Cartesian3.fromDegrees(models[i].lon, models[i].lat, models[i].height));

            var model = scene.primitives.add(
                Cesium.Model.fromGltf({
                    url: models[i].url,
                    modelMatrix: modelMatrix,
                    scale: 20.0,
                    name: models[i].name,
                    id: models[i].id
                }));
            loadedModels.push(model);
        }
    }
    //var cartesian = viewer.camera.pickEllipsoid(loadedModels[0].modelMatrix, scene.globe.ellipsoid);
    //alert(getEnumPropertyNames(cartesian).join('\r'));

}
// hideGLTF
function HideModel() {
    for (var i = 0; i < loadedModels.length; i++) {
        scene.primitives.remove(loadedModels[i]);
    }
    loadedModels = [];
}

function setTips(message, close) {
    if ("" == message) {
        $("#message").fadeOut();
    } else {
        if (close != undefined && close == true) {
            $("#message").html(message).fadeOut();
        } else {
            $("#message").html(message).fadeIn();
        }
    }
}

function clearEffects() {
    if (handler != null) {
        handler.destroy();
    }
}

//设置各种操作模式
function SetMode(mode) {
    if (mode == "drawPloy") {
        tempPoints = [];
        handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
       //单击，画一个点，如果二个点以上，点之间连成线
        handler.setInputAction(function(click) {
            var cartesian = viewer.camera.pickEllipsoid(click.position, scene.globe.ellipsoid);
            if (cartesian) {
                var cartographic = Cesium.Cartographic.fromCartesian(cartesian);

                var longitudeString = Cesium.Math.toDegrees(cartographic.longitude);
                var latitudeString = Cesium.Math.toDegrees(cartographic.latitude);
                tempPoints.push({
                    lon: longitudeString,
                    lat: latitudeString
                });
                var tempLength = tempPoints.length;
                drawPoint(tempPoints[tempPoints.length - 1]);
                if (tempLength > 1) {
                    drawLine(tempPoints[tempPoints.length - 2], tempPoints[tempPoints.length - 1], true);
                }
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

        handler.setInputAction(function(click) {
            var cartesian = viewer.camera.pickEllipsoid(click.position, scene.globe.ellipsoid);
            if (cartesian) {
                var tempLength = tempPoints.length;
                if (tempLength < 3) {
                    alert('请选择3个以上的点再执行闭合操作命令');
                } else {
                    drawLine(tempPoints[0], tempPoints[tempPoints.length - 1], true);
                    drawPoly(tempPoints);
                    highLightAssetsInArea(tempPoints);
                    alert('多边形面积' + SphericalPolygonAreaMeters(tempPoints) + '平方米');
                    tempPoints = [];
                }

            }
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    } else if (mode == "pickBuilding") {
        handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
        handler.setInputAction(function(click) {
            var pick = scene.pick(click.position);
            if (Cesium.defined(pick) && Cesium.defined(pick.node) && Cesium.defined(pick.mesh)) {
                for (var i = 0; i < models.length; i++) {
                    if (models[i].id == pick.node._model.id) {
                        var modelName = models[i].name;
                        var modelId = models[i].id;
                        var modelBimId = models[i].pid;
                        highLigthModel(modelId);
                        viewer.camera.flyTo({
                            destination: Cesium.Cartesian3.fromDegrees(models[i].lon, parseFloat(models[i].lat) - 0.01, 2000.0),
                            orientation: {
                                direction: new Cesium.Cartesian3(0.5437275903005284, -0.8386290220423197, -0.03258329225728158),
                                up: new Cesium.Cartesian3(0.05520718287689969, -0.00299987805272847, 0.9984704140286108)
                            },
                            complete: function() {
                                if (confirm("你选择的是" + modelName + "，是否查看详细模型？")) {
                                    LoadBim(modelBimId);
                                }
                                unHighLightModel(modelId);
                            },
                        });
                    }
                }
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    } else if ("addPin" == mode) {
        handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
        handler.setInputAction(function(click) {
            var cartesian = viewer.camera.pickEllipsoid(click.position, scene.globe.ellipsoid);
            if (cartesian) {
                var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                tempPinLon = Cesium.Math.toDegrees(cartographic.longitude);
                tempPinLat = Cesium.Math.toDegrees(cartographic.latitude);
                $('#addPinModal').modal('show');
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    } else if ("erase" == mode) {
        handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
        handler.setInputAction(function(click) {
            var pick = scene.pick(click.position);
            if (Cesium.defined(pick) && Cesium.defined(pick.id) && Cesium.defined(pick.id._id)) {
                for (var i = 0; i < models.length; i++) {
                    if (pick.id != undefined && tempPinEntities[i].id == pick.id._id) {
                        removePoint(tempPinEntities[i]);
                        tempPinEntities.splice(i, 1);
                    }
                }
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    } else if ("drawLine" == mode) {
        tempPoints = [];
        handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
        handler.setInputAction(function(click) {
            var cartesian = viewer.camera.pickEllipsoid(click.position, scene.globe.ellipsoid);
            if (cartesian) {
                var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                var longitudeString = Cesium.Math.toDegrees(cartographic.longitude);

                var latitudeString = Cesium.Math.toDegrees(cartographic.latitude);
                tempPoints.push({
                    lon: longitudeString,
                    lat: latitudeString
                });
                var tempLength = tempPoints.length;

                drawPoint(tempPoints[tempPoints.length - 1]);
                if (tempLength > 1) {
                    drawLine(tempPoints[tempPoints.length - 2], tempPoints[tempPoints.length - 1], true);
                }
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
        handler.setInputAction(function(click) {
            tempPoints = [];
        }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);
    } else if ("drawCircle" == mode) {
        tempPoints = [];
        handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
        handler.setInputAction(function(click) {
            var cartesian = viewer.camera.pickEllipsoid(click.position, scene.globe.ellipsoid);
            if (cartesian) {
                var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                var longitudeString = Cesium.Math.toDegrees(cartographic.longitude);
                var latitudeString = Cesium.Math.toDegrees(cartographic.latitude);
                tempPoints.push({
                    lon: longitudeString,
                    lat: latitudeString
                });
                var tempLength = tempPoints.length;
                if (tempLength == 1) {
                    drawPoint(tempPoints[0]);
                } else if (tempLength == 2) {
                    drawPoint(tempPoints[1]);
                    drawLine(tempPoints[0], tempPoints[1], true);
                    //算两点间距离
                    var distance = getFlatternDistance(tempPoints[0].lat, tempPoints[0].lon, tempPoints[1].lat, tempPoints[1].lon);

                    var entity =
                        viewer.
                    entities.add({
                        position: Cesium.Cartesian3.fromDegrees(tempPoints[0].lon, tempPoints[0].lat),
                        ellipse: {
                            semiMinorAxis: distance,
                            semiMajorAxis: distance,
                            height: 0,
                            material: Cesium.Color.fromRandom({
                                alpha: 0.8
                            })
                        }
                    });
                    tempEntities.push(entity);

                    //高亮圈内模型
                    for (var i = 0; i < loadedModels.length; i++) {
                        for (var j = 0; j < models.length; j++) {
                            if (loadedModels[i].id == models[j].id && getFlatternDistance(models[j].lat, models[j].lon, tempPoints[0].lat, tempPoints[0].lon) <= distance) {
                                loadedModels[i].color = Cesium.Color.SPRINGGREEN;
                            }
                        }
                    }

                    //面积
                    setTimeout(function() {
                        alert("面积是 " + Math.PI * distance * distance + "平方米")
                    }, 500);

                    tempPoints = [];
                }
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    } else if ("drawSquare" == mode) {
        tempPoints = [];
        handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
        handler.setInputAction(function(click) {
            var cartesian = viewer.camera.pickEllipsoid(click.position, scene.globe.ellipsoid);
            if (cartesian) {
                var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                var longitudeString = Cesium.Math.toDegrees(cartographic.longitude);
                var latitudeString = Cesium.Math.toDegrees(cartographic.latitude);
                tempPoints.push({
                    lon: longitudeString,
                    lat: latitudeString
                });
                var tempLength = tempPoints.length;
                if (tempLength == 1) {
                    drawPoint(tempPoints[0]);
                } else if (tempLength == 2) {
                    //算两点间距离
                    var distance = getFlatternDistance(tempPoints[0].lat, tempPoints[0].lon, tempPoints[1].lat, tempPoints[1].lon);

                    var entity =
                        viewer.
                    entities.add({
                        position: Cesium.Cartesian3.fromDegrees(tempPoints[0].lon, tempPoints[0].lat),
                        ellipse: {
                            semiMinorAxis: distance,
                            semiMajorAxis: distance,
                            height: 0,
                            material: Cesium.Color.fromRandom({
                                alpha: 0.8
                            })
                        }
                    });
                    tempEntities.push(entity);

                    //高亮圈内模型
                    for (var i = 0; i < loadedModels.length; i++) {
                        for (var j = 0; j < models.length; j++) {
                            if (loadedModels[i].id == models[j].id && getFlatternDistance(models[j].lat, models[j].lon, tempPoints[0].lat, tempPoints[0].lon) <= distance) {
                                loadedModels[i].color = Cesium.Color.SPRINGGREEN;
                            }
                        }
                    }

                    tempPoints = [];
                }
            }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }
}

function drawPoint(point) {
    var entity =
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(point.lon, point.lat),
            point: {
                pixelSize: 10,
                color: Cesium.Color.CHARTREUSE
            }
        });
    tempEntities.push(entity);
}

function removePoint(entity) {
    viewer.entities.remove(entity);
}

function drawLine(point1, point2, showDistance) {
    var entity =
        viewer.entities.add({
            polyline: {
                positions: [Cesium.Cartesian3.fromDegrees(point1.lon, point1.lat), Cesium.Cartesian3.fromDegrees(point2.lon, point2.lat)],
                width: 10.0,
                material: new Cesium.PolylineGlowMaterialProperty({
                    color: Cesium.Color.CHARTREUSE.withAlpha(.5)
                })
            }
        });
    tempEntities.push(entity);

    // 展示距离
    if (showDistance) {
        var w = Math.abs(point1.lon - point2.lon);
        var h = Math.abs(point1.lat - point2.lat);
        var offsetV = w >= h ? 0.0005 : 0;
        var offsetH = w < h ? 0.001 : 0;
        var distance = getFlatternDistance(point1.lat, point1.lon, point2.lat, point2.lon);
        entity =
            viewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(((point1.lon + point2.lon) / 2) + offsetH,
                    ((point1.lat + point2.lat) / 2) + offsetV),
                label: {
                    text: distance.toFixed(1) + 'm',
                    font: '22px Helvetica',
                    fillColor: Cesium.Color.WHITE
                }
            });
        tempEntities.push(entity);
    }
}

function drawPoly(points) {
    var pArray = [];
    for (var i = 0; i < points.length; i++) {
        pArray.push(points[i].lon);
        pArray.push(points[i].lat);
    }
    var entity =
        viewer.entities.add({
            polygon: {
                hierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArray(pArray)),
                material: Cesium.Color.CHARTREUSE.withAlpha(.5)
            }
        });
    tempEntities.push(entity);
}

function getColor(colorName, alpha) {
    var color = Cesium.Color[colorName.toUpperCase()];
    return Cesium.Color.fromAlpha(color, parseFloat(alpha));
}

//判断点是否在多边形内
function PointInPoly(point, polyPoints) {
    for (var c = false, i = -1, l = polyPoints.length, j = l - 1; ++i < l; j = i)
        ((polyPoints[i].lat <= point.lat && point.lat < polyPoints[j].lat) || (polyPoints[j].lat <= point.lat && point.lat < polyPoints[i].lat)) && (point.lon < (polyPoints[j].lon - polyPoints[i].lon) * (point.lat - polyPoints[i].lat) / (polyPoints[j].lat - polyPoints[i].lat) + polyPoints[i].lon) && (c = !c);
    return c;
}

//选区内模型高亮
function highLightAssetsInArea(points) {

    for (var i = 0; i < loadedModels.length; i++) {
        for (var j = 0; j < models.length; j++) {
            if (loadedModels[i].id == models[j].id && PointInPoly(models[j], points)) {
                loadedModels[i].color = Cesium.Color.SPRINGGREEN;
            }
        }
    }
}

//高亮模型
function highLigthModel(modelId) {
    for (var i = 0; i < loadedModels.length; i++) {
        if (loadedModels[i].id == modelId) {
            loadedModels[i].color = Cesium.Color.SPRINGGREEN;
        }
    }
}

//取消高亮模型
function unHighLightModel(modelId) {
    for (var i = 0; i < loadedModels.length; i++) {
        if (loadedModels[i].id == modelId) {
            loadedModels[i].color = {
                red: 1,
                green: 1,
                blue: 1,
                alpha: 1
            };
        }
    }
}

//定位
function goLocation() {
    $('#flyToModal').modal('hide');
    $('#flyToModal').on('hidden.bs.modal', function(e) {
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees($("#jumpLon").val(), $("#jumpLat").val(), 1000.0)
        });
    });
}

//加点
function addPin() {
    $('#addPinModal').modal('hide');
    var pin = viewer.entities.add({
        name: $("#pinContent").val(),
        position: Cesium.Cartesian3.fromDegrees(tempPinLon, tempPinLat),
        billboard: {
            image: $("#pinLabel").val() == "" ? pinBuilder.fromColor(Cesium.Color[$("#pinColor").val().toUpperCase()], 48).toDataURL() : pinBuilder.fromText($("#pinLabel").val(), Cesium.Color[$("#pinColor").val().toUpperCase()], 64).toDataURL(),
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM
        }
    });
    tempPinEntities.push(pin);
    $("#pinLabel").val("");
    $("#pinContent").val("");
}

//计算两点间距离
function getFlatternDistance(lat1, lng1, lat2, lng2) {
    var EARTH_RADIUS = 6378137.0; //单位M
    var PI = Math.PI;

    function getRad(d) {
        return d * PI / 180.0;
    }
    var f = getRad((lat1 + lat2) / 2);
    var g = getRad((lat1 - lat2) / 2);
    var l = getRad((lng1 - lng2) / 2);

    var sg = Math.sin(g);
    var sl = Math.sin(l);
    var sf = Math.sin(f);

    var s, c, w, r, d, h1, h2;
    var a = EARTH_RADIUS;
    var fl = 1 / 298.257;

    sg = sg * sg;
    sl = sl * sl;
    sf = sf * sf;

    s = sg * (1 - sl) + (1 - sf) * sl;
    c = (1 - sg) * (1 - sl) + sf * sl;

    w = Math.atan(Math.sqrt(s / c));
    r = Math.sqrt(s * c) / w;
    d = 2 * w * a;
    h1 = (3 * r - 1) / 2 / c;
    h2 = (3 * r + 1) / 2 / s;

    return d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg));
}

//计算多边形面积
var earthRadiusMeters = 6371000.0;
var metersPerDegree = 2.0 * Math.PI * earthRadiusMeters / 360.0;
var radiansPerDegree = Math.PI / 180.0;
var degreesPerRadian = 180.0 / Math.PI;
var pointArr;

function SphericalPolygonAreaMeters(points) {
    var totalAngle = 0;
    for (var i = 0; i < points.length; i++) {
        var j = (i + 1) % points.length;
        var k = (i + 2) % points.length;
        totalAngle += Angle(points[i], points[j], points[k]);
    }
    var planarTotalAngle = (points.length - 2) * 180.0;
    var sphericalExcess = totalAngle - planarTotalAngle;
    if (sphericalExcess > 420.0) {
        totalAngle = points.length * 360.0 - totalAngle;
        sphericalExcess = totalAngle - planarTotalAngle;
    } else if (sphericalExcess > 300.0 && sphericalExcess < 420.0) {
        sphericalExcess = Math.abs(360.0 - sphericalExcess);
    }
    return sphericalExcess * radiansPerDegree * earthRadiusMeters * earthRadiusMeters;
}

/*角度*/
function Angle(p1, p2, p3) {
    var bearing21 = Bearing(p2, p1);
    var bearing23 = Bearing(p2, p3);
    var angle = bearing21 - bearing23;
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}
/*方向*/
function Bearing(from, to) {
    var lat1 = from.lat * radiansPerDegree;
    var lon1 = from.lon * radiansPerDegree;
    var lat2 = to.lat * radiansPerDegree;
    var lon2 = to.lon * radiansPerDegree;
    var angle = -Math.atan2(Math.sin(lon1 - lon2) * Math.cos(lat2), Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2));
    if (angle < 0) {
        angle += Math.PI * 2.0;
    }
    angle = angle * degreesPerRadian;
    return angle;
}

function LoadBim(projId) {
    //加载模型
    $('#myTabs li:eq(1) a').tab('show');

}