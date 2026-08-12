import { build } from "esbuild";

const shared = {
  entryPoints: ["index.ts"],
  bundle: true,
  sourcemap: true,
  target: ["es2019"],
};

await build({
  ...shared,
  format: "esm",
  outfile: "dist/index.js",
  external: ["vue"],
});

await build({
  ...shared,
  // 浏览器 UMD 产物不出 sourcemap：低代码平台 resources/ 只部署 .js，
  // 出了 map 却不部署会留下 sourceMappingURL 404
  sourcemap: false,
  format: "iife",
  globalName: "TopicLayerRuntime",
  outfile:
    process.env.TOPIC_LAYER_BROWSER_OUTFILE ||
    "dist/topic-layer-runtime.global.js",
  plugins: [
    {
      name: "browser-vue-global",
      setup(buildContext) {
        buildContext.onResolve({ filter: /^vue$/ }, () => ({
          path: "vue",
          namespace: "browser-vue-global",
        }));
        buildContext.onLoad(
          { filter: /.*/, namespace: "browser-vue-global" },
          () => ({
            contents: `
              const { computed, reactive } = window.Vue;
              export { computed, reactive };
            `,
            loader: "js",
          }),
        );
      },
    },
  ],
});
