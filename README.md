# OxoUI

🚀 基于 Vue 3 + TypeScript 的现代化组件库

[![NPM Version](https://img.shields.io/npm/v/oxo-ui.svg)](https://www.npmjs.com/package/oxo-ui)
[![License](https://img.shields.io/npm/l/oxo-ui.svg)](https://github.com/o0oxo0o/oxo-ui/blob/main/LICENSE)

## ✨ 特性

- 🔥 **Vue 3** - 基于最新的 Vue 3 Composition API
- 💪 **TypeScript** - 完整的类型定义支持
- 🎨 **现代设计** - 精心设计的 UI 组件
- 📦 **按需引入** - 支持 Tree-shaking，减少打包体积
- 🌍 **国际化** - 内置多语言支持
- 🎯 **双模式** - 支持 ESM 和 UMD 两种构建格式

## 📖 文档

**[查看完整文档 →](https://oO0oxo0Oo.github.io/oxo-ui/)**

## 🔧 安装

```bash
# npm
npm install oxo-ui

# pnpm
pnpm add oxo-ui

# yarn
yarn add oxo-ui
```

## 🚀 快速开始

### 全局引入

```typescript
import { createApp } from 'vue'
import OxoUI from 'oxo-ui'
import 'oxo-ui/dist/index.css'

const app = createApp(App)
app.use(OxoUI)
app.mount('#app')
```

### 按需引入

```typescript
import { createApp } from 'vue'
import { Button, Input } from 'oxo-ui'

const app = createApp(App)
app.use(Button)
app.use(Input)
app.mount('#app')
```

### 在模板中使用

```vue
<template>
  <o-button type="primary">主要按钮</o-button>
  <o-input v-model="value" placeholder="请输入内容" />
</template>
```

## 📚 组件

- Button 按钮
- Input 输入框
- Alert 警告提示
- Message 消息提示
- Loading 加载
- Switch 开关
- Select 选择器
- Form 表单
- Tooltip 文字提示
- Dropdown 下拉菜单
- ...更多组件

## 🛠️ 开发

```bash
# 安装依赖
pnpm install

# 启动开发环境
pnpm dev

# 构建组件库
pnpm build

# 运行测试
pnpm test
```


