import React from "react";
import PostTag from "./PostTag";

export default {
  title: "atoms/Tag/PostTag",
  component: PostTag,
  argTypes: {
    type: {
      description: "태그",
      options: ["hashtag", "title", "author"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <PostTag {...args} />;

export const Control = Template.bind({});
Control.args = {
  type: "hashtag",
};
