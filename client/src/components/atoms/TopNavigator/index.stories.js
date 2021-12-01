import React from "react";
import TopNavigator from "./";

export default {
  title: "atoms/TopNavigator",
  component: TopNavigator,
  argTypes: {
    menu: {
      options: ["소개", "공지", "게시판", "킥 배우기"],
      control: { type: "radio" },
    },
    category: {
      options: ["학습", "여가", "생활", "예술", "경제", "여행"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <TopNavigator {...args} />;

export const Control = Template.bind({});
Control.args = {
  menu: "게시판",
  category: "학습",
};
