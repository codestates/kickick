import React from "react";
import PostComment from "./PostComment";

export default {
  title: "Molecules/Comment/PostComment",
  component: PostComment,
  argTypes: {
    size: {
      description: "인풋 크기",
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <PostComment {...args} />;

export const Control = Template.bind({});
Control.args = {
  size: "lg",
};
