<template>
  <micro-app
    class="dialog-micro-app-content"
    :name="microAppInstanceName"
    :url="dialog.sourceMicroApp.url"
    :default-page="defaultPage"
    :data="microAppData"
    iframe
    @datachange="handleChildData"
  />
</template>

<script setup>
import { computed, onBeforeUnmount, watch } from 'vue';
import { unmountApp } from '@micro-zoe/micro-app';
import { destroyChildBridge, useChildBridge } from '../bridge.js';

const props = defineProps({
  dialog: {
    type: Object,
    required: true,
  },
});

const sanitizeInstanceName = (value) => String(value || '')
  .replace(/[^a-zA-Z0-9_-]/g, '-')
  .replace(/-+/g, '-')
  .replace(/^-|-$/g, '');

const microAppInstanceName = computed(() => sanitizeInstanceName([
  'dialog',
  props.dialog.sourceMicroApp?.instanceName,
  props.dialog.microAppInstanceToken,
].join('-')));

const defaultPage = computed(() => `/#${props.dialog.content.route}`);

const microAppData = computed(() => ({
  dialogContext: {
    dialogId: props.dialog.id,
    businessId: props.dialog.id,
    route: props.dialog.content.route,
  },
  params: props.dialog.params || {},
}));

const dialogBridge = useChildBridge(microAppInstanceName.value, {
  ownerMicroAppName: props.dialog.sourceMicroApp?.instanceName || '',
  dialogId: props.dialog.id,
});
const { handleChildData } = dialogBridge;

watch(
  microAppData,
  (nextData) => dialogBridge.setData(nextData),
  { deep: true, immediate: true },
);

onBeforeUnmount(() => {
  void unmountApp(microAppInstanceName.value, {
    destroy: true,
    clearData: true,
  });
  destroyChildBridge(microAppInstanceName.value);
});
</script>

<style scoped>
.dialog-micro-app-content {
  display: block;
  width: 100%;
  height: min(62vh, 620px);
  min-height: 360px;
  overflow: hidden;
}

.dialog-micro-app-content :deep(iframe) {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
