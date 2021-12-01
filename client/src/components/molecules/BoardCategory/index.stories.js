import React from "react";

import BoardCategory from ".";

export default {
  title: "Molecules/BoardCategory",
  component: BoardCategory,
  argTypes: {
    label: {
      options: ["학습", "여가", "생활", "예술", "경제", "여행"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <BoardCategory {...args} />;

export const Control = Template.bind({});
Control.args = {
  label: "학습",
};
