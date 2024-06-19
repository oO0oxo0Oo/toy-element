import { createApp } from 'vue'
import App from './App.vue'
// 导入 'toy-element' 库，其中包含一组预先封装好的 Vue 组件
import ToyElement from 'toy-element'
import "toy-element/dist/index.css"

createApp(App).use(ToyElement).mount('#app')
