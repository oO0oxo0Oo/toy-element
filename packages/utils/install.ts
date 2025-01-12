import { each } from "lodash-es";
import type { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name;
    app.component(name, component as Plugin);
  };

  return component as SFCWithInstall<T>;
};

export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    app.config.globalProperties[name] = fn;
  };
  return fn as SFCWithInstall<T>;
};

export function makeInstaller(components: Plugin[]) {
  // 定义一个名为 `installer` 的安装函数，它接受一个 Vue 应用实例
  const installer = (app: App) => {
    // 遍历组件数组，将每个组件通过 app.use 方法安装到 Vue 应用中
    each(components, (c) => {
      app.use(c);
    });
  };

  // 返回一个包含 `installer` 方法的插件对象，类型为 `Plugin`
  return installer as Plugin;
}
