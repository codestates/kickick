import React from "react";
import PostAlign from "./PostAlign";

export default {
  title: "PostAlign Button",
  component: PostAlign,
  argTypes: {
    alignType: {
      description: "정렬기준",
      options: ["recent", "hot"],
      control: { type: "radio" },
    },
    size: {
      description: "버튼 크기",
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <PostAlign {...args} />;

export const Control = Template.bind({});
Control.args = {
  alignType: "recent",
  size: "lg",
};
