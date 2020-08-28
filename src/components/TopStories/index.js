import React from "react";
import { Wrapper } from "./styles";
import StoryItem from "components/StoryItem";
import hnApi from "services/hnApi.js";
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
