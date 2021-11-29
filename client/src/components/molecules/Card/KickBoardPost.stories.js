import React from "react";
import KickBoardPost from "./KickBoardPost";

export default {
  title: "Molecules/Card/KickBoardPost",
  component: KickBoardPost,
  argTypes: {},
};

const Template = (args) => <KickBoardPost {...args} />;

export const Control = Template.bind({});
Control.args = {};
