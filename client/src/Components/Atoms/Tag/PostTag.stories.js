import React from "react";
import PostTag from "./PostTag";

export default {
  title: "Atoms/Tag/PostTag",
  component: PostTag,
  argTypes: {
    tagType: {
      description: "태그",
      options: ["hashtag", "title", "author"],
      control: { type: "radio" },
    },
    size: {
      description: "글자 크기",
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <PostTag {...args} />;

export const Control = Template.bind({});
Control.args = {
  tagType: "hashtag",
  size: "lg",
};
