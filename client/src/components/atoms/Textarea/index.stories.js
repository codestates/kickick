import React from "react";
import Textarea from "./";

export default {
  title: "atoms/Textarea",
  component: Textarea,
  argTypes: {
    size: {
      description: "인풋 크기",
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Textarea {...args} />;

export const Control = Template.bind({});
Control.args = {
  size: "lg",
};
