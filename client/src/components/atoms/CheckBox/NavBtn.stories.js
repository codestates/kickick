import React from "react";
import ModeChanger from "./ModeChanger";

export default {
  title: "Atoms/CheckBox/ModeChanger",
  component: ModeChanger,
  // argTypes: {
  //   size: {
  //     description: "인풋 크기",
  //     control: { type: "radio" },
  //   },
  // },
};

const Template = (args) => <ModeChanger {...args} />;

export const Control = Template.bind({});
Control.args = {
  label: "ModeChanger",
};
