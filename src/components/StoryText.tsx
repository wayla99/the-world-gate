import React from "react";

interface StoryTextProps {
  text: string;
}

const StoryText: React.FC<StoryTextProps> = ({ text }) => {
  return <p key={text}>{text}</p>;
};

export default StoryText;
