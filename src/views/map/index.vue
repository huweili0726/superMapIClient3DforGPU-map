<template>
  <div class="home-container">
    <!-- 引入地图控制组件 -->
    <MapControls />

    <!-- superMap 地图 -->
    <SuperMap 
      :mapConfigUrl="mapConfigUrl"
      :options="options"
      @onload="mapOnLoad"/>
  </div>
</template>

<script setup lang="ts">
import SuperMap from '@/components/supermap/index.vue'
import MapControls from './mapControls.vue'
import { useMapStore, MapLoadStatus } from '@/stores/modules/mapStore'
import { basicConfig } from '@/components/supermap/ts/basis'


// 获取store实例，保持响应性
const mapStore = useMapStore()

// 地图配置文件
const mapConfigUrl = `${process.env.BASE_URL}/config/mapConfig.jsonc?time=${new Date().getTime()}`
// 设置地图属性
const options = {
  "scene": {
    // 设置地图中心点
    "center": {
      "lat": 31.626288,
      "lng": 117.229619
    }
  }
}

// 地图加载完成后触发
const mapOnLoad = (map: any) => {
  mapStore.setMapLoadSta(MapLoadStatus.LOADED) // 地图加载完成，设置状态为已加载
  mapStore.setMap(map); // 地图加载完成, 全局设置地图对象到store中
  setMapCenter({lng: 117.229619, lat: 31.726288})// 设置地图中心点
  setBeiJingTime(); // 地图加载完成后设置为当前北京时间
}

/**
 * 设置SuperMap3D地图时间为当前北京时间
 */
const setBeiJingTime = () => {
  const map = mapStore.getMap() // 或者你的viewer变量
  if (!map) return
  // 强制设置时间为当前北京时间
  const now = new Date()
  const chinaTime = new Date(now.getTime() + 8 * 60 * 60 * 1000)
  map.clock.currentTime = SuperMap3D.JulianDate.fromDate(chinaTime)
  // 如果你不想动画效果，可以暂停时钟
  map.clock.shouldAnimate = true
}

const { setMapCenter } = basicConfig()
</script>

<style scoped lang="less">
.home-container {
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>