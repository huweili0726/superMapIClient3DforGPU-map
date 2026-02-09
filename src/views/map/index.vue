<template>
  <div class="home-container">
    <SuperMap 
      :mapConfigUrl="mapConfigUrl"/>
  </div>
</template>

<script setup lang="ts">
import SuperMap from '@/components/supermap/index.vue'

const mapConfigUrl = `${process.env.BASE_URL}/config/mapConfig.jsonc?time=${new Date().getTime()}`

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