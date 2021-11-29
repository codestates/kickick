import React from "react";
import Nav from "./Nav"

export default {
  title: "Organisms/Nav/Nav",
  component: Nav,
  // argTypes: {
  //   size: {
  //     description: "인풋 크기",
  //     control: { type: "radio" },
  //   },
  // },
};

const Template = (args) => <Nav {...args} />;

export const Control = Template.bind({});
Control.args = {
  label: "Nav",
};
