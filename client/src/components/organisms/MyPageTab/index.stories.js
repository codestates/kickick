import React from "react";

import MyPageTab from "./";

export default {
  title: "Organisms/MyPageTab",
  component: MyPageTab,
};

const Template = (args) => <MyPageTab {...args} />;

export const Control = Template.bind({});
