<template>
  <div class="home-container">
    <SuperMap />
  </div>
</template>

<script setup lang="ts">
import SuperMap from '@/components/supermap/index.vue'
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