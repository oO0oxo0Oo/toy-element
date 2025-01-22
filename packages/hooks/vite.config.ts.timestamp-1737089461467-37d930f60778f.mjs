// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///D:/HuaweiMoveData/Users/86186/Desktop/code/toy-element/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.11_sass@1.83.0_terser@5.31.0/node_modules/vite/dist/node/index.js";
import { last, split, first, includes } from "file:///D:/HuaweiMoveData/Users/86186/Desktop/code/toy-element/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import { hooksPlugin as hooks } from "file:///D:/HuaweiMoveData/Users/86186/Desktop/code/toy-element/libs/vite-plugins/.dist/index.js";
import dts from "file:///D:/HuaweiMoveData/Users/86186/Desktop/code/toy-element/node_modules/.pnpm/vite-plugin-dts@4.5.0_@types+node@20.12.11_rollup@4.17.2_typescript@5.7.2_vite@5.2.11_@types+_qqdt7uzmhtc52aq4hmmutxdveq/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\HuaweiMoveData\\Users\\86186\\Desktop\\code\\toy-element\\packages\\hooks";
var vite_config_default = defineConfig({
  plugins: [
    dts({
      include: ["./**/*.ts"],
      exclude: ["./vite.config.ts"]
    }),
    hooks({
      rmFiles: ["./dist"]
    })
  ],
  build: {
    minify: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "hooks",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["vue", "lodash-es"],
      output: {
        manualChunks(id) {
          if (includes(id, "/packages/hooks/use"))
            return first(split(last(split(id, "/")), "."));
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxIdWF3ZWlNb3ZlRGF0YVxcXFxVc2Vyc1xcXFw4NjE4NlxcXFxEZXNrdG9wXFxcXGNvZGVcXFxcdG95LWVsZW1lbnRcXFxccGFja2FnZXNcXFxcaG9va3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEh1YXdlaU1vdmVEYXRhXFxcXFVzZXJzXFxcXDg2MTg2XFxcXERlc2t0b3BcXFxcY29kZVxcXFx0b3ktZWxlbWVudFxcXFxwYWNrYWdlc1xcXFxob29rc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovSHVhd2VpTW92ZURhdGEvVXNlcnMvODYxODYvRGVza3RvcC9jb2RlL3RveS1lbGVtZW50L3BhY2thZ2VzL2hvb2tzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB7IGxhc3QsIHNwbGl0LCBmaXJzdCwgaW5jbHVkZXMgfSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCB7IGhvb2tzUGx1Z2luIGFzIGhvb2tzIH0gZnJvbSBcIkB0b3ktZWxlbWVudC92aXRlLXBsdWdpbnNcIjtcclxuXHJcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICBkdHMoe1xyXG4gICAgICBpbmNsdWRlOiBbXCIuLyoqLyoudHNcIl0sXHJcbiAgICAgIGV4Y2x1ZGU6IFtcIi4vdml0ZS5jb25maWcudHNcIl0sXHJcbiAgICB9KSxcclxuICAgIGhvb2tzKHtcclxuICAgICAgcm1GaWxlczogW1wiLi9kaXN0XCJdLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgbWluaWZ5OiBmYWxzZSxcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9pbmRleC50c1wiKSxcclxuICAgICAgbmFtZTogXCJob29rc1wiLFxyXG4gICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxyXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiXSxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbXCJ2dWVcIiwgXCJsb2Rhc2gtZXNcIl0sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAgICAgaWYgKGluY2x1ZGVzKGlkLCBcIi9wYWNrYWdlcy9ob29rcy91c2VcIikpXHJcbiAgICAgICAgICAgIHJldHVybiBmaXJzdChzcGxpdChsYXN0KHNwbGl0KGlkLCBcIi9cIikpLCBcIi5cIikpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1aLFNBQVMsZUFBZTtBQUMzYSxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLE1BQU0sT0FBTyxPQUFPLGdCQUFnQjtBQUM3QyxTQUFTLGVBQWUsYUFBYTtBQUVyQyxPQUFPLFNBQVM7QUFMaEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsU0FBUyxDQUFDLFdBQVc7QUFBQSxNQUNyQixTQUFTLENBQUMsa0JBQWtCO0FBQUEsSUFDOUIsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLE1BQ0osU0FBUyxDQUFDLFFBQVE7QUFBQSxJQUNwQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUN0QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsT0FBTyxXQUFXO0FBQUEsTUFDN0IsUUFBUTtBQUFBLFFBQ04sYUFBYSxJQUFJO0FBQ2YsY0FBSSxTQUFTLElBQUkscUJBQXFCO0FBQ3BDLG1CQUFPLE1BQU0sTUFBTSxLQUFLLE1BQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFBQSxRQUNqRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
