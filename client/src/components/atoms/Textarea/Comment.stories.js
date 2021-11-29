import React from "react";
import Comment from "./Comment";

export default {
  title: "Atoms/Textarea/Comment",
  component: Comment,
  argTypes: {
    size: {
      description: "인풋 크기",
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Comment {...args} />;

export const Control = Template.bind({});
Control.args = {
  size: "lg",
};
