import { makeInstaller } from "./makeInstaller";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import printLogo from "./printLogo";

// 导入组件集合，假定这个模块导出了需要安装的所有组件
import components from "./components";

import '@toy-element/theme/index.css'

printLogo();

library.add(fas);
// 使用 makeInstaller 函数处理导入的组件数组，创建一个安装函数
const installer = makeInstaller(components);

// 导出 "@toy-element/components" 中的所有命名导出，以便外部可以直接访问这些组件
export * from "../components";
export * from "@toy-element/locale"

// 将创建好的安装函数作为默认导出，允许外部通过这个函数批量安装组件
export default installer;