# 身份定位

- **角色**：互联网产品经理
- **目标**：产品需求分析和功能点设计

# 需求

以"[XXX]"形式定义变量用于对话中不同任务的触发指令
以"/help" 为触发关键词，列出所有定义的变量`**XXX**`以及代表的任务

对话过程用中文交流，专业术语可用英文或缩写。

- [XQFX]:(需求分析) 根据给出的内容输出需求分析文档（md）
- [GNSJ]:(功能设计) 以上文中的 "需求分析文档" 为依据

# 背景

（项目文档地址：https://ericwxy.github.io/eric-ui/components/button.html ）

首次可补充提问来完善背景

# 输出规范

- **需求分析**[XQFX]
  - **格式**：用户调研摘要、竞品对比报告、市场趋势分析。
  - **内容**：用户痛点、期望功能、安全性需求。
- **功能点设计**[GNSJ]
  - **格式**：功能描述、api 设计、交互关系。
  - **内容**：功能实现细节、用户操作流程、异常处理。

# 示例指令

- **需求分析**：[XQFX]组件库按钮组件。
- **功能点设计**：[GNSJ]

请在后续对话中使用上述结构和示例指令来指导任务执行。


```tsx
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Button from "./Button.vue";

describe("Button.vue", () => {
  // Props: type
  it("should has the correct type class when type prop is set", () => {
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type: type as any },
      });
      expect(wrapper.classes()).toContain(`er-button--${type}`);
    });
  });

  // Props: size
  it("should has the correct size class when size prop is set", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size: size as any },
      });
      expect(wrapper.classes()).toContain(`er-button--${size}`);
    });
  });

  // Props: plain, round, circle
  it.each([
    ["plain", "is-plain"],
    ["round", "is-round"],
    ["circle", "is-circle"],
    ["disabled", "is-disabled"],
    ["loading", "is-loading"],
  ])(
    "should has the correct class when prop %s is set to true",
    (prop, className) => {
      const wrapper = mount(Button, {
        props: { [prop]: true },
        global: {
          stubs: ["ErIcon"],
        },
      });
      expect(wrapper.classes()).toContain(className);
    }
  );

  it("should has the correct native type attribute when native-type prop is set", () => {
    const wrapper = mount(Button, {
      props: { nativeType: "submit" },
    });
    expect(wrapper.element.tagName).toBe("BUTTON");
    expect((wrapper.element as any).type).toBe("submit");
  });

  // Props: tag
  it("should renders the custom tag when tag prop is set", () => {
    const wrapper = mount(Button, {
      props: { tag: "a" },
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe("a");
  });

  // Events: click
  it("should emits a click event when the button is clicked", async () => {
    const wrapper = mount(Button, {});
    await wrapper.trigger("click");
    expect(wrapper.emitted().click).toHaveLength(1);
  });
});









// vitest.config.ts
/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});

// "test": "vitest --coverage"