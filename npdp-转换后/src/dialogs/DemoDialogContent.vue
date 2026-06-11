<template>
  <div class="demo-dialog-content">
    <!-- 一个非常醒目的标识，让你看清弹窗到底渲染在哪 -->
    <div class="banner">
      <strong>🎯 我在 [基座 npdp] 的 t-l-c-root 容器里渲染！</strong>
      <p>
        这个弹窗<span class="emphasis">越过了 micro-app iframe 的边界</span>，
        覆盖到整个基座区域。
      </p>
    </div>

    <div class="info-row">
      <span class="label">收到的 props.message：</span>
      <strong>{{ message }}</strong>
    </div>
    <div class="info-row">
      <span class="label">收到的 props.count：</span>
      <strong>{{ count }}</strong>
    </div>
    <div class="info-row">
      <span class="label">当前所在 window：</span>
      <strong>{{ windowInfo }}</strong>
    </div>

    <div class="footer-bar">
      <el-button @click="emit('close')">取消</el-button>
      <el-button type="primary" @click="confirm">
        确认（回传数据给子应用）
      </el-button>
    </div>
  </div>
</template>

<script>
import { ElButton } from 'element-plus';

export default {
  name: 'DemoDialogContent',
  components: { ElButton },
  props: {
    message: { type: String, default: '（无）' },
    count: { type: Number, default: 0 },
  },
  emits: ['close'],
  setup(props, { emit }) {
    // 证据：打印当前 window，会发现是基座 window，不是子应用 iframe window
    const windowInfo = `${window.location.host}（基座 window）`;

    function confirm() {
      // 这个数据会变成子应用 await callBase('showDialog', ...) 的返回值
      emit('close', {
        confirmed: true,
        time: Date.now(),
        reply: `收到你的"${props.message}"`,
      });
    }

    return { windowInfo, confirm, emit };
  },
};
</script>

<style scoped>
.demo-dialog-content { padding: 16px; }
.banner {
  border: 3px dashed #f56c6c;
  background: #fef0f0;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 16px;
  color: #f56c6c;
}
.banner strong { font-size: 16px; display: block; margin-bottom: 8px; }
.banner p { font-size: 13px; color: #606266; line-height: 1.6; margin: 0; }
.banner .emphasis { color: #f56c6c; font-weight: 600; }
.info-row {
  display: flex; gap: 8px; padding: 8px 12px;
  background: #f5f7fa; border-radius: 4px; margin-bottom: 8px; font-size: 13px;
}
.info-row .label { color: #909399; min-width: 200px; }
.info-row strong { color: #303133; }
.footer-bar {
  display: flex; justify-content: flex-end; gap: 8px;
  margin-top: 16px; padding-top: 16px; border-top: 1px solid #ebeef5;
}
</style>
