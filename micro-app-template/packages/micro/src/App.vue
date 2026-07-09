<template>
  <div class="micro-root">
    <router-view />
  </div>
</template>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { height: 100%; }
/* #app 作为滚动容器：嵌入基座 iframe 时内容超出可见区可纵向滚动，避免下面按钮点不到 */
#app { height: 100%; overflow-y: auto; overflow-x: hidden; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #fff; }
</style>