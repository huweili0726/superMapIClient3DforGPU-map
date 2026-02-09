/**
 * 移动点位模块
 * 
 * 提供在Cesium地图上移动无人机点位的功能
 * 
 * @author huweili
 * @email czxyhuweili@163.com
 * @version 1.0.0
 * @date 2026-02-09
 */
import { useMapStore } from '@/stores/modules/mapStore'
import { setPoint } from '@/components/supermap/ts/setPoint'

export function movePointConfig(baseUrl: string) {
  // 获取地图store实例
  const mapStore = useMapStore()

  /**
   * 移动点位到新的坐标位置
   * @param options 配置选项
   * @param options.pointId 点位唯一标识
   * @param options.lng 新的经度
   * @param options.lat 新的纬度
   * @param options.height 高度
   * @param options.heading 方向角度（水平方向）
   * @param options.pitch 俯仰角度
   * @returns 是否移动成功
   * 
   * cesium 中只有部分实体 / 图形支持 orientation（朝向），比如：
   *   ✅ 支持：Cesium3DTileset、Model（3D 模型）、Billboard（带旋转的广告牌）、Entity（通过 orientation 属性）
   *   ❌ 不支持：普通的 PointPrimitive、CircleGraphics、PolylineGraphics 等基础图形（设置 orientation 无任何效果）。
   */
  const movePoint = (options: {
    pointId: string,
    lng: number,
    lat: number,
    height?: number,
    heading?: number,
    pitch?: number,
  }) => {
    // 检查是否存在该点位
    const point = mapStore.getGraphicMap(options.pointId)
    console.log('图形类型：', point.constructor.name)
    if (!point) {
      console.warn(`点位不存在，ID: ${options.pointId}`)
      return false
    }

    // 核心：校验并格式化经纬度/高度，避免 NaN
    const lng = Number(options.lng)
    const lat = Number(options.lat)
    const height = Number(options.height || 0) // 高度默认0

    // 重新计算 position（确保无 NaN）
    const position = SuperMap3D.Cartesian3.fromDegrees(lng, lat, height)
    // 校验 position 是否有效（兜底）
    if (!position || isNaN(position.x) || isNaN(position.y) || isNaN(position.z)) {
      console.error('生成的坐标包含 NaN：', position)
      return false
    }

    // 更新点位位置
    point.position = position
    // 更新朝向（用校验后的 position）
    point.orientation = SuperMap3D.Transforms.headingPitchRollQuaternion(
      position, // 用校验后的有效 position
      new SuperMap3D.HeadingPitchRoll(
        SuperMap3D.Math.toRadians(Number(options.heading) || 0), // 同样校验 heading
        SuperMap3D.Math.toRadians(Number(options.pitch) || 0),   // 校验 pitch
        SuperMap3D.Math.toRadians(0)
      )
    )

    return true
  }

  return {
    movePoint
  }
}
