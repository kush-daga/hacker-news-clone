import React from "react";
import { Wrapper, Title } from "./styles";
import StoryItem from "components/StoryItem";

function TopStories({ posts, loading }) {
  return (
    <Wrapper>
      <Title>Top News</Title>
      {posts.map((post) => {
        return <StoryItem key={post.id} post={post} />;
      })}
    </Wrapper>
  );
}

export default TopStories;
