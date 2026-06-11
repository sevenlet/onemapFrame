<template>
  <div class="region-picker">
    <div class="hint">
      请选择一个区域（演示：弹窗里嵌业务交互组件，确认后把选中值回传给子应用）
    </div>
    <el-radio-group v-model="selected">
      <el-radio v-for="r in regions" :key="r.code" :value="r.code">
        {{ r.name }}（{{ r.code }}）
      </el-radio>
    </el-radio-group>

    <div class="footer-bar">
      <el-button @click="emit('close')">取消</el-button>
      <el-button type="primary" :disabled="!selected" @click="confirm">
        确定选择
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElButton, ElRadioGroup, ElRadio } from 'element-plus';

const props = defineProps({
  // 可选区域列表，由子应用 callBase 时传入
  regions: { type: Array, default: () => [] },
  // 默认选中
  defaultCode: { type: String, default: '' },
});

const emit = defineEmits(['close']);
const selected = ref(props.defaultCode);

function confirm() {
  const region = props.regions.find((r) => r.code === selected.value);
  emit('close', region);  // 把选中的区域对象回传
}
</script>

<style scoped>
.region-picker { padding: 0 8px; }
.hint {
  background: #f0f9ff; padding: 12px; border-radius: 4px;
  color: #1890ff; font-size: 13px; margin-bottom: 16px;
}
.el-radio-group { display: flex; flex-direction: column; gap: 12px; }
.footer-bar { display: flex; justify-content: flex-end; gap: 8px; margin-top: 24px; }
</style>
