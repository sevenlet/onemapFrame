<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║ 微应用模板 — 总览首页
  ║
  ║ 这个模板演示了子应用与基座通信的 4 大能力：
  ║   1. 基座 → 子应用 定向数据（baseData）
  ║   2. 子应用 → 基座 消息/RPC（sendToBase / callBase）
  ║   3. 全局共享数据（globalData）
  ║   4. 调用基座地图（TMap）
  ║   + 弹窗穿透（让基座弹覆盖整个浏览器）
  ║
  ║ 每张卡片点进去都是独立的一页 demo，结构相同：
  ║   • 顶部一段四段式注释：场景 / 子应用代码 / 基座代码 / 注意事项
  ║   • 按钮 + 实时数据展示
  ║   • 复制单页文件即可在自己项目里用
  ║
  ║ 文件位置：
  ║   • bridge.js / ths-map.js  — 通信底层（拷过去即可，不要改）
  ║   • views/demos/*.vue       — 每个能力的示例代码
  ║   • main.js / router.js     — Vue + 路由的标准初始化
  ╚══════════════════════════════════════════════════════════════╝
-->
<template>
  <div class="page">
    <div class="page-header">
      <h1>🎯 微应用模板</h1>
      <nav class="nav">
        <router-link to="/home" class="nav-item">首页</router-link>
        <router-link to="/about" class="nav-item">关于</router-link>
      </nav>
    </div>

    <!-- 运行模式提示 -->
    <el-alert
      v-if="isEmbedded"
      title="当前在基座中运行（嵌入模式）"
      type="success"
      :closable="false"
      style="margin-bottom: 16px;"
    />
    <el-alert
      v-else
      title="当前独立运行（与基座解耦，方便单独调试）"
      type="warning"
      :closable="false"
      style="margin-bottom: 16px;"
    />

    <!-- 模板说明 -->
    <el-card class="intro">
      <template #header><strong>📖 这个模板是什么</strong></template>
      <p>
        这是接入基座的<strong>子应用脚手架</strong>，封装好了和基座通信的所有能力。
        你可以直接复制本目录，改成自己的业务子应用 —— 通信、地图调用、弹窗等通用部分都不用重写。
      </p>
      <p class="hint">
        💡 下面 5 张卡片是 5 个独立的演示页，建议先依次点开看一遍，
        理解通信的几种方式，再开始写业务。
      </p>
    </el-card>

    <!-- 5 张能力卡片 -->
    <div class="grid">
      <router-link
        v-for="demo in demos"
        :key="demo.path"
        :to="demo.path"
        class="demo-card"
      >
        <div class="demo-icon">{{ demo.icon }}</div>
        <div class="demo-body">
          <div class="demo-title">{{ demo.title }}</div>
          <div class="demo-desc">{{ demo.desc }}</div>
          <div class="demo-api"><code>{{ demo.api }}</code></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { ElCard, ElAlert } from 'element-plus';

const isEmbedded = computed(() => !!window.__MICRO_APP_ENVIRONMENT__);

// 5 张能力卡片的元数据 —— 加新 demo 时往这里加一行即可
const demos = [
  {
    path: '/demos/base-data',
    icon: '📥',
    title: '通道① 基座定向数据',
    desc: '基座把用户、主题、token 等下发给子应用，响应式同步',
    api: "useBaseBridge() → baseData.xxx",
  },
  {
    path: '/demos/send-rpc',
    icon: '📤',
    title: '通道② 向基座发消息 / RPC',
    desc: '通知基座（无返回值），或 await 拿基座方法的返回值',
    api: 'sendToBase / callBase',
  },
  {
    path: '/demos/global-data',
    icon: '🌐',
    title: '通道③ 全局共享数据',
    desc: '跨所有子应用同步的数据，任何一方写入大家都看到',
    api: 'useGlobalData / setGlobalData',
  },
  {
    path: '/demos/base-dialog',
    icon: '🎯',
    title: '弹窗穿透 iframe',
    desc: '让基座渲染弹窗覆盖整个浏览器，支持回传选中值',
    api: "callBase('showDialog', ...)",
  },
  {
    path: '/demos/tmap',
    icon: '🗺️',
    title: '调用基座地图 TMap',
    desc: '像调用本地 TMap 一样使用，自动转发到基座地图 iframe',
    api: 'TMap.goTo(...) / TMap.setZoom(...)',
  },
];
</script>

<style scoped>
.page { padding: 16px 24px; max-width: 960px; margin: 0 auto; }
.page-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.page-header h1 { font-size: 20px; color: #303133; }
.nav { display: flex; gap: 4px; }
.nav-item { padding: 4px 12px; color: #606266; text-decoration: none; border-radius: 4px; font-size: 14px; }
.nav-item.router-link-active { color: #fff; background: #409eff; }

.intro { margin-bottom: 16px; }
.intro p { font-size: 13px; color: #606266; line-height: 1.7; margin-bottom: 6px; }
.intro .hint { margin-top: 8px; padding: 8px 12px; background: #f5f7fa; border-radius: 4px; font-size: 12px; color: #909399; margin-bottom: 0; }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 12px;
}

.demo-card {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #fff;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.15s;
}
.demo-card:hover {
  border-color: #409eff;
  box-shadow: 0 4px 16px rgba(64, 158, 255, 0.15);
  transform: translateY(-1px);
}
.demo-icon {
  font-size: 28px;
  line-height: 1;
  flex-shrink: 0;
}
.demo-body { flex: 1; min-width: 0; }
.demo-title {
  font-size: 14px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 4px;
}
.demo-desc {
  font-size: 12px;
  color: #606266;
  line-height: 1.5;
  margin-bottom: 8px;
}
.demo-api {
  font-size: 11px;
}
.demo-api code {
  background: #f0f2f5;
  color: #409eff;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: ui-monospace, monospace;
}
</style>
