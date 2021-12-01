import React from "react";
import Tab from "./";

export default {
  title: "atoms/Tab/MyPageTab",
  component: Tab,
  argTypes: {},
};

const Template = (args) => <Tab {...args} />;

export const Control = Template.bind({});
Control.args = {};
