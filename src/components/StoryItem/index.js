import React from "react";
import {
  Item,
  Time,
  LinkStory,
  Title,
  LinkTitle,
  Desc,
  CommentLink,
} from "./styles";
import getHost from "../../utils/getHost";
function StoryItem({ post }) {
  const host = getHost(post.url);
  return (
    <Item>
      {console.log(post)}
      <LinkStory href={post.url}>
        <Title>
          {post.title} <LinkTitle>({host})</LinkTitle>
        </Title>
        <Time>1 hour ago</Time>
      </LinkStory>
      <Desc>
        <div>
          {post.score} points by{" "}
          <CommentLink
            href={`https://news.ycombinator.com/user?id=${post.by}`}
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            {post.by}{" "}
          </CommentLink>
        </div>
        <CommentLink
          href="#"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          {post.kids ? post.kids.length : 0} comments
        </CommentLink>
      </Desc>
    </Item>
  );
}

export default StoryItem;
