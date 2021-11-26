import React from "react";
import Common from "./Common";

export default {
  title: "Atoms/Button/Common",
  component: Common,
  argTypes: {
    btnType: {
      description: "정렬기준",
      options: ["register", "write", "confirm"],
      control: { type: "radio" },
    },
    size: {
      description: "크기",
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Common {...args} />;

export const Control = Template.bind({});
Control.args = {
  btnType: "register",
  size: "lg",
};
