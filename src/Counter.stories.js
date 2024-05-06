import React from "react";
import Counter from "./Counter";

// Storybookのデフォルトのエクスポート、このコンポーネントのメタデータを定義
export default {
  title: "Example/Counter", // StorybookのUIに表示されるパス
  component: Counter // どのコンポーネントのStoryかを指定
};

// テンプレート関数を作成し、コンポーネントのインスタンスを返す
const Template = (args) => <Counter {...args} />;

// デフォルトのStoryを作成
export const Default = Template.bind({});
// 特定のpropsを持つStoryを作成することもできます
// export const SomeState = Template.bind({});
// SomeState.args = { /* 初期props */ };
