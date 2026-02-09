# SuperMap iClient3D for WebGPU 项目

一个基于 Vue 3 + TypeScript + SuperMap iClient3D for WebGPU 的三维地图项目，使用 Vite 作为构建工具，提供了现代化的前端开发体验和强大的三维地图功能。

## 技术栈

| 技术/依赖 | 版本 | 用途 |
|---------|------|------|
| Vue | ^3.5.22 | 前端框架 |
| TypeScript | ^5.9.3 | 类型系统 |
| Vite | ^7.1.11 | 构建工具 |
| Vue Router | ^4.6.3 | 路由管理 |
| SuperMap iClient3D for WebGPU | 最新版 | 三维地图渲染引擎 |
| @vitejs/plugin-vue | ^6.0.1 | Vue 插件 |
| vue-tsc | ^3.1.1 | Vue TypeScript 编译器 |

## 项目结构

```
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # 全局组件
│   │   └── supermap/    # SuperMap 三维地图组件
│   ├── types/           # 类型定义
│   │   └── global.d.ts  # 全局类型声明
│   ├── utils/           # 工具函数
│   ├── App.vue          # 根组件
│   ├── main.ts          # 入口文件
│   └── style.css        # 全局样式
├── public/              # 公共资源
│   └── supermap/        # SuperMap 库文件
├── package.json         # 项目配置
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```

## 环境要求

- Node.js 18.x 或更高版本
- npm 9.x 或更高版本
- 支持 WebGPU 的浏览器：
  - Chrome 113.0 以上版本
  - Edge 最新版本
  - Firefox、Safari：暂不直接支持

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发服务器

启动本地开发服务器：

```bash
npm run dev
```

默认会在 http://localhost:3001 启动开发服务器。

### 构建生产版本

构建用于生产的应用：

```bash
npm run build
```

### 预览生产构建

预览生产构建结果：

```bash
npm run preview
```

## 主要功能

✅ SuperMap iClient3D for WebGPU 原生三维地图加载
✅ WebGPU 渲染引擎启用与配置
✅ 高德瓦片地图加载
✅ 相机飞行路径设置
✅ 地图控件配置
✅ WebGPU 状态检测

## 开发说明

### WebGPU 启用配置

在 `src/components/supermap/index.vue` 中已配置 WebGPU 渲染引擎：

```typescript
contextOptions: {
  contextType: SuperMap3D.ContextType.WebGPU,
  requestWebgl: false, // 禁用 WebGL
  requestWebgpu: true  // 启用 WebGPU
}
```

### 地图控件配置

在初始化 Viewer 时可配置各种控件：

```typescript
map = new SuperMap3D.Viewer(containerRef.value, {
  geocoder: false, // 地址搜索控件
  homeButton: false, // 返回首页控件
  sceneModePicker: false, // 场景模式选择器
  navigationHelpButton: false, // 导航帮助按钮
  infoBox: false, // 信息框
  fullscreenButton: false, // 全屏按钮
  vrButton: false // VR 按钮
});
```

## 参考资源

**剩余功能组件参考**：

更多高级功能组件（如无人机飞行、轨迹绘制、动态配置等）请参考：

[https://github.com/huweili0726/cesium-map](https://github.com/huweili0726/cesium-map)

直接复制相关组件代码到本项目中即可使用，完全兼容 SuperMap iClient3D for WebGPU。