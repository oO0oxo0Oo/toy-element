// 导入 makeInstaller 函数来自 "@toy-element/utils"，用于批量创建组件安装器
import { makeInstaller } from "@toy-element/utils";

// 导入组件集合，假定这个模块导出了需要安装的所有组件
import components from "./components";

import '@toy-element/theme/index.css'

// 使用 makeInstaller 函数处理导入的组件数组，创建一个安装函数
const installer = makeInstaller(components);

// 导出 "@toy-element/components" 中的所有命名导出，以便外部可以直接访问这些组件
export * from "@toy-element/components";

// 将创建好的安装函数作为默认导出，允许外部通过这个函数批量安装组件
export default installer;