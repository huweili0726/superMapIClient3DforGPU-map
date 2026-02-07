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

  // 初始化 3D 场景
  viewer = new SuperMap3D.Viewer(containerRef.value, {
    // 场景配置项
    contextOptions: {
      webgl: {
        alpha: false,
      },
    },
    // 关闭默认的基础图层
    baseLayerPicker: false,
    // 关闭默认的地形
    terrainProvider: null,
  });

  // 示例：加载一个在线的 3D 场景服务（请替换为你自己的服务地址）
  const sceneServiceUrl = 'https://iserver.supermap.io/iserver/services/3D-Diffuse_irradiance_map/rest/realspace/datas/Scene/config';
  const sceneProvider = new SuperMap3D.S3MTilesSceneProvider({
    url: sceneServiceUrl,
  });
  viewer.scene.open(sceneProvider);
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