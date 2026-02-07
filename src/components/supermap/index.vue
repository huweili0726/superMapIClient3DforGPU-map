<template>
  <div ref="containerRef" class="supermap-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 容器引用
const containerRef = ref<HTMLElement | null>(null);
// 场景实例
let viewer: any = null;

onMounted(() => {
  if (!containerRef.value) return;

  // 启用 WebGPU 渲染引擎
  (window as any).EngineType = 3; // 3 = WebGPU, 2 = WebGL2

  // 初始化 3D 场景（关闭默认底图）
  viewer = new SuperMap3D.Viewer(containerRef.value, {
    contextOptions: {
      webgl: { alpha: false }
    },
    baseLayerPicker: false, // 关闭底图选择器
    terrainProvider: null,  // 关闭默认地形
    imageryProvider: false  // 禁用默认底图
  });

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
    // 瓦片大小
    tileWidth: 256,
    tileHeight: 256,
    // 避免跨域问题（如果部署后报跨域，需要后端代理）
    credit: new SuperMap3D.Credit('高德地图')
  });

  // 将高德瓦片作为底图添加到场景
  const gaodeLayer = new SuperMap3D.ImageryLayer(gaodeImageryProvider);
  viewer.imageryLayers.add(gaodeLayer);

  // 可选：设置相机初始视角（比如定位到北京）
  viewer.camera.setView({
    destination: SuperMap3D.Cartesian3.fromDegrees(116.403874, 39.914885, 1000000), // 经纬度 + 高度
    orientation: {
      heading: SuperMap3D.Math.toRadians(0),   // 水平旋转
      pitch: SuperMap3D.Math.toRadians(-90),   // 俯仰角度
      roll: 0
    }
  });
});

onUnmounted(() => {
  // 销毁场景，释放资源
  if (viewer) {
    viewer.destroy();
    viewer = null;
  }
});
</script>

<style scoped lang="less">
.supermap-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>