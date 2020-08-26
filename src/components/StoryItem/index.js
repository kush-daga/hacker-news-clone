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
function StoryItem() {
  return (
    <Item>
      <LinkStory>
        <Title>
          Sample Title <LinkTitle>(google.com)</LinkTitle>
        </Title>
        <Time>1 hour ago</Time>
      </LinkStory>
      <Desc>
        <div>
          100 points by{" "}
          <CommentLink
            href="#"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            User 1{" "}
          </CommentLink>
        </div>
        <CommentLink
          href="#"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          100 comments
        </CommentLink>
      </Desc>
    </Item>
  );
}

export default StoryItem;
