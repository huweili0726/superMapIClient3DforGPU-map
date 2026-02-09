<template>
  <div class="home-container">
    <SuperMap 
      :mapConfigUrl="mapConfigUrl"
      :options="options"/>
  </div>
</template>

<script setup lang="ts">
import SuperMap from '@/components/supermap/index.vue'

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