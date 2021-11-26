import React from "react";
import Profile from "./Profile";

export default {
  title: "Img/Profile",
  component: Profile,
  argTypes: {
    profileType: {
      description: "프로필 크기 기준",
      options: ["comment", "post", "mypage"],
      control: { type: "radio" },
    },
    size: {
      description: "화면 크기",
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Profile {...args} />;

export const Control = Template.bind({});
Control.args = {
  profileType: "comment",
  size: "lg",
};
