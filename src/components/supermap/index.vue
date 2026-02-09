<template>
  <div ref="containerRef" class="supermap-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, toRaw } from 'vue';
import { jsonUtils } from '@/utils/json'
import { objectUtils } from '@/utils/object'

const props = withDefaults(
  defineProps<{
    mapConfigUrl?: string // 传入的地图构造参数url，可为空，只传options
    options?: any // 传入的地图构造参数options，可覆盖url内的参数
  }>(),
  {
    mapConfigUrl: undefined, 
    options: undefined
  }
)

// 容器引用
const containerRef = ref<HTMLElement | null>(null);
// 场景实例
let map: any = null;

const initSuperMap3D = async () => {
  if (!containerRef.value) return;

    // ========== 新增：强制启用 WebGPU（关键修复） ==========
  // ========== 兼容版：强制启用 WebGPU（替换原有2行） ==========
  // 1. 全局 EngineType 用数字兜底（3 = WebGPU，2 = WebGL2）
  // (window as any).EngineType = 3; 
  // // 2. 兼容检测 ConfigurationOptions 和 EngineType
  // if (SuperMap3D.ConfigurationOptions && SuperMap3D.EngineType) {
  //   // 高版本包：用枚举值
  //   SuperMap3D.ConfigurationOptions.engineType = SuperMap3D.EngineType.WebGPU || 3;
  // } else if (SuperMap3D.ConfigurationOptions) {
  //   // 中版本包：直接设数字
  //   SuperMap3D.ConfigurationOptions.engineType = 3;
  // }

  // 获取配置
  let mapOptions
  if (props.mapConfigUrl) {
    mapOptions = await getJsonFile(props.mapConfigUrl)
  }

  if (props.options) {
    // 存在叠加的属性时
    let exOptions
    if (props.options.then) {
      exOptions = toRaw(await props.options)
    } else {
      exOptions = toRaw(props.options)
    }

    if (mapOptions) {
      mapOptions = merge(mapOptions, exOptions) // 合并配置
    } else {
      mapOptions = exOptions
    }
  }

  console.log('SuperMap3D 版本:', (SuperMap3D as any).VERSION || '未知');
  console.log('SuperMap3D.ContextType:', SuperMap3D.ContextType);
  console.log('WebGPU 枚举值:', SuperMap3D.ContextType?.WebGPU);
  
  // // 检查浏览器 WebGPU 支持
  // if (navigator.gpu) {
  //   console.log('✅ 浏览器支持 WebGPU');
  // } else {
  //   console.log('❌ 浏览器不支持 WebGPU');
  // }

  // 初始化 3D 场景（启用 WebGPU 渲染引擎）
  map = new SuperMap3D.Viewer(containerRef.value, {
    //使用WebGPU方式加载（若不开启此属性，则默认以WebGL2.0方式加载）
    contextOptions: {
      contextType: SuperMap3D.ContextType.WebGPU
    },
    baseLayerPicker: false,
    terrainProvider: null,
    imageryProvider: false
  });

  map.scenePromise.then(function(scene){
    if (scene.context?.contextType) {
      console.log('ContextType:', scene.context.contextType);
      if (scene.context.contextType === 3) {
        console.log('✅ WebGPU 已启用（ContextType: 3）');
      } else {
        console.log('❌ WebGPU 未启用，ContextType:', scene.context.contextType);
      }
    }
    
    //初始化场景（由于WebGPU采用异步加载，初始化场景需要放在回调中打开）	
    init(SuperMap3D, scene, map, mapOptions);
  });
}

const init = (SuperMap3D, scene, map, mapOptions) => {

//   async function check() {
//   if (!navigator.gpu) {
//     console.log("浏览器不支持 WebGPU");
//     return;
//   }
//   const adapter = await navigator.gpu.requestAdapter();
//   if (!adapter) {
//     console.log("显卡不支持 WebGPU");
//   } else {
//     console.log("浏览器+显卡支持 WebGPU");
//   }
// }
// check();




  // ========== 加载高德瓦片地图（核心代码）==========
  const gaodeImageryProvider = new SuperMap3D.UrlTemplateImageryProvider({
    // 高德瓦片地址模板（{s} 用于多域名负载均衡）
    url: 'https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    // 配置子域名（对应 {s}）
    subdomains: ['1', '2', '3', '4'],
    // 瓦片投影坐标系（高德默认是墨卡托，对应 EPSG:3857）
    projection: SuperMap3D.WebMercatorProjection,
    // 瓦片层级范围
    minimumLevel: 0,
    maximumLevel: 18,
    // 瓦片大小 （默认256，行业标准 ：几乎所有主流地图服务（包括高德地图）都使用 256x256 的瓦片大小）
    tileWidth: 256,
    tileHeight: 256,
    // 避免跨域问题（如果部署后报跨域，需要后端代理）
    credit: new SuperMap3D.Credit('高德地图')
  });

  // 将高德瓦片作为底图添加到场景
  const gaodeLayer = new SuperMap3D.ImageryLayer(gaodeImageryProvider);
  map.imageryLayers.add(gaodeLayer);



  // 检测 WebGPU 状态的函数
const checkWebGPUStatus = (mapInstance) => {
  if (!mapInstance) {
    console.log('❌ 地图实例不存在');
    return false;
  }

  if (mapInstance.scene?.context) {
    const context = mapInstance.scene.context;
    console.log('Context 对象类型:', context.constructor.name);
    
    // 检查 1: 通过构造函数名称
    if (context.constructor.name.includes('WebGPU')) {
      console.log('✅ WebGPU 已启用（构造函数检测）');
      return true;
    }
    
    // 检查 2: 通过引擎名称
    if (context._engine?.name === 'WebGPU' || context._engine?._name === 'WebGPU') {
      console.log('✅ WebGPU 已启用（引擎名称检测）');
      return true;
    }
    
    // 检查 3: 通过 contextType 选项
    if (context.options?.contextType === 3) {
      console.log('✅ WebGPU 已启用（contextType 检测）');
      return true;
    }
    
    // 检查 4: 通过 WebGPU 特定属性
    if (context.webgpuMembers || context.webgpu) {
      console.log('✅ WebGPU 已启用（WebGPU 属性检测）');
      return true;
    }
    
    // 检查 5: 通过系统着色器定义
    if (context._sysShaderDefines?.includes('WEBGPU')) {
      console.log('✅ WebGPU 已启用（着色器定义检测）');
      return true;
    }
  }
  
  console.log('❌ 无法检测 WebGPU 状态');
  return false;
};
  checkWebGPUStatus(map);

  // 可选：设置相机初始视角（比如定位到北京）
  map.camera.setView({
    destination: SuperMap3D.Cartesian3.fromDegrees(mapOptions.scene.center.lng, mapOptions.scene.center.lat, mapOptions.scene.center.alt), // 经纬度 + 高度
    orientation: {
      heading: SuperMap3D.Math.toRadians(mapOptions.scene.center.heading),   // 水平旋转
      pitch: SuperMap3D.Math.toRadians(mapOptions.scene.center.pitch),   // 俯仰角度
      roll: SuperMap3D.Math.toRadians(mapOptions.scene.center.roll)   // 翻滚角度
    }
  });
}

onMounted(() => {
  initSuperMap3D();
});

onUnmounted(() => {
  // 销毁场景，释放资源
  if (map) {
    map.destroy();
    map = null;
  }
});

const { getJsonFile } = jsonUtils()
const { merge } = objectUtils()
</script>

<style scoped lang="less">
.supermap-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>