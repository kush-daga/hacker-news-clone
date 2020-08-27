import React from "react";
import { Wrapper } from "./styles";
import StoryItem from "components/StoryItem";
import hnApi from "services/hnApi.js";
function TopStories() {
  hnApi.getTopStoriesByIds().then((data) => {
    hnApi.getStoriesOnAPage(data, 1).then((d) => console.log(d));
  });
  return (
    <Wrapper>
      <StoryItem />
      <StoryItem />
      <StoryItem />
    </Wrapper>
  );
}

export default TopStories;
