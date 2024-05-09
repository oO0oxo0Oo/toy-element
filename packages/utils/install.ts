import type { App, Plugin } from "vue";
//这行代码使用了 TypeScript 的 import 语法，从 Vue 模块中导入了 App 和 Plugin 类型。这些类型通常用于在 Vue 应用中注册组件和插件。
import { each } from "lodash-es";
//这行代码从 lodash-es 模块中导入了 each 函数，用于在数组或对象的每个元素上执行给定的操作。
type SFCWithInstall<T> = T & Plugin;
//这行代码定义了一个类型别名 SFCWithInstall<T>，它接受一个泛型参数 T，并将其与 Plugin 类型进行交叉。这个类型别名用于表示一个带有 install 方法的组件。

//这是一个导出的函数 makeInstaller，它接受一个 Plugin 类型的数组作为参数。这个函数的作用是生成一个 installer 函数，用于在 Vue 应用中注册传入的组件数组。
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

//这是一个导出的箭头函数 withInstall，它接受一个泛型参数 T，并且接受一个组件作为参数。
export const withInstall = <T>(component: T): SFCWithInstall<T> => {
  // 添加 install 方法到组件，该方法接受一个 Vue 应用实例
  (component as SFCWithInstall<T>).install = (app: App) => {
    // 获取组件的名称，如果未定义则默认为 "UnnamedComponent"
    const name = (component as any).name || "UnnamedComponent";

    // 将组件注册到 Vue 应用中，使用组件的名称作为标识
    app.component(name, component as SFCWithInstall<T>);
  };

  // 返回增强后的组件，带有 install 方法
  return component as SFCWithInstall<T>;
};