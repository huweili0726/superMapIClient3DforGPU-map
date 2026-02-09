/**
  * WebGL sample configuration file: contains sample category, name, thumbnail, file path
  */

var identification = {
    name: "WebGL"
};
var exampleConfig = {
    "layer": {
        name: "图层",
        name_en: "Layer",
        content: {
            "terrain": {
                name: "地形",
                name_en: "Terrain",
                content: [
                    {
                        name: "地形影像",
                        name_en: "Terrain And Imagery",
                        thumbnail: "terrainAndImagery.jpg",
                        fileName: "terrainAndImagery"
                    }
                ]
            },
            "imagery": {
                name: "影像",
                name_en: "Imagery",
                content: [
                    {
                        name: "时态",
                        name_en: "Dynamic Time",
                        thumbnail: "dynamicTime.jpg",
                        fileName: "dynamicTime"
                    },
                    {
                        name: "颜色设置",
                        name_en: "Color Setting",
                        thumbnail: "ImageryAdjustment.jpg",
                        fileName: "ImageryAdjustment"
                    },
                    {
                        name: "叠加二维地图",
                        name_en: "2D Map Overlaying",
                        thumbnail: "SuperMapTileImagery2.jpg",
                        fileName: "SuperMapTileImagery"
                    },
                    {
                        name: "安全认证",
                        name_en: "Token",
                        thumbnail: "tokenCredential.jpg",
                        fileName: "tokenCredential"
                    },
                    {
                        name:"多子域",
                        name_en:"Multi-windows",
                        thumbnail:"multiSubdomains.jpg",
                        fileName:"multiSubdomains"
                    }
                ]
            },
            "S3M": {
                name: "三维切片缓存(S3M)",
                name_en: "Spatial 3D Model",
                content: [
                    {
                        name: "倾斜模型",
                        name_en: "Oblique Photogrammetry",
                        thumbnail: "S3MTiles_suofeiya.jpg",
                        fileName: "S3MTiles_suofeiya"
                    },
                    {
                        name: "萨尔茨堡（水面特效）",
                        name_en: "Salzburg (water surface effects)",
                        thumbnail: "S3MTiles_srsb_water.jpg",
                        fileName: "S3MTiles_srsb_water"
                    },
                    {
                        name: "鸟巢（水面特效）",
                        name_en: "Bird's Nest (water surface effect)",
                        thumbnail: "S3MTiles_niaochao_water.jpg",
                        fileName: "S3MTiles_niaochao_water"
                    },
                    {
                        name: "CBD",
                        name_en: "CBD",
                        thumbnail: "S3MTiles_jingmo.jpg",
                        fileName: "S3MTiles_jingmo"
                    },
                    {
                        name: "BIM",
                        name_en: "BIM",
                        thumbnail: "S3MTiles_BIM.jpg",
                        fileName: "S3MTiles_BIM"
                    },
                    {
                        name: "矢量",
                        name_en: "Vector",
                        thumbnail: "S3MTiles_vector.jpg",
                        fileName: "S3MTiles_vector"
                    },
                    {
                        name: "地下管线",
                        name_en: "Underground Pipelines",
                        thumbnail: "showUnderGround.jpg",
                        fileName: "showUnderGround"
                    },
                    {
                        name: "体渲染",
                        name_en: "Volume Model Rendering",
                        thumbnail: "S3M_Volume.jpg",
                        fileName: "S3M_Volume"
                    },
                    {
                        name: "体数据临近采样",
                        name_en: "Volume Model Sampling",
                        thumbnail: "nearestFilterMode.jpg",
                        fileName: "nearestFilterMode"
                    },
					{
                        name: "透明渲染",
                        name_en: "Transparent Rendering",
                        thumbnail: "transparentRendering.jpg",
                        fileName: "transparentRendering"
                    },
                    {
                        name: "柱状图",
                        name_en: "Histogram",
                        thumbnail: "S3MTiles_histogram.jpg",
                        fileName: "S3MTiles_histogram"
                    },
                    {
                        name: "选中偏移",
                        name_en: "Offset",
                        thumbnail: "offset.jpg",
                        fileName: "offset"
                    },
					{
                        name: "流动管线",
                        name_en: "Flowing PipeLine",
                        thumbnail: "FlowingPipeLine.jpg",
                        fileName: "FlowingPipeLine"
                    },
                    {
                        name: "点云",
                        name_en: "Points Cloud(S3M)",
                        thumbnail: "S3MTiles_pointCloud.jpg",
                        fileName: "S3MTiles_pointCloud"
                    },
                    {
                        name: "点云分类",
                        name_en: "PointCloud Classific",
                        thumbnail: "PointCloud_Classific.jpg",
                        fileName: "PointCloud_Classific"
                    },
                    {
                        name: "点云特征值",
                        name_en: "PointCloud Characteristic",
                        thumbnail: "PointCloud_Multi_Field_Switch.jpg",
                        fileName: "PointCloud_Multi_Field_Switch"
                    },
                ]
            },
			"vector": {
                name: "矢量瓦片",
                name_en: "Vector",
                content: [
                    {
                        name: "MVT",
                        name_en: "MVT",
                        thumbnail: "MVT.jpg",
                        fileName: "MVT"
                    },
                    {
                        name: "MVT(GeoJson)",
                        name_en: "Add GeoJson",
                        thumbnail: "mvt_geojson.jpg",
                        fileName: "mvt_geojson"
                    }
                ]
            },
            "dynamic-layer": {
                name: "动态图层",
                name_en: "Dynamic Layer",
                content: [
                    {
                        name: "全球实时航线数据",
                        name_en: "Global Real-time Route",
                        thumbnail: "airline.jpg",
                        fileName: "airlines"
                    },
                    // {
                    //     name: "全球船舶动态效果",
                    //     name_en: "Global Ships",
                    //     thumbnail: "dynamicLayer.jpg",
                    //     fileName: "dynamicLayer"
                    // },
                    {
                        name: "风车",
                        name_en: "Wind Farm",
                        thumbnail: "fan.jpg",
                        fileName: "fan"
                    },
                    {
                        name: "交通仿真",
                        name_en: "Traffic Simulation",
                        thumbnail: "trafficSimulation.jpg",
                        fileName: "trafficSimulation"
                    }
                ]
            }
        }
    },
    "online-base-map": {
        name: "在线底图",
        name_en: "Basemap Online",
        content: {
            "map": {
                name: "在线底图",
                name_en: "Basemap Online",
                content: [
                    {
                        name: "本地图片",
                        name_en: "Local Imagery",
                        thumbnail: "SingleTileImageryProvider.jpg",
                        fileName: "image"
                    },
                    {
                        name: "天地图",
                        name_en: "Tianditu",
                        thumbnail: "tianditu.jpg",
                        fileName: "tianditu"
                    },
                    // {
                    //     name: "BingMap",
                    //     name_en: "BingMap",
                    //     thumbnail: "bingMap.jpg",
                    //     fileName: "bingMap"
                    // },
                    {
                        name: "高德地图",
                        name_en: "gaodeMap",
                        thumbnail: "bingMap.jpg",
                        fileName: "gaodeMap"
                    },
                    {
                        name: "STK地形",
                        name_en: "STK Terrain",
                        thumbnail: "STKterrain.jpg",
                        fileName: "STKterrain"
                    },
                    // {
                    //     name: "ArcGISServer",
                    //     name_en: "ArcGIS Server",
                    //     thumbnail: "ArcGISServer.jpg",
                    //     fileName: "ArcGISServer"
                    // }
                ]
            }/*,
            "data": {
                name: "Data",
                name_en: "Data",
                content: [
                    {
                        name: "Night Map",
                        name_en: "Night Map",
                        thumbnail: "flightFly.jpg",
                        fileName: "flightFly"
                    },
                    {
                        name: "3D Tiles",
                        name_en: "3D Tiles",
                        thumbnail: "3DTilesPhotogrammetry.jpg",
                        fileName: "3D Tiles Photogrammetry"
                    },
                    {
                        name: "Draw Point/Line/Region",
                        name_en: "Draw Point/Line/Region",
                        thumbnail: "draw.jpg",
                        fileName: "draw"
                    }
                ]
            },
            "spatialAnalyst": {
                name: "Spatial Analysis",
                name_en: "Spatial Analysis",
                content: [     {
                    name: "PM2.5",
                    name_en: "pm",
                    thumbnail: "pm.jpg",
                    fileName: "pm"
                }, ]
            },
            "processingService": {
                name: "Distributed Analysis",
                name_en: "Distributed Analysis",
                content: [  {
                    name: "STK Terrain",
                    name_en: "STK Terrain",
                    thumbnail: "STKterrain.jpg",
                    fileName: "STKterrain"
                }, {
                    name: "Scene Mode Switching",
                    name_en: "Scene Mode Switching",
                    thumbnail: "switchSceneMode.jpg",
                    fileName: "switchSceneMode"
                }]
            }*/
        }
    },
    "Scene": {
        name: "场景",
        name_en: "Scene",
        content: {
            "planScene": {
                name: "平面场景",
                name_en: "Flat Scene",
                content: [
                    {
                        name: "平面场景",
                        name_en: "Flat Scene",
                        thumbnail: "planScene.jpg",
                        fileName: "planScene"
                    },
                    {
                        name: "场站",
                        name_en: "Power Plant",
                        thumbnail: "dianchang.jpg",
                        fileName: "PowerPlant"
                    }
                ]
            },
            "CameraController": {
                name: "相机控制",
                name_en: "Camera Controller",
                content: [
				    {
                        name: "键盘控制相机",
                        name_en: "Keyboard Control Camera",
                        thumbnail: "KeyboardControlCamera.jpg",
                        fileName: "KeyboardControlCamera"
                    },
				    {
                        name: "鼠标习惯",
                        name_en: "Mouse Habits",
                        thumbnail: "MouseHabits.jpg",
                        fileName: "MouseHabits"
                    },
                ]
            },
            "PostProcessing": {
                name: "后期处理",
                name_en: "Post Effects",
                content: [
                    {
                        name: "颜色校正",
                        name_en: "Color Correction",
                        thumbnail: "colorCorrection.jpg",
                        fileName: "colorCorrection"
                    },
                    {
                        name: "后期特效",
                        name_en: "Post Effects",
                        thumbnail: "aftertreatment.jpg",
                        fileName: "PostProcess"
                    },
                    {
                        name: "线框模式",
                        name_en: "Wireframe",
                        thumbnail: "wireframe.jpg",
                        fileName: "wireframe"
                    },
                    {
                        name: "设置光源",
                        name_en: "Light Source",
                        thumbnail: "lightSource.jpg",
                        fileName: "lightSource"
                    },
                    {
                        name: "BIM模型光照优化",
                        name_en: "BIM Lighting Optimization",
                        thumbnail: "movingLightSourceBIM.png",
                        fileName: "movingLightSourceBIM"
                    }
					,
                    {
                        name: "按特征值显隐",
                        name_en: "Visible By Feature Value",
                        thumbnail: "visibleByFeatureValue.jpg",
                        fileName: "visibleByFeatureValue"
                    }
                ]
            },
            "split": {
                name: "分屏",
                name_en: "Screen Split",
                content: [
                    {
                        name: "分屏显示",
                        name_en: "Multi-Screen",
                        thumbnail: "multiViewport.jpg",
                        fileName: "multiViewport"
                    },
                    {
                        name: "kml图层分屏显示",
                        name_en: "Multi-Screen KML",
                        thumbnail: "multiViewport_kml.jpg",
                        fileName: "multiViewport_kml"
                    },
                    // {
                    //     name: "视口设置",
                    //     name_en: "Viewport Setting",
                    //     thumbnail: "viewportSetting.jpg",
                    //     fileName: "viewportSetting"
                    // }
                ]
            },
            "globe-mode": {
                name: "地球模式",
                name_en: "Earth Mode",
                content: [
                    {
                        name: "模式切换",
                        name_en: "Mode Switching",
                        thumbnail: "switchGlobeMode.jpg",
                        fileName: "switchGlobeMode"
                    },
                    {
                        name: "二三维切换",
                        name_en: "2D 3D Switching",
                        thumbnail: "sceneModeSwitching.jpg",
                        fileName: "sceneModeSwitching"
                    }
                ]
            },
            "position-info": {
                name: "位置信息",
                name_en: "Location Information",
                content: [
                    {
                        name: "拾取位置",
                        name_en: "Picking Position",
                        thumbnail: "pickPosition.jpg",
                        fileName: "pickPosition"
                    }
                ]
            },
            "ScreenShot": {
                name: "场景出图",
                name_en: "Scene Output",
                content: [
                    {
                        name: "场景出图",
                        name_en: "Scene Output",
                        thumbnail: "outputScene.jpg",
                        fileName: "outputScene"
                    }
                ]
            },
            "LayerStructure": {
                name: "树结构",
                name_en: "Layer Structure",
                content: [
                    {
                        name: "图层目录树",
                        name_en: "Layer Tree",
                        thumbnail: "LayerTree.jpg",
                        fileName: "LayerTree"
                    },
                    {
                        name: "BIM构件树",
                        name_en: "BIM Tree",
                        thumbnail: "BIMTree.jpg",
                        fileName: "BIMTREE"
                    }
                ]
            },
            "View": {
                name: "视图",
                name_en: "View",
                content: [
                    {
                        name: "模型视图",
                        name_en: "Model View",
                        thumbnail: "Model_View.jpg",
                        fileName: "Model_View"
                    }
                ]
            },
            "Scene": {
                name: "场景",
                name_en: "Scene",
                content: [
                    {
                        name: "指定区域显示数据",
                        name_en: "Appoint Region",
                        thumbnail: "Appoint_Region.jpg",
                        fileName: "Appoint_Region"
                    }
                ]
            }
        }
    },
    "search": {
        name: "查询",
        name_en: "Query",
        content: {
            "Online Query": {
                name: "在线检索",
                name_en: "Online Query",
                content: [
                    {
                        name: "POI检索",
                        name_en: "POI Query",
                        thumbnail: "location.jpg",
                        fileName: "location"
                    }
                ]
            },
            "attribute-search": {
                name: "属性查询",
                name_en: "Attribute Query",
                content: [
                    // {
                    //     name: "倾斜摄影属性查询",
                    //     name_en: "Oblique Photogrammtric Attribute Query",
                    //     thumbnail: "S3MTiles.jpg",
                    //     fileName: "S3MTiles"
                    // },
                    {
                        name: "SQL查询",
                        name_en: "SQL Query",
                        thumbnail: "getFeatureBySQL.jpg",
                        fileName: "getFeatureBySQL"
                    },
                    
                    {
                        name: "分层分户查询",
                        name_en: "Hierarchical Household Inquiry",
                        thumbnail: "individualInformation.jpg",
                        fileName: "individualInformation"
                    },
                    {
                        name: "动态单体化",
                        name_en: "Dynamic Singulation",
                        thumbnail: "dynamicDTH.jpg",
                        fileName: "dynamicDTH"
                    },
                    {
                        name: "自定义气泡",
                        name_en: "Custom Bubble",
                        thumbnail: "custom-bubble.jpg",
                        fileName: "custom-bubble"
                    }
                ]
            },
			"spatial-query": {
                name: "空间查询",
                name_en: "Spatial Query",
                content: [
					{
                        name: "空间查询",
                        name_en: "Spatial Query",
                        thumbnail: "getFeatureByGeometry.jpg",
                        fileName: "getFeatureByGeometry"
                    },
					{
                        name: "GPU空间查询",
                        name_en: "GPU-based Query",
                        thumbnail: "spatialQuery3D.jpg",
                        fileName: "spatialQuery3D"
                    },
					{
                        name: "GPU空间查询-天际线体",
                        name_en: "GPU-based-Skyline Analysis",
                        thumbnail: "spatialQuery3D_skyline.jpg",
                        fileName: "spatialQuery3D_skyline"
                    },
					{
                        name: "GPU空间查询-摄像头",
                        name_en: "GPU-based-Camera",
                        thumbnail: "spatialQuery3D_camera.jpg",
                        fileName: "spatialQuery3D_camera"
                    },
					{
                        name: "GPU空间查询-飞机",
                        name_en: "GPU-based-Jet",
                        thumbnail: "spatialQuery3D_plan.jpg",
                        fileName: "spatialQuery3D_plan"
                    },
                    {
                        name: "框选",
                        name_en: "Cross-window Selection",
                        thumbnail: "drawRect.jpg",
                        fileName: "drawRect"
                    },					
                    {
                        name: "视域体空间查询",
                        name_en: "Frustum Space Query",
                        thumbnail: "Frustum_Space_Query.jpg",
                        fileName: "Frustum_Space_Query"
                    },					
                    {
                        name: "视域体监控范围",
                        name_en: "Frustum Monitor Area",
                        thumbnail: "Frustum_Monitor_Area.jpg",
                        fileName: "Frustum_Monitor_Area"
                    }					
				]
			},
        }
    },
    "measurement": {
        name: "量算",
        name_en: "Measurement",
        content: {
            "measurement": {
                name: "量算",
                name_en: "Measure",
                content: [
                    {
                        name: "量算",
                        name_en: "Measurement",
                        thumbnail: "measureHandler.jpg",
                        fileName: "measureHandler"
                    },
                    {
                        name: "连续量算",
                        name_en: "MeasureContinue",
                        thumbnail: "measureContinue.jpg",
                        fileName: "measureContinue"
                    },
                    {
                        name: "绘制-二维转三维",
                        name_en: "2D to 3D Drawing",
                        thumbnail: "draw2Dto3D.jpg",
                        fileName: "draw2Dto3D"
                    },
                    {
                        name: "填挖方分析",
                        name_en: "Cutting And Filling",
                        thumbnail: "terraincalCulation.jpg",
                        fileName: "terraincalCulation"
                    }
                ]
            }
        }
    },
    "analysis": {
        name: "分析",
        name_en: "Analysis",
        content: {
            "3D anylysis": {
                name: "三维空间分析",
                name_en: "3D Analysis",
                content: [
                    {
                        name: "通视分析",
                        name_en: "Visual Analysis",
                        thumbnail: "sightline.jpg",
                        fileName: "sightline"
                    },
                    {
                        name: "可视域分析",
                        name_en: "Viewshed 3D",
                        thumbnail: "viewshed3D.jpg",
                        fileName: "viewshed3D"
                    },
                    {
                        name: "阴影分析",
                        name_en: "Shadow Query",
                        thumbnail: "shadowQuery.jpg",
                        fileName: "shadowQuery"
                    },
                    {
                        name: "天际线分析",
                        name_en: "Skyline",
                        thumbnail: "skyline.jpg",
                        fileName: "skyline"
                    },
                    {
                        name: "剖面分析",
                        name_en: "profile",
                        thumbnail: "profile.jpg",
                        fileName: "profile"
                    },
                    {
                        name: "视频投放",
                        name_en: "Video Delivery",
                        thumbnail: "projectionImage.jpg",
                        fileName: "projectionImage"
                    },
                    {
                        name: "RTSP视频投放",
                        name_en: "RTSP Video Delivery",
                        thumbnail: "RTSPprojectionImage.jpg",
                        fileName: "RTSP"
                    },
                    {
                        name: "平面裁剪",
                        name_en: "Region Clipping",
                        thumbnail: "clip.jpg",
                        fileName: "clip"
                    },
                    // {
                    //     name: "Box裁剪",
                    //     name_en: "Box Clipping",
                    //     thumbnail: "clipbox.jpg",
                    //     fileName: "clipbox"
                    // },
                    {
                        name: "Box裁剪(交互绘制)",
                        name_en: "Clipping by Editor",
                        thumbnail: "clipboxByEditor.jpg",
                        fileName: "clipboxByEditor"
                    },
                    {
                        name: "Cross裁剪",
                        name_en: "Cross Clipping",
                        thumbnail: "clipCross.jpg",
                        fileName: "clipCross"
                    },
                    {
                        name: "多边形裁剪",
                        name_en: "Clip Polygon",
                        thumbnail: "clipPolygon.jpg",
                        fileName: "clipPolygon"
                    },
					 {
                        name: "ID过滤裁剪",
                        name_en: "Clip By Id",
                        thumbnail: "clipById.jpg",
                        fileName: "clipById"
                    },
                    {
                        name: "组合剖切",
                        name_en: "Combination Cutting",
                        thumbnail: "Combination_Cutting.jpg",
                        fileName: "Combination_Cutting"
                    },
                    //{
                      //  name:"Spatial convex polygon clipping",
                        //name_en:"convexPolygonClip",
                       // thumbnail:"convexPolygonClip.jgp",
                      //  fileName:"convexPolygonClip"
                  //  },
					//  {
                    //     name: "裁剪封边",
                    //     name_en: "Clip With Seal",
                    //     thumbnail: "clipWithSeal.jpg",
                    //     fileName: "clipWithSeal"
                    // },
                    {
                        name: "坡度坡向分析",
                        name_en: "Terrain Slope Analysis",
                        thumbnail: "terrainSlopeAnalysis.jpg",
                        fileName: "terrainSlopeAnalysis"
                    },
                    {
                        name: "地形开挖",
                        name_en: "Terrain Excavation",
                        thumbnail: "digTerrain.jpg",
                        fileName: "digTerrain"
                    },
                     {
                        name: "地形开挖抽出显示",
                        name_en: "Terrain Excavation Pull-out",
                        thumbnail: "TerrainExcavationPull-out.jpg",
                        fileName: "TerrainExcavation_Pull-out"
                    },
                    
                    {
                        name: "地形修改",
                        name_en: "Terrain Modification",
                        thumbnail: "modifyTerrain.jpg",
                        fileName: "modifyTerrain"
                    },
                    {
                        name: "退线分析",
                        name_en: "Setback Analysis",
                        thumbnail: "backLineAnalysis.jpg",
                        fileName: "backLineAnalysis"
                    },
                    {
                        name: "限高分析",
                        name_en: "Building Height",
                        thumbnail: "limitHeightAnalysis.jpg",
                        fileName: "limitHeightAnalysis"
                    },
                    {
                        name: "贴线分析",
                        name_en: "Clamp Line",
                        thumbnail: "onLineAnalysis.jpg",
                        fileName: "onLineAnalysis"
                    },
                    {
                        name: "服务区分析",
                        name_en: "Service Area Analysis",
                        thumbnail: "serviceAreaAnalysis.jpg",
                        fileName: "serviceAreaAnalysis"
                    },
					 {
                        name: "开敞度分析",
                        name_en: "ViewDome",
                        thumbnail: "opennessAnalysis.jpg",
                        fileName: "opennessAnalysis"
                    },
                    {
                        name: "立面图",
                        name_en: "Facade Image",
                        thumbnail: "facadeImage.jpg",
                        fileName: "facadeImage"
                    },
                    {
                        name: "日照分析",
                        name_en: "sunLightAnalysis",
                        thumbnail: "sunLightAnalysis.jpg",
                        fileName: "sunLightAnalysis"
                    },
                    // {
                    //     name: "净距分析",
                    //     name_en: "Pipeline Distance Analysis",
                    //     thumbnail: "Pipeline_Distance_Analysis.jpg",
                    //     fileName: "Pipeline_Distance_Analysis"
                    // },
                ]
            }/*,
            "2D analysis":{
                name: "2D Spatial Analysis",
                name_en: "2D anylysis",
                content:[
                    {
                        name: "Section Analysis",
                        name_en: "profileAnalyze",
                        thumbnail: "profileAnalyze.jpg",
                        fileName: "profileAnalyze"
                    },
                    {
                        name: "Buffer Analysis",
                        name_en: "bufferAnalyze",
                        thumbnail: "bufferAnalyze.jpg",
                        fileName: "bufferAnalyze"

                    },
                    {
                        name: "Overlay Analysis",
                        name_en: "overlayAnalyze",
                        thumbnail: "overlayAnalyze.jpg",
                        fileName: "overlayAnalyze"
                    },
                    {
                        name: "Raster Operation",
                        name_en: "mathExpression",
                        thumbnail: "mathExpression.jpg",
                        fileName: "mathExpression"
                    },
                    {
                        name: "Topographic Curvature",
                        name_en: "terrainCurvature",
                        thumbnail: "terrainCurvature.jpg",
                        fileName: "terrainCurvature"
                    }
                ]
            }*/
        }
    },
    "fly": {
        name: "飞行",
        name_en: "Fly",
        content: {
            "fly": {
                name: "飞行",
                name_en: "Fly",
                content: [
                    {
                        name: "沿线飞行",
                        name_en: "Fly Route",
                        thumbnail: "flyRoute.jpg",
                        fileName: "flyRoute"
                    }
                ]
            }
        }
    },
    "KMLAndModel": {
        name: "KML&模型",
        name_en: "KML And Model",
        content: {
            "Model Edit": {
                name: "模型编辑",
                name_en: "Model Editing",
                content: [
                    {
                        name: "模型编辑（旋转、平移、缩放）",
                        name_en: "KML_Edit",
                        thumbnail: "KML_edit.jpg",
                        fileName: "KML_edit"
                    },
					{
                        name: "雷达模型",
                        name_en: "Radar Sensor",
                        thumbnail: "RadarSensor.jpg",
                        fileName: "RadarSensor"
                    },
                    {
                        name: "快速建模",
                        name_en: "Rapidmodeling",
                        thumbnail: "Rapidmodeling.jpg",
                        fileName: "Rapidmodeling"
                    },
                    {
                        name: "实例化图层编辑",
                        name_en: "instanceLayer",
                        thumbnail: "instanceLayerModelEdit.jpg",
                        fileName: "towerModel"
                    }
                ]
            },
			"geologicBody-model":{
				name:"地质体模型",
				name_en:"Geological Model",
				content:[
					{
                        name: "地质体拉伸与剖切",
                        name_en: "Geological Model Sectioning",
                        thumbnail: "geologicBodyStretch.jpg",
                        fileName: "geologicBodyOperation"
                    },
					{
                        name: "地质体裁剪与开挖",
                        name_en: "Geological Model Clipping",
                        thumbnail: "geologicBodyClip.jpg",
                        fileName: "geologicBodyClip"
                    },
					{
                        name: "地质体爆炸",
                        name_en: "geologic body explode",
                        thumbnail: "geologicBodyExplode.jpg",
                        fileName: "geologicBodyExplode"
                    },
                    {
                        name: "地质体box裁剪",
                        name_en: "Geological Box Sectioning",
                        thumbnail: "geologicBodyBoxClip.jpg",
                        fileName: "geologicBodyBoxClip"
                    }
				]
				
			},
            "animation-model": {
                name: "动画模型",
                name_en: "Animated Model",
                content: [
                    {
                        name: "塔吊",
                        name_en: "KML_Crane",
                        thumbnail: "KML_crane.jpg",
                        fileName: "KML_crane"
                    },
                    {
                        name: "GLTF",
                        name_en: "GLTF",
                        thumbnail: "gltf.JPG",
                        fileName: "gltf"
                    },{
                        name:"图层动画",
                        name_en:"Animation Layer",
                        thumbnail:"layer_animation.jpg",
                        fileName:"S3M_animation"
                    },
                    {
                        name:"抽屉效果",
                        name_en:"Drawer Effect",
                        thumbnail:"drawerEffect.jpg",
                        fileName:"drawerEffect"
                    },
                    {
                        name:"模型爆炸",
                        name_en:"Model Explode",
                        thumbnail:"ModelExplode.jpg",
                        fileName:"ModelExplode"
                    },
                     {
                        name:"模型动态拉伸",
                        name_en:"Model Dynamic Extrude",
                        thumbnail:"ModelDynamic_Extrude.jpg",
                        fileName:"ModelDynamic_Extrude"
                    }
                ]
            },
            "node-animation": {
                name: "节点动画",
                name_en: "Node Animation",
                content: [
                    {
                        name: "小车移动",
                        name_en: "Trolley Movement",
                        thumbnail: "KML_car.jpg",
                        fileName: "KML_car"
                    }
                ]
            },
            "line-snap-to-ground": {
                name: "线贴地/贴对象",
                name_en: "Clamp to Object/Ground",
                content: [
                    {
                        name: "北京地铁路线及站点标注",
                        name_en: "Beijing Subway Route and Site Marking",
                        thumbnail: "KML_beijing.jpg",
                        fileName: "KML_beijing"
                    },
                    {
                        name: "四姑娘山登山路线",
                        name_en: "Hiking Route",
                        thumbnail: "KML_route.jpg",
                        fileName: "KML_route"
                    },
                ]
            },
            "polygon-snap-to-ground": {
                name: "面贴地/贴对象",
                name_en: "Clamp",
                content: [
                    {
                        name: "矢量面",
                        name_en: "Polygon",
                        thumbnail: "Polygon.jpg",
                        fileName: "Polygon"
                    },
                    {
                        name: "矢量面拉伸",
                        name_en: "Region Extrude",
                        thumbnail: "extrude.jpg",
                        fileName: "extrude"
                    }
                ]
            }
        }
    },
    "online-draw": {
        name: "在线绘制",
        name_en: "Drawing Online",
        content: {
            "point-polyline-polygon-drawing": {
                name: "绘制点线面",
                name_en: "Point/Polyline/Region Drawing",
                content: [
                    {
                        name: "绘制点线面",
                        name_en: "Draw Points/Line/Region",
                        thumbnail: "drawHandler.jpg",
                        fileName: "drawHandler"
                    },
                    {
                        name: "特效线",
                        name_en: "GeoLine",
                        thumbnail: "entity_geoline.jpg",
                        fileName: "entity_geoline"
                    },
                    {
                        name: "编辑线面",
                        name_en: "Draw And Edit",
                        thumbnail: "DrawAndEdit.jpg",
                        fileName: "DrawAndEdit"
                    },
                ]
            },
            "geometry": {
                name: "几何体对象",
                name_en: "Geometry Object",
                content: [
                    {
                        name: "几何体对象(绘制)",
                        name_en: "Geometry Object",
                        thumbnail: "Geometry.jpg",
                        fileName: "Geometry"
                    },
                    {
                        name: "几何体对象",
                        name_en: "Geometry Object",
                        thumbnail: "GeometryNew.jpg",
                        fileName: "GeometryNew"
                    },
                    {
                        name: "点 图标",
                        name_en: "Point Element",
                        thumbnail: "entity_point.jpg",
                        fileName: "entity_point"
                    },
                    {
                        name: "面样式",
                        name_en: "Polygon style",
                        thumbnail: "entity_polygon.jpg",
                        fileName: "entity_polygon"
                    },
                    {
                        name: "线样式",
                        name_en: "Polyline Style",
                        thumbnail: "entity_polyline.jpg",
                        fileName: "entity_polyline"
                    },
                ]
            },
            "online-symbol": {
                name: "在线符号",
                name_en: "Online Symbol",
                content: [
                    {
                        name: "添加小品",
                        name_en: "Add Features",
                        thumbnail: "addSymbols.jpg",
                        fileName: "addSymbols"
                    },
                    {
                        name: "批量添加小品",
                        name_en: "Batch Add Features",
                        thumbnail: "addSymbolsBatch.jpg",
                        fileName: "addSymbolsBatch"
                    }
                ]
            }
        }
    },
    "visualization": {
        name: "可视化",
        name_en: "Visualization",
        content: {
            "Air Quality": {
                name: "空气质量",
                name_en: "Air Quality",
                content: [
                    {
                        name: "全球实时空气质量状况",
                        name_en: "Air Quality in Real-time",
                        thumbnail: "aqi.jpg",
                        fileName: "aqi"
                    }
                ]
            },
            "Echarts": {
                name: "Echarts",
                name_en: "Echarts Map",
                content: [
                    {
                        name: "Echarts_迁徙",
                        name_en: "Echarts_migration",
                        thumbnail: "Echarts_migration.jpg",
                        fileName: "Echarts_migration"
                    },
                    {
                        name: "Echarts_空气质量",
                        name_en: "Echarts_aqi",
                        thumbnail: "Echarts_aqi.jpg",
                        fileName: "Echarts_aqi"
                    }
                ]
            },
            "MapV": {
                name: "MapV",
                name_en: "MapV Map",
                content: [
                    {
                        name: "MapV_蜂巢图",
                        name_en: "MapV_honeycomb",
                        thumbnail: "mapv_honeycomb.jpg",
                        fileName: "mapv_honeycomb"
                    },
                    {
                        name: "MapV_迁徙图",
                        name_en: "MapV_migrate",
                        thumbnail: "mapv_migrate.jpg",
                        fileName: "mapv_migrate"
                    },
                    {
                        name: "MapV_方格图",
                        name_en: "MapV_square",
                        thumbnail: "mapv_square.jpg",
                        fileName: "mapv_square"
                    },
                    {
                        name: "MapV_流向图",
                        name_en: "MapV_flow",
                        thumbnail: "mapv_flow.jpg",
                        fileName: "mapv_flow"
                    },
                    {
                        name: "MapV_强边界图",
                        name_en: "MapV_boundary",
                        thumbnail: "mapv_boundary.jpg",
                        fileName: "mapv_boundary"
                    },
                    {
                        name: "MapV_汇聚图",
                        name_en: "MapV_converge",
                        thumbnail: "mapv_converge.jpg",
                        fileName: "mapv_converge"
                    }
                ]
            },
            /*"air-direction-map": {
                name: "风向图",
                name_en: "air direction map",
                content: [
                    {
                        name: "Wind map",
                        name_en: "Wind map",
                        thumbnail: "windmap.jpg",
                        fileName: "windmap"
                    }
                ]
            },*/
            "split-comparation": {
                name: "卷帘对比",
                name_en: "Splitting",
                content: [
                    {
                        name: "影像卷帘",
                        name_en: "Image roll",
                        thumbnail: "Nightlight.jpg",
                        fileName: "Nightlight"
                    },
                    {
                        name: "模型卷帘",
                        name_en: "Model Splitting",
                        thumbnail: "rollerShutter.jpg",
                        fileName: "rollerShutter"
                    }
                ]
            },
            // "time-space-effect": {
            //     name: "时空效果",
            //     name_en: "Time and space effect",
            //     content: [
            //         {
            //             name: "全球陆地温度变化时空效果",
            //             name_en: "Land Temperature",
            //             thumbnail: "LandTemChange.jpg",
            //             fileName: "LandTemChange"
            //         }
            //     ]
            // },
            "heat-map": {
                name: "热力图",
                name_en: "Thermal Map",
                content: [
                    {
                        name: "热力图叠加S3M",
                        name_en: "Thermal Map with S3M",
                        thumbnail: "Project_heatmap.jpg",
                        fileName: "Project_heatmap"
                    }
                ]
            },
            "cluster-map": {
                name: "聚合",
                name_en: "cluster Map",
                content: [
                    {
                        name: "聚合",
                        name_en: "cluster",
                        thumbnail: "entity_cluster.jpg",
                        fileName: "entity_cluster"
                    }
                ]
            },
            "Thematic-map": {
                name: "专题图",
                name_en: "thematic map",
                content: [
                    {
                        name: "专题图",
                        name_en: "Thematic Map",
                        thumbnail: "ThematicMap.jpg",
                        fileName: "ThematicMap"
                    },
					{
                        name: "标签专题图",
                        name_en: "Label Thematic Map",
                        thumbnail: "LabelThematicMap.jpg",
                        fileName: "LabelThematicMap"
                    },
                    {
                        name:"字段专题图",
                        name_en:"Thematic Map By Field",
                        thumbnail:"ThematicMapByField.jpg",
                        fileName:"ThematicMapByField"
                    },
                    {
                        name:"标签避让",
                        name_en:"Label Overlap",
                        thumbnail:"LabelOverlap.jpg",
                        fileName:"LabelOverlap"
                    }
                ]
            },
            "particle": {
                name: "粒子",
                name_en: "Particle",
                content: [
                    {
                        name: "风场",
                        name_en: "Wind Particle",
                        thumbnail: "windParticle.jpg",
                        fileName: "windParticle"
                    },
                    {
                        name: "三维流场",
                        name_en: "ParticleVelocityField",
                        thumbnail: "ParticleVelocityField.jpg",
                        fileName: "ParticleVelocityField"
                    },
                    {
                        name: "鸟巢火炬",
                        name_en: "Fire",
                        thumbnail: "ParticleSystem_Fire.jpg",
                        fileName: "Particle System_Fire"
                    },
                    {
                        name: "喷泉",
                        name_en: "Fountain",
                        thumbnail: "ParticleSystem_fountain.jpg",
                        fileName: "Particle System_fountain"
                    },
                    {
                        name: "雨水",
                        name_en: "Rain",
                        thumbnail: "ParticleSystem_rain.jpg",
                        fileName: "Particle System_rain"
                    }
                ]
            },
            "stream-map": {
                name: "流地图",
                name_en: "Stream Map",
                content: [
                    {
                        name: "出租车流",
                        name_en: "Taxi Flow",
                        thumbnail: "taxiFlow.jpg",
                        fileName: "taxiFlow"
                    },
                    // {
                    //     name: "飞机航线动态可视化",
                    //     name_en: "Dynamic Flight",
                    //     thumbnail: "flightnew.jpg",
                    //     fileName: "flightnew"
                    // },
                    {
                        name: "人口迁移流地图",
                        name_en: "Migration Map",
                        thumbnail: "migration.jpg",
                        fileName: "migration"
                    },
                    {
                        name: "光晕",
                        name_en: "Halo",
                        thumbnail: "polylingGlow.jpg",
                        fileName: "polylineGlow"
                    },
                    {
                        name: "扫描线",
                        name_en: "Scanning Line",
                        thumbnail: "scanEffect.jpg",
                        fileName: "scanEffect"
                    },
                ]
            }, 
			"special-effect": {
                name: "特效",
                name_en: "Special Effect",
                content: [
                    {
                        name: "泛光扫描线",
                        name_en: "Scan Line",
                        thumbnail: "scanLine.jpg",
                        fileName: "scanLine"
                    },
                    {
                        name: "泛光尾迹线",
                        name_en: "Trail Line",
                        thumbnail: "trailLine.jpg",
                        fileName: "airlinesTrailLines"
                    },
                    {
                        name: "动态自发光纹理",
                        name_en: "Emission Texture",
                        thumbnail: "emissionTexture.jpg",
                        fileName: "emissionTexture"
                    },
                    // {
                    //     name: "动态图层汽车灯光",
                    //     name_en: "Car Lamp",
                    //     thumbnail: "carLamp.jpg",
                    //     fileName: "carLamp"
                    // },
                    {
                        name: "泛光光源",
                        name_en: "Bloom Light",
                        thumbnail: "tx_lightSource.jpg",
                        fileName: "tx_lightSource"
                    },
                    {
                        name: "云层与天空盒",
                        name_en: "CloudAndSky",
                        thumbnail: "cloudAndSky.jpg",
                        fileName: "cloudAndSky"
                    },
                    //  {
                    //      name:"雨雪",
                    //      name_en:"Rain And Snow",
                    //      thumbnail:"rainAndSnow.jpg",
                    //      fileName:"rainAndSnow"
                    //  }
                    {
                        name: "城市白模美化",
                        name_en: "White-box Beautification for City-view",
                        thumbnail: "White-box_Beautification_for_Cityview.jpg",
                        fileName: "White-box_Beautification_for_Cityview"
                    },
                    {
                        name: "变电站",
                        name_en: "Transformer_Substation",
                        thumbnail: "Transformer_Substation.jpg",
                        fileName: "Transformer_Substation"
                    },
                    {
                        name:"雨天",
                        name_en:"Rainning Day",
                        thumbnail:"RainningDay.jpg",
                        fileName:"RainningDay"
                    },
                    {
                        name:"雪天",
                        name_en:"Snowing Day",
                        thumbnail:"SnowingDay.jpg",
                        fileName:"SnowingDay"
                    },
                    {
                        name: "闪电",
                        name_en: "Lightning Day",
                        thumbnail: "effect_Lightning.jpg",
                        fileName: "effect_Lightning"
                    },
                    {
                        name: "体积云",
                        name_en: "Volumetric Cloud",
                        thumbnail: "Volumetric_Cloud.jpg",
                        fileName: "Volumetric_Cloud"
                    },
                    {
                        name: "高度雾",
                        name_en: "High Altitude Fog",
                        thumbnail: "High_Altitude_Fog.jpg",
                        fileName: "High_Altitude_Fog"
                    },
                    {
                        name: "光束效果",
                        name_en: "light Shaft Effect",
                        thumbnail: "LightShaft.jpg",
                        fileName: "LightShaft"
                    },
                    {
                        name: "雷达扫描",
                        name_en: "Scan Radio",
                        thumbnail: "effect_scanRadio.jpg",
                        fileName: "effect_scanRadio"
                    },
                    {
                        name: "电子围栏",
                        name_en: "Electronic Wall",
                        thumbnail: "effect_ElectronicWall.jpg",
                        fileName: "effect_ElectronicWall"
                    },
                    {
                        name: "区域渐变",
                        name_en: "Polygon Gradient",
                        thumbnail: "polygon_gradient.jpg",
                        fileName: "polygon_gradient"
                    },
                    {
                        name: "广西壮族自治区影像地形图",
                        name_en: "GX Image Terrain",
                        thumbnail: "support-province-gx.jpg",
                        fileName: "support-province-gx"
                    },
                    {
                        name: "湖北省PBR材质球面场景",
                        name_en: "HB PBR Scene",
                        thumbnail: "support-province-pbr.jpg",
                        fileName: "support-province-pbr"
                    },
                    {
                        name: "四川省地形渲染图",
                        name_en: "SC Terrain Map",
                        thumbnail: "support-province-terrain.jpg",
                        fileName: "support-province-terrain"
                    },
                    {
                        name: "四川省晕渲图",
                        name_en: "SC Mottle Map",
                        thumbnail: "support-province-sc.jpg",
                        fileName: "support-province-sc"
                    },
                    {
                        name: "云南省地形渲染图",
                        name_en: "YN Terrain Map",
                        thumbnail: "support-province-yn.jpg",
                        fileName: "support-province-yn"
                    },
                    {
                        name: "重庆市影像地形图",
                        name_en: "CQ Image Map",
                        thumbnail: "support-province-cq.jpg",
                        fileName: "support-province-cq"
                    },
                    {
                        name: "全国用电量TOP10",
                        name_en: "China Power Top10",
                        thumbnail: "support-special-power.jpg",
                        fileName: "support-special-power"
                    },
                    {
                        name: "全国粮食产量TOP10",
                        name_en: "China Food Top10",
                        thumbnail: "support-special-food.jpg",
                        fileName: "support-special-food"
                    }
                ]
            },
            "water-flow-simulation":{
                name: "水流模拟",
                name_en: "Water Flow Simulation",
                content: [
                    {
                        name: "淹没分析（模型）",
                        name_en: "Flooding Analysis(Model)",              
                        thumbnail: "flood.jpg",
                        fileName: "flood"
                    },
                    {
                        name: "淹没分析（地形）",
                         name_en: "Flooding Analysis (Terrain)",
                        thumbnail: "floodex.jpg",
                        fileName: "floodex"
                    },
                    // {
                    //     name: "连通性淹没分析",
                    //      name_en: "Connected Foolding Analysis",
                    //     thumbnail: "ConnectedFooldingAnalysis.jpg",
                    //     fileName: "ConnectedFooldingAnalysis"
                    // }
                    {
                        name: "水场",
                        name_en: "Water Flow Visualization",
                        thumbnail: "particleWaterFlow.jpg",
                        fileName: "particleWaterFlow"
                    },
                    {
                        name: "多时序多要素水场",
                        name_en: "Multi-factor Water Flow",
                        thumbnail: "temporalHydroAttrs.jpg",
                        fileName: "temporalHydroAttrs"
                    },
                    {
                        name: "水面效果",
                        name_en: "Water Effect",
                        thumbnail: "WaterEffect.jpg",
                        fileName: "WaterEffect"
                    },
                ]
            }
        }
    },
    "stereoscopic-show": {
        name: "立体显示",
        name_en: "Stereo Display",
        content: {
            "polarization": {
                name: "偏振立体",
                name_en: "Polarized Stereo",
                content: [
                    {
                        name: "偏振立体",
                        name_en: "Polarized Stereo",
                        thumbnail: "polarizedStereoscopic.jpg",
                        fileName: "polarizedStereoscopic"
                    }
                ]
            }
        }
    },
    // "WebGPU": {
    //     name: "WebGPU",
    //     name_en: "WebGPU",
    //     content: {
    //         "terrainAndImagery": {
    //             name: "地形影像",
    //             name_en: "terrainAndImagery",
    //             content: [
    //                 {
    //                     name: "地形影像",
    //                     name_en: "Terrain And Imagery",
    //                     thumbnail: "terrainAndImagery.jpg",
    //                     fileName: "WebGPU_terrainAndImagery"
    //                 }
    //             ]
    //         },
    //         "S3M": {
    //             name: "三维切片缓存(S3M)",
    //             name_en: "Spatial 3D Model",
    //             content: [
    //                 {
    //                     name: "倾斜模型",
    //                     name_en: "Oblique Photogrammetry",
    //                     thumbnail: "S3MTiles_suofeiya.jpg",
    //                     fileName: "WebGPU_S3MTiles_suofeiya"
    //                 },
    //                 // {
    //                 //     name: "鸟巢（水面特效）",
    //                 //     name_en: "Bird's Nest (water surface effect)",
    //                 //     thumbnail: "S3MTiles_niaochao_water.jpg",
    //                 //     fileName: "WebGPU_S3MTiles_niaochao_water"
    //                 // },
    //                 {
    //                     name: "CBD",
    //                     name_en: "CBD",
    //                     thumbnail: "S3MTiles_jingmo.jpg",
    //                     fileName: "WebGPU_S3MTiles_jingmo"
    //                 },
    //                 {
    //                     name: "BIM",
    //                     name_en: "BIM",
    //                     thumbnail: "S3MTiles_BIM.jpg",
    //                     fileName: "WebGPU_S3MTiles_BIM"
    //                 },
    //                 {
    //                     name: "矢量",
    //                     name_en: "Vector",
    //                     thumbnail: "S3MTiles_vector.jpg",
    //                     fileName: "WebGPU_S3MTiles_vector"
    //                 }, {
    //                     name: "点云",
    //                     name_en: "Points Cloud(S3M)",
    //                     thumbnail: "S3MTiles_pointCloud.jpg",
    //                     fileName: "WebGPU_S3MTiles_pointCloud"
    //                 },
    //                 // {
    //                 //     name: "地下管线",
    //                 //     name_en: "Underground Pipelines",
    //                 //     thumbnail: "showUnderGround.jpg",
    //                 //     fileName: "WebGPU_showUnderGround"
    //                 // },
    //             ]
    //         },
    //         "vector": {
    //             name: "矢量瓦片",
    //             name_en: "Vector",
    //             content: [
    //                 {
    //                     name: "MVT",
    //                     name_en: "MVT",
    //                     thumbnail: "MVT.jpg",
    //                     fileName: "WebGPU_MVT"
    //                 }
    //             ]
    //         },
    //         "3D anylysis": {
    //             name: "三维空间分析",
    //             name_en: "3D anylysis",
    //             content: [
    //                 {
    //                     name: "通视分析",
    //                     name_en: "Visual Analysis",
    //                     thumbnail: "sightline.jpg",
    //                     fileName: "WebGPU_sightline"
    //                 },
    //                 {
    //                     name: "可视域分析",
    //                     name_en: "Viewshed 3D",
    //                     thumbnail: "viewshed3D.jpg",
    //                     fileName: "WebGPU_viewshed3D"
    //                 },
    //                 {
    //                     name: "阴影分析",
    //                     name_en: "Shadow Query",
    //                     thumbnail: "shadowQuery.jpg",
    //                     fileName: "WebGPU_shadowQuery"
    //                 },
    //                 {
    //                     name: "天际线分析",
    //                     name_en: "Skyline",
    //                     thumbnail: "skyline.jpg",
    //                     fileName: "WebGPU_skyline"
    //                 },
    //                 {
    //                     name: "剖面分析",
    //                     name_en: "Section Area",
    //                     thumbnail: "profile.jpg",
    //                     fileName: "WebGPU_profile"
    //                 },
    //                 {
    //                     name: "视频投放",
    //                     name_en: "Video Delivery",
    //                     thumbnail: "projectionImage.jpg",
    //                     fileName: "WebGPU_projectionImage"
    //                 },
    //                 {
    //                     name: "坡度坡向分析",
    //                     name_en: "Terrain Slope Analysis",
    //                     thumbnail: "terrainSlopeAnalysis.jpg",
    //                     fileName: "WebGPU_terrainSlopeAnalysis"
    //                 },
    //                 {
    //                     name: "地形开挖",
    //                     name_en: "Terrain Excavation",
    //                     thumbnail: "digTerrain.jpg",
    //                     fileName: "WebGPU_digTerrain"
    //                 },
    //                 //  {
    //                 //     name: "地形开挖抽出显示",
    //                 //     name_en: "Terrain Excavation Pull-out",
    //                 //     thumbnail: "TerrainExcavationPull-out.jpg",
    //                 //     fileName: "WebGPU_TerrainExcavation_Pull-out"
    //                 // },
                    
    //                 {
    //                     name: "地形修改",
    //                     name_en: "Terrain Modification",
    //                     thumbnail: "modifyTerrain.jpg",
    //                     fileName: "WebGPU_modifyTerrain"
    //                 },
	// 				 {
    //                     name: "开敞度分析",
    //                     name_en: "ViewDome",
    //                     thumbnail: "opennessAnalysis.jpg",
    //                     fileName: "WebGPU_opennessAnalysis"
    //                 },
    //             ]
    //         }
    //     }
    // },
    "3D_plot": {
        name: "三维标绘",
        name_en: "3D plotting",
        content: {
            "plotting": {
                name: "标绘",
                name_en: "plotting",
                content: [
                    {
                        name: "动态标绘",
                        name_en: "dynamicPlot",
                        thumbnail: "plot_dynamicPlot.jpg",
                        fileName: "plot_dynamicPlot"
                    },
                    {
                        name: "属性修改",
                        name_en: "modifySymbolStyle",
                        thumbnail: "plot_modifySymbolStyle.jpg",
                        fileName: "plot_modifySymbolStyle"
                    },
                    {
                        name: "缺省属性",
                        name_en: "defaultSymbolStyle",
                        thumbnail: "plot_defaultStyle.jpg",
                        fileName: "plot_defaultStyle"
                    },
                    {
                        name: "自定义属性",
                        name_en: "extendSymbolProperties",
                        thumbnail: "plot_symbolExtendProperty.jpg",
                        fileName: "plot_symbolExtendProperty"
                    },
                    {
                        name: "多注记",
                        name_en: "annotations",
                        thumbnail: "plot_Annotations.jpg",
                        fileName: "plot_Annotations"
                    },
                    {
                        name: "标号库加载",
                        name_en: "loadSymbolLibrary",
                        thumbnail: "plot_loadSymbolLib.jpg",
                        fileName: "plot_loadSymbolLib"
                    },
                    {
                        name: "查询标号",
                        name_en: "querySymbol",
                        thumbnail: "plot_querySymbolLib.jpg",
                        fileName: "plot_querySymbolLib"
                    },
                    {
                        name: "标号转json",
                        name_en: "geometryConversionJson",
                        thumbnail: "plot_GeometryConversionJson.jpg",
                        fileName: "plot_GeometryConversionJson"
                    }, 
                    {
                        name: "模型单例显示",
                        name_en: "modelInstance",
                        thumbnail: "plot_modelInstance.jpg",
                        fileName: "plot_modelInstance"
                    },
                    
                ]
            },
            "Situational inference": {
                name: "态势推演",
                name_en: "situational inference",
                content: [
                    {
                        name: "态势推演",
                        name_en: "situationalInference",
                        thumbnail: "plot_plotGOAnimation.jpg",
                        fileName: "plot_plotGOAnimation"
                    },
                    {
                        name: "态势图叠加",
                        name_en: "situationalMapSuperposition",
                        thumbnail: "plot_addfile.jpg",
                        fileName: "plot_addfile"
                    },
                    {
                        name: "态势图上传下载",
                        name_en: "plotSymbolFileUploadAndDownload",
                        thumbnail: "plot_filetransfer.jpg",
                        fileName: "plot_filetransfer"

                    }
                ]
            },
            "Layer operation": {
                name: "图层操作",
                name_en: "layer operation",
                content: [
                    {
                        name: "图层操作",
                        name_en: "layerOperations",
                        thumbnail: "plot_operPlottingLayer.jpg",
                        fileName: "plot_operPlottingLayer"
                    },
                    {
                        name: "图层编辑",
                        name_en: "layerEditing",
                        thumbnail: "plot_editPlottingLayer.jpg",
                        fileName: "plot_editPlottingLayer"

                    }

                ]
            }
        }
    }
};

/**
  *key value: the key value or fileName value configured for exampleConfig
  * (When it is an intermediate node, it is the key value, and the leaf node is the fileName value)
  *value: fontawesome font icon name
  *No layering
  */

var sideBarIconConfig = {
    "online-base-map": "fa-globe",
    "Scene": "fa-university",
    "fly": "fa-send",
    "layer": "fa-object-group",
    "KMLAndModel": "fa-cubes",
    "online-draw": "fa-edit",
    "search": "fa-search",
    "measurement": "fa-arrows-v",
    "analysis": "fa-map",
    "visualization": "fa-eye",
    "stereoscopic-show": "fa-cube",
    "3D_plot": "fa-pencil",
    "WebGPU":"icon-WebGPU"
};

/**
  *key value: the key value configured for exampleConfig
  *value: fontawesome font icon name
  *Difference from sideBarIconConfig: sideBarIconConfig includes icons for all levels of the sidebar, and exampleIconConfig only includes icons for the first-level title
 */
var exampleIconConfig = {
    "online-base-map": "fa-globe",
    "Scene": "fa-university",
    "fly": "fa-send",
    "layer": "fa-object-group",
    "KMLAndModel": "fa-cubes",
    "online-draw": "fa-edit",
    "search": "fa-search",
    "measurement": "fa-arrows-v",
    "analysis": "fa-map",
    "visualization": "fa-eye",
    "stereoscopic-show": "fa-cube",
    "3D_plot": "fa-pencil",
    "WebGPU":"icon-WebGPU"
};
window.webglExampleConfig = exampleConfig;