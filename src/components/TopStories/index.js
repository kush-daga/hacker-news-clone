import React from "react";
import { Wrapper } from "./styles";
import StoryItem from "components/StoryItem";
function TopStories() {
  return (
    <Wrapper>
      <StoryItem />
      <StoryItem />
      <StoryItem />
    </Wrapper>
  );
}

export default TopStories;
