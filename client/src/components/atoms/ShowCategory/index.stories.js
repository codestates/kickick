import React from "react";

import ShowCategory from "./";

export default {
  title: "Atoms/ShowCategory",
  component: ShowCategory,
  argTypes: {
    type: {
      options: ["학습", "여가", "생활", "예술", "경제", "여행"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <ShowCategory {...args} />;

export const Control = Template.bind({});
Control.args = {
  type: "학습",
};
