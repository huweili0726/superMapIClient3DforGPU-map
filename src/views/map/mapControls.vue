<template>
  <!-- 地图加载状态指示器 -->
  <div class="map-status-indicator">
    地图加载状态：{{ mapStore.mapStatus?.info || '未知状态' }}
  </div>

  <!-- 点位控制按钮 -->
  <div class="map-controls">
    <div class="button-group">
      <!-- 图片点位控制按钮组 -->
      <div class="button-group img-point-controls">
        <div class="group-title" @click="toggleControls('imgPoint')">
          图片点位控制
          <span class="toggle-icon">{{ isImgPointControlsOpen ? '▼' : '▶' }}</span>
        </div>
        <div v-if="isImgPointControlsOpen" class="controls-content">
          <button @click="toSetPointEntityByImg" class="control-btn">set entity点位(img)</button>
          <button @click="toSetPointPrimitiveByImg" class="control-btn">set primitive点位(img)</button>
          <button @click="toMovePointByImg" class="control-btn">move点位(img)</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { useMapStore } from '@/stores/modules/mapStore'
import { setPoint } from '@/components/supermap/ts/setPoint'
import { movePointConfig } from '@/components/supermap/ts/movePoint'


// 获取store实例，保持响应性
const mapStore = useMapStore()

// 按钮组展开/折叠状态
const isImgPointControlsOpen = ref(false)
const isModelControlsOpen = ref(false)
const isHemisphereControlsOpen = ref(false)
const isDroneControlsOpen = ref(false)
const isReplayControlsOpen = ref(false)
const isDiffusionControlsOpen = ref(false)
const isFenceControlsOpen = ref(false)
const isPyramidControlsOpen = ref(false)

// 切换按钮组展开/折叠状态
const toggleControls = (controlType: string) => {
  switch (controlType) {
    case 'imgPoint':
      isImgPointControlsOpen.value = !isImgPointControlsOpen.value
      break
    case 'model':
      isModelControlsOpen.value = !isModelControlsOpen.value
      break
    case 'hemisphere':
      isHemisphereControlsOpen.value = !isHemisphereControlsOpen.value
      break
    case 'drone':
      isDroneControlsOpen.value = !isDroneControlsOpen.value
      break
    case 'replay':
      isReplayControlsOpen.value = !isReplayControlsOpen.value
      break
    case 'diffusion':
      isDiffusionControlsOpen.value = !isDiffusionControlsOpen.value
      break
    case 'fence':
      isFenceControlsOpen.value = !isFenceControlsOpen.value
      break
    case 'pyramid':
      isPyramidControlsOpen.value = !isPyramidControlsOpen.value
      break
  }
}

const toSetPointEntityByImg = () => {
  // 设置点位 （通过提供的图片设置点位）【Entity】
  setPointEntityByImg({id: '1', lng: 117.229629, lat: 31.716888});
}

// 设置点位 （通过提供的设置点位）【Primitive】
const toSetPointPrimitiveByImg = () => {
  setPointPrimitiveByImg({id: `point-primitive-1`, lng: 117.229629, lat: 31.716888, name: `雷达位置`, imageUrl: new URL('@/assets/img/point1.png', import.meta.url).href});
}

// 移动点位 （通过提供的图片设置点位）
const toMovePointByImg = () => {
  // 在原位置附近随机生成新的坐标
  const newLng = 117.236334 + (Math.random() - 0.5) * 0.01;
  const newLat = 31.715287 + (Math.random() - 0.5) * 0.01;
  const newHeight =  0;
  
  // 移动点位 （通过提供的图片设置点位）
  movePoint({pointId: '1', lng: newLng, lat: newLat, height: newHeight});
}

const {
  setPointEntityByImg,
  setPointPrimitiveByImg
} = setPoint(process.env.BASE_URL)

const {
  movePoint
} = movePointConfig(process.env.BASE_URL)
</script>

<style scoped lang="less">
.map-status-indicator {
  position: absolute;
  top: 10px;
  left: 10px;
  background: linear-gradient(135deg, #0a192f 0%, #172a45 100%);
  color: #64ffda;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  border: 1px solid rgba(100, 255, 218, 0.3);
  backdrop-filter: blur(5px);
}

.map-controls {
  position: absolute !important;
  top: 60px !important;
  left: 10px !important;
  z-index: 1000 !important;
}

.map-controls .button-group {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.8);
  padding: 6px;
  border-radius: 6px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-direction: column;
}

.map-controls .replay-controls {
  margin-top: 6px;
  background: rgba(20, 40, 60, 0.9);
  border-color: rgba(100, 255, 218, 0.3);
}

.map-controls .group-title {
  color: #64ffda;
  font-size: 11px;
  font-weight: 600;
  margin-bottom: 4px;
  text-align: center;
  border-bottom: 1px solid rgba(100, 255, 218, 0.2);
  padding-bottom: 3px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.map-controls .group-title:hover {
  background-color: rgba(100, 255, 218, 0.1);
}

.map-controls .toggle-icon {
  font-size: 9px;
  margin-left: 4px;
  color: #64ffda;
}

.map-controls .controls-content {
  display: flex;
  gap: 6px;
  padding-top: 4px;
  flex-direction: column;
  width: 100%;
}

.map-controls .drone-controls {
  margin-top: 6px;
  background: rgba(40, 20, 60, 0.9);
  border-color: rgba(255, 100, 218, 0.3);
}

.map-controls .img-point-controls {
  margin-top: 6px;
  background: rgba(20, 60, 40, 0.9);
  border-color: rgba(100, 255, 150, 0.3);
}

.map-controls .pyramid-controls {
  margin-top: 6px;
  background: rgba(60, 80, 100, 0.95);
  border-color: rgba(150, 255, 255, 0.5);
}

.map-controls .model-controls {
  margin-top: 6px;
  background: rgba(60, 40, 20, 0.9);
  border-color: rgba(255, 200, 100, 0.3);
}

.map-controls .hemisphere-controls {
  margin-top: 6px;
  background: rgba(40, 40, 60, 0.9);
  border-color: rgba(150, 100, 255, 0.3);
}

.map-controls .diffusion-controls {
  margin-top: 6px;
  background: rgba(60, 20, 40, 0.9);
  border-color: rgba(255, 100, 150, 0.3);
}

.map-controls .fence-controls {
  margin-top: 6px;
  background: rgba(60, 40, 20, 0.9); /* 棕色系背景，与模型控制类似 */
  border-color: rgba(255, 200, 100, 0.3); /* 金色边框 */
}

.delete-controls {
  position: absolute !important;
  top: 120px !important;
  left: 10px !important;
  z-index: 1000 !important;
}

.control-btn {
  background: rgba(255, 255, 255, 0.9);
  color: #000000;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.control-btn:hover {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.5);
}

.control-group {
  display: flex;
  gap: 4px;
  align-items: center;
}

.control-input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  width: 100px;
}

.control-input:focus {
  border-color: rgba(24, 144, 255, 0.9);
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

/* 圆圈控制按钮样式 */
.circle-controls {
  position: absolute !important;
  top: 14px !important;
  right: 10px !important;
  z-index: 1000 !important;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
}

.circle-controls h3 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 16px;
  color: #1890ff;
  text-align: center;
}

.circle-controls h4 {
  margin-top: 12px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #555;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 4px;
}

.circle-buttons {
  margin-bottom: 15px;
}

.btn-row {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.btn-row button {
  flex: 1;
  min-width: 100px;
}
</style>
