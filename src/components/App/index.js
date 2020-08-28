import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import actions from "store/actions";
import { darkTheme, lightTheme } from "styles/theme.js";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import TopStories from "../TopStories";
import { Wrapper } from "./styles";
import Loader from "../Loader";
function App() {
  const theme = useSelector((state) => state.app.theme);

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    theme === "lightTheme"
      ? (document.body.style = `background-color: ${lightTheme.background};`)
      : (document.body.style = `background-color: ${darkTheme.background};`);
  }, [theme]);
  //Get Posts for first page
  useEffect(() => {
    dispatch(actions.postActions.fetchPostIds());
  }, [dispatch]);

  const fetchMorePosts = () => {
    const { postIds, page, isFetching } = posts;
    console.log(posts.posts);
    if (!isFetching)
      dispatch(actions.postActions.fetchPosts({ postIds, page }));
  };
  return (
    <ThemeProvider theme={theme === "lightTheme" ? lightTheme : darkTheme}>
      <nav>
        <button
          onClick={() => {
            dispatch(actions.appActions.setTheme());
          }}
        >
          Change theme
        </button>
        <Text>Hello WOrlld</Text>
      </nav>
      <Wrapper>
        <InfiniteScroll
          dataLength={posts.posts.length}
          next={fetchMorePosts}
          hasMore={posts.postIds.length > posts.posts.length}
          loader={<Loader />}
        >
          <TopStories posts={posts.posts} loading={posts.isFetching} />
        </InfiniteScroll>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Text = styled.h1`
  color: ${({ theme }) => theme.text};
`;
