import React from "react";
import { Wrapper } from "./styles";
import StoryItem from "components/StoryItem";

function TopStories({ posts, loading }) {
  return (
    <Wrapper>
      {posts.map((post) => {
        return <StoryItem key={post.id} post={post} />;
      })}
    </Wrapper>
  );
}

export default TopStories;
