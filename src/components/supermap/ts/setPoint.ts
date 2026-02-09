/**
 * 点位设置模块
 * 
 * 提供在SuperMap3D地图上设置无人机点位的功能
 * 
 * @author huweili
 * @email czxyhuweili@163.com
 * @version 1.0.0
 * @date 2026-02-09
 */
import { useMapStore } from '@/stores/modules/mapStore'

export function setPoint(baseUrl: string) {

  // 获取地图store实例
  const mapStore = useMapStore()

  /**
   * 设置点位 （直接把图片设置成点位）
   * @param options 配置选项
   * @param options.id 点位唯一标识
   * @param options.lng 经度
   * @param options.lat 纬度
   * @returns 创建的点位对象
   * 
   * map.entities.add 理论上能添加上千 / 上万个点位，但不推荐在海量点位场景下使用
   * Entity 是 Cesium 提供的高层级封装 API，为了简化开发，它内部做了大量自动处理（比如属性监听、事件绑定、样式解析），但这也带来了额外开销
   * 
   * Entity 并非完全不能用，以下场景优先选它：
   *   点位数量 ≤ 500：少量点位时，Entity 的 “易用性” 远大于性能损耗；
   *   需要点位绑定复杂逻辑：比如每个点位有独立的点击事件、弹窗、动态样式（如实时变色 / 缩放）；
   *   快速开发验证：Entity 代码简洁，无需关注底层渲染细节，适合原型开发。
   */
  const setPointEntityByImg = (options: { 
    id: string, 
    lng: number, 
    lat: number,
    name?: string
  }) => {
    // 获取地图实例
    const map = mapStore.getMap()
    if (!map) {
      console.error('地图实例不存在')
      return null
    }

    // 检查是否已存在相同id的点位，如果存在直接返回
    if (mapStore.hasGraphicMap(options.id)) {
      console.warn(`点位已存在，ID: ${options.id}`)
      return mapStore.getGraphicMap(options.id)
    }

    // 点位参数配置
    const pointParams = {
      position: SuperMap3D.Cartesian3.fromDegrees(options.lng, options.lat, 0), // 经纬度 + 高度（使用0米高度）
      billboard: {
        image: new URL('@/assets/img/point.png', import.meta.url).href, // 图片路径
        width: 30, // 图片宽度（像素）
        height: 64, // 图片高度（像素）
        scale: 1, // 缩放比例（可选，覆盖宽高）
        verticalOrigin: SuperMap3D.VerticalOrigin.BOTTOM, // 垂直对齐方式（底部对齐点位）
        horizontalOrigin: SuperMap3D.HorizontalOrigin.CENTER, // 水平居中
        clampToGround: true,
        heightReference: SuperMap3D.HeightReference.CLAMP_TO_GROUND, // 贴地显示，固定在地面上
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
      },
      // 添加标签：黑底白字显示点位名称
      label: {
        text: options.name || '自定义图片点位', // 使用传入的名称或默认名称
        font: '12px sans-serif', // 字体样式
        fillColor: SuperMap3D.Color.WHITE, // 文字颜色：白色
        outlineColor: SuperMap3D.Color.BLACK, // 文字描边颜色：黑色
        outlineWidth: 2, // 文字描边宽度
        style: SuperMap3D.LabelStyle.FILL_AND_OUTLINE, // 文字样式：填充+描边
        verticalOrigin: SuperMap3D.VerticalOrigin.BOTTOM, // 垂直对齐方式：底部
        horizontalOrigin: SuperMap3D.HorizontalOrigin.CENTER, // 水平对齐方式：居中
        pixelOffset: new SuperMap3D.Cartesian2(0, -70), // 偏移量：在图标上方70像素处
        showBackground: true, // 显示背景
        backgroundColor: new SuperMap3D.Color(0, 0, 0, 0.8), // 背景颜色：黑色，透明度0.8
        backgroundPadding: new SuperMap3D.Cartesian2(5, 3), // 背景内边距：水平5像素，垂直3像素
        heightReference: SuperMap3D.HeightReference.CLAMP_TO_GROUND, // 贴地显示，固定在地面上
        disableDepthTestDistance: Number.POSITIVE_INFINITY, // 禁用深度测试，确保标签始终在最上层
      },
      // 可选：添加点位名称/描述
      name: options.name || '自定义图片点位',
      description: '<p>这是一个基于图片的 SuperMap3D 点位</p>',
    };

    // 添加到 map 中
    const pointEntity = map.entities.add(pointParams);

    // 将点位缓存到 graphicMap 中，防止重复创建
    mapStore.setGraphicMap(options.id, pointEntity)

    // 可选：相机飞到该点位
    // map.flyTo(pointEntity, {
    //   duration: 2,
    //   offset: new Cesium.HeadingPitchRange(0, -0.5, 1000), // 视角偏移（俯视点位）
    // });

    return pointEntity;
  }

  /**
   * 设置点位 （通过提供的图片设置点位）【Primitive】
   * @param options 点位参数
   * @param options.id 点位id
   * @param options.lng 点位经度
   * @param options.lat 点位纬度
   * @param options.name 点位名称
   * @returns 点位Primitive
   */
  const setPointPrimitiveByImg = (options: {
    id: string,
    lng: number,
    lat: number,
    name?: string,
    imageUrl: string,
  }) => {
    // 获取地图实例
    const map = mapStore.getMap()
    if (!map) {
      console.error('地图实例不存在')
      return null
    }

    // 检查是否已存在相同id的点位，如果存在直接返回
    if (mapStore.hasGraphicMap(options.id)) {
      console.warn(`点位已存在，ID: ${options.id}`)
      return mapStore.getGraphicMap(options.id)
    }

    // 1. 经纬度转SuperMap3D笛卡尔坐标（支持贴地）
    const position = SuperMap3D.Cartesian3.fromDegrees(options.lng, options.lat, 0);
    const cartographic = SuperMap3D.Cartographic.fromCartesian(position);
    const terrainHeight = map.scene.globe.getHeight(cartographic) || 0;
    const groundPosition = SuperMap3D.Cartesian3.fromDegrees(options.lng, options.lat, terrainHeight);

    // 2. 【核心】创建自定义Canvas纹理（还原SuperMap3D-point-body的DOM结构）
    const createCustomTexture = async () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      // 先加载图片
      const img = new Image();
      img.crossOrigin = 'anonymous'; // 解决跨域问题
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = options.imageUrl;
      });

      // 定义尺寸（可根据实际需求调整）
      const x_imgSize = 30; // 图片大小
      const y_imgSize = 64; // 图片大小
      const textHeight = 20; // 文字区域高度
      const bodyPadding = 0; // 容器内边距
      const textDivMarginBottom = 4*2; // 文字的div 与 图标的div之间的间距

      // Canvas总尺寸 = 图片尺寸 + 文字高度 + 内边距
      canvas.width = x_imgSize + bodyPadding * 2;
      canvas.height = y_imgSize + textHeight + bodyPadding * 2 + textDivMarginBottom;

      // 绘制icon-text文字（含背景色）
      const text = options.name || '自定义图片点位';
      ctx.font = '14px Microsoft YaHei';

      // === 新增：绘制文字背景 ===
      const textBgColor = '#FFB413'; // 文字背景色
      const textBgPaddingX = 10; // 文字左右内边距
      const textBgPaddingY = 4; // 文字上下内边距
      const textWidth = ctx.measureText(text).width; // 动态计算文字宽度
      // 背景矩形坐标计算
      const textBgX = 0;
      const textBgY = 0;
      const textY = textHeight / 2 + bodyPadding; // 原有文字Y坐标
      const textBgWidth = textWidth + textBgPaddingX * 2;
      const textBgHeight = textHeight + textBgPaddingY * 2;

      // 计算 Canvas 所需最小宽度（取图片宽度和文字背景宽度的较大值）
      const minCanvasWidth = Math.max(x_imgSize, textBgWidth) + bodyPadding * 2;
      // 设置 Canvas 宽度
      canvas.width = minCanvasWidth;

      // === 绘制圆角背景 ===
      ctx.fillStyle = textBgColor;
      ctx.roundRect(textBgX, textBgY, minCanvasWidth, textBgHeight, 20);
      ctx.fill();

      // === 原有文字绘制 ===
      ctx.fillStyle = '#000000'; // 文字白色
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '14px Microsoft YaHei';
      ctx.fillText(text, canvas.width / 2, textY + textBgPaddingY);

      // 绘制cesium-point-img图片（模拟<img>）
      const imgY = textHeight + bodyPadding * 2 + textDivMarginBottom;
      ctx.drawImage(img, (canvas.width - x_imgSize)/2, imgY, x_imgSize, y_imgSize);

      return canvas.toDataURL('image/png');
    };

    // 3. 创建Primitive主逻辑
    const createPointPrimitive = async () => {
      const textureUrl = await createCustomTexture();
      if (!textureUrl) {
        console.error('创建自定义纹理失败');
        return null;
      }

      // 4. 创建BillboardCollection（核心Primitive）
      const billboardCollection = new SuperMap3D.BillboardCollection({
        scene: map.scene,
      });

      // 5. 创建自定义纹理的Billboard（还原完整DOM结构）
      const billboard = billboardCollection.add({
        id: options.id,
        position: groundPosition,
        image: textureUrl, // 使用Canvas生成的纹理
        scale: 1, // 缩放比例
        // 对齐方式（和原DOM逻辑一致：底部居中）
        horizontalOrigin: SuperMap3D.HorizontalOrigin.CENTER,
        verticalOrigin: SuperMap3D.VerticalOrigin.BOTTOM,
        show: true,
        heightReference: SuperMap3D.HeightReference.CLAMP_TO_GROUND, // 贴地
        // ✅ 正确位置：始终显示在最上层（禁用深度测试）
        disableDepthTestDistance: Number.POSITIVE_INFINITY
      });

      // 6. 距离显示条件控制（和原逻辑一致）
      const updateShowStatus = () => {
        if (!map) return;
        const cameraHeight = SuperMap3D.Cartographic.fromCartesian(map.camera.position).height;
        const isInRange = cameraHeight >= 0 && cameraHeight <= 500000;
        billboard.show = isInRange;
      };

      // 7. 监听视角变化
      const postRenderListener = map.scene.postRender.addEventListener(updateShowStatus);
      updateShowStatus(); // 首次执行

      // 8. 添加到地图场景
      map.scene.primitives.add(billboardCollection);

      // 9. 销毁方法
      const destroy = () => {
        map.scene.postRender.removeEventListener(postRenderListener);
        map.scene.primitives.remove(billboardCollection);
        billboardCollection.destroy();
      };

      mapStore.setGraphicMap(options.id, billboard)

      // 返回完整的Primitive对象
      return {
        id: options.id,
        position: groundPosition,
        billboardCollection: billboardCollection,
        billboard: billboard,
        destroy: destroy
      };
    };

    // 执行创建逻辑并返回
    return createPointPrimitive();
  };



  return {
    setPointEntityByImg,
    setPointPrimitiveByImg,
  }
}