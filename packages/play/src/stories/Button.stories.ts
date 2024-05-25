// 导入类型定义
import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { fn, within, userEvent, expect } from '@storybook/test';

// 导入组件
import { ErButton, ErButtonGroup } from 'toy-element'

/**
 * 定义Story类型，它是StoryObj和ArgTypes的结合体。
 * 用于增强和规范化故事书中的故事对象。
 */
type Story = StoryObj<typeof ErButton> & { argTypes?: ArgTypes }

const meta: Meta<typeof ErButton> = {
  title: "Example/Button",
  component: ErButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
<div style="margin: 5px;">
  ${val}
</div>
`;

export const Defualt: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    type: "primary",
    content: "Button",
  },
  render: (args) => ({
    components: { ErButton },
    setup() {
      return { args };
    },
    template: container(
      `<er-button v-bind="args">{{args.content}}</er-button>`
    ),
  }),

  /**
  * 异步播放函数，用于在给定的canvas元素上执行一系列操作。
  * @param {Object} param0 - 包含执行操作所需参数的对象。
  * @param {HTMLCanvasElement} param0.canvasElement - 用于操作的canvas元素。
  * @param {Object} param0.args - 包含额外参数的对象，比如onClick函数。
  * @param {Function} param0.step - 用于执行操作的步骤函数。
  * @returns {Promise<void>} - 不返回任何内容。
  */
  play: async ({ canvasElement, args, step }) => {
    // 获取canvas元素的上下文
    const canvas = within(canvasElement);
    // 执行点击按钮的操作
    await step("click button", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });

    // 验证onClick函数是否被调用
    expect(args.onClick).toHaveBeenCalled();
  },
}

export const Circle: Story = {
  args: {
    icon: "search",
  },
  render: (args) => ({
    components: { ErButton },
    setup() {
      return { args };
    },
    template: container(`
      <er-button circle v-bind="args"/>
    `),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("click button", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });

    expect(args.onClick).toHaveBeenCalled();
  },
};

Circle.parameters = {};

export const Group: Story & { args: { content1: string; content2: string } } = {
  argTypes: {
    groupType: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    groupSize: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    groupDisabled: {
      control: "boolean",
    },
    content1: {
      control: { type: "text" },
      defaultValue: "Button1",
    },
    content2: {
      control: { type: "text" },
      defaultValue: "Button2",
    },
  },
  args: {
    round: true,
    content1: "Button1",
    content2: "Button2",
  },
  render: (args) => ({
    components: { ErButton, ErButtonGroup },
    setup() {
      return { args };
    },
    template: container(`
       <er-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <er-button v-bind="args">{{args.content1}}</er-button>
         <er-button v-bind="args">{{args.content2}}</er-button>
       </er-button-group>
    `),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("click btn1", async () => {
      await userEvent.click(canvas.getByText("Button1"));
    });
    await step("click btn2", async () => {
      await userEvent.click(canvas.getByText("Button2"));
    });
    expect(args.onClick).toHaveBeenCalled();
  },
};

export default meta;