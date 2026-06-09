<template>
  <div class="page">
    <div class="page-header">
      <h1>📘 微应用 - 关于</h1>
      <nav class="nav">
        <router-link to="/home" class="nav-item">首页</router-link>
        <router-link to="/about" class="nav-item">关于</router-link>
      </nav>
    </div>

    <el-card>
      <template #header>
        <strong>关于这个模板</strong>
      </template>
      <p>
        这是一个微前端开发调试模板，用于演示微应用的开发流程。
      </p>
      <ul style="margin-top: 12px; padding-left: 20px; color: #606266; font-size: 14px;">
        <li>当前页面用于验证微应用内部 hash 路由切换</li>
        <li>路由切换时，基座的 URL 不会变化（micro-app iframe 沙箱隔离）</li>
        <li>单独访问 <code>http://localhost:5175/#/about</code> 也能正常打开</li>
      </ul>

      <div style="margin-top: 24px;">
        <el-button @click="$router.push('/home')">返回首页</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ElCard, ElButton } from 'element-plus';
</script>

<style scoped>
.page {
  padding: 16px 24px;
  max-width: 960px;
  margin: 0 auto;
}
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.page-header h1 {
  font-size: 20px;
  color: #303133;
}
.nav {
  display: flex;
  gap: 4px;
}
.nav-item {
  padding: 4px 12px;
  color: #606266;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
}
.nav-item.router-link-active {
  color: #fff;
  background: #409eff;
}
code {
  background: #f0f2f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  color: #e6a23c;
}
</style>