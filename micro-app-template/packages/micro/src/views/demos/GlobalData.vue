<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║ 通道③ 全局共享数据（globalData）
  ║
  ║ 场景：跨所有子应用共享的数据，比如登录用户、当前区域、主题。
  ║       任何一方写入，所有订阅方实时同步。
  ║
  ║ 子应用代码：
  ║   import { useGlobalData, useGlobalDataKey, setGlobalData } from '@/bridge.js'
  ║
  ║   const { globalData } = useGlobalData()           // 整体响应式 ref
  ║   const code = useGlobalDataKey('regionaQuery.regionCode')  // 单字段订阅
  ║   setGlobalData({ activeTheme: '蓝色版' })         // 合并式更新（不覆盖其它字段）
  ║
  ║ 基座代码（在基座 main.js / setup() 里）：
  ║   microApp.setGlobalData({ ...初始全局变量 })
  ║   // 后续可在任意位置 setGlobalData() 修改
  ║
  ║ 注意事项：
  ║   • 与通道① baseData 的区别：globalData 是「跨应用共享」，
  ║     baseData 是「基座定向给单个子应用」
  ║   • setGlobalData 是合并不是覆盖，只传变化字段即可
  ║   • 嵌套对象修改要传完整对象：setGlobalData({ regionaQuery: { ...current, regionCode: 'xxx' } })
  ╚══════════════════════════════════════════════════════════════╝
-->
<template>
  <div class="page">
    <header class="page-head">
      <router-link to="/home" class="back">← 返回总览</router-link>
      <h2>🌐 通道③ 全局共享数据 (globalData)</h2>
    </header>

    <!-- 当前全局变量值 -->
    <el-card class="card">
      <template #header><strong>当前 globalData 中的关键字段</strong></template>
      <div class="grid">
        <div class="cell"><span class="key">regionaQuery.regionName</span><strong>{{ gRegionName ?? '—' }}</strong></div>
        <div class="cell"><span class="key">regionaQuery.regionCode</span><strong>{{ gRegionCode ?? '—' }}</strong></div>
        <div class="cell"><span class="key">activeTheme</span><strong>{{ gActiveTheme ?? '—' }}</strong></div>
        <div class="cell"><span class="key">socketRoom</span><strong>{{ gSocketRoom ?? '—' }}</strong></div>
        <div class="cell"><span class="key">serviceBaseUrl</span><strong class="small">{{ gServiceBaseUrl ?? '—' }}</strong></div>
        <div class="cell"><span class="key">appId</span><strong>{{ gAppId ?? '—' }}</strong></div>
      </div>
    </el-card>

    <!-- 修改示例 -->
    <el-card class="card">
      <template #header><strong>修改 globalData（点了立刻看上面的变化）</strong></template>
      <div class="button-row">
        <el-button type="primary" plain @click="changeTheme">
          setGlobalData({ activeTheme: '蓝色版' })
        </el-button>
        <el-button type="primary" plain @click="changeRegion">
          setGlobalData({ regionaQuery.regionCode: '350800000000' })
        </el-button>
      </div>
      <p class="hint">
        💡 修改全局变量是<strong>合并式</strong>，不会覆盖未传入字段。
        嵌套对象（如 regionaQuery）要 spread 一下当前值再改：
        <code>{ regionaQuery: {{ '{' }} ...current, regionCode: 'xxx' {{ '}' }} }</code>
      </p>
    </el-card>

    <!-- 完整快照 -->
    <el-card class="card">
      <template #header><strong>完整 globalData 快照</strong></template>
      <pre class="json">{{ JSON.stringify(globalData, null, 2) }}</pre>
    </el-card>
  </div>
</template>

<script setup>
import { ElCard, ElButton } from 'element-plus';
import { useGlobalData, useGlobalDataKey, setGlobalData } from '@/bridge.js';

// 整体快照（响应式 ref）
const { globalData } = useGlobalData();

// 单字段精准订阅 —— 推荐这种用法，避免深层 watch 带来的性能开销
const gRegionName = useGlobalDataKey('regionaQuery.regionName');
const gRegionCode = useGlobalDataKey('regionaQuery.regionCode');
const gActiveTheme = useGlobalDataKey('activeTheme');
const gSocketRoom = useGlobalDataKey('socketRoom');
const gServiceBaseUrl = useGlobalDataKey('serviceBaseUrl');
const gAppId = useGlobalDataKey('appId');

// 修改单字段
function changeTheme() {
  setGlobalData({ activeTheme: '蓝色版' });
}

// 修改嵌套字段：必须 spread 当前值，否则会丢字段
function changeRegion() {
  const current = globalData.value?.regionaQuery || {};
  setGlobalData({
    regionaQuery: {
      ...current,
      regionCode: '350800000000',
      regionName: '龙岩市',
    },
  });
}
</script>

<style scoped>
.page { padding: 16px 24px; max-width: 800px; margin: 0 auto; }
.page-head { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
.page-head h2 { font-size: 18px; color: #303133; }
.back { color: #409eff; text-decoration: none; font-size: 13px; }
.back:hover { text-decoration: underline; }
.card { margin-bottom: 12px; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.cell {
  display: flex; align-items: center; justify-content: space-between;
  padding: 6px 10px; background: #f5f7fa; border-radius: 4px; font-size: 13px;
}
.cell .key { color: #909399; font-family: ui-monospace, monospace; font-size: 11px; }
.cell strong { color: #303133; font-weight: 600; }
.cell strong.small { font-size: 11px; }
.button-row { display: flex; gap: 8px; flex-wrap: wrap; }
.hint { margin-top: 12px; padding: 8px 12px; background: #f5f7fa; border-radius: 4px; font-size: 12px; color: #909399; line-height: 1.7; }
code { background: rgba(64, 158, 255, 0.1); color: #409eff; padding: 1px 5px; border-radius: 3px; font-size: 11px; }
.json { background: #f5f7fa; padding: 12px; border-radius: 4px; font-size: 11px; color: #303133; max-height: 240px; overflow: auto; margin: 0; }
</style>
