import React from "react";

import Select from "./Options";

export default {
  title: "Atoms/Select/Options",
  component: Select,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Select {...args} />;

export const Control = Template.bind({});
Control.args = {
  size: "md",
};
