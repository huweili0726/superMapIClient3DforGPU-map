/**
 * 地图基本操作模块
 * 
 * @author huweili
 * @email czxyhuweili@163.com
 * @version 1.0.0
 * @date 2026-02-09
 */
import { useMapStore } from '@/stores/modules/mapStore'

export function basicConfig() {

  // 获取地图store实例
  const mapStore = useMapStore()

  /**
   * 设置地图中心点
   * 
   * @param options - 包含地图中心点经纬度和高度的对象
   * @param options.lng - 地图中心点经度
   * @param options.lat - 地图中心点纬度
   * @param options.alt - 可选，地图中心点高度，默认0
   * @param options.map - 地图实例，可选，默认从store中获取
   */
  const setMapCenter = (options: { 
    lng: number, 
    lat: number, 
    alt?: number,
    map?: any
  }) => {
    const { lng, lat, alt: altitude, map: mapInstance } = options
    const map = mapInstance || mapStore.getMap()
    if (!map) {
      console.error('地图实例不存在')
      return null
    }

    // 转换为笛卡尔坐标
    const cartesian = SuperMap3D.Cartesian3.fromDegrees(lng, lat - 0.05, altitude || mapStore.getMapInfo('center')?.alt);
    // 设置相机位置
    map.scene.camera.setView({
      destination: cartesian,
      orientation: {
        heading: SuperMap3D.Math.toRadians(mapStore.getMapInfo('center')?.heading || 0),
        pitch: SuperMap3D.Math.toRadians(mapStore.getMapInfo('center')?.pitch || 0),
        roll: SuperMap3D.Math.toRadians(mapStore.getMapInfo('center')?.roll || 0)
      }
    });
  }

  return {
    setMapCenter
  }
}