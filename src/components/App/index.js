import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import actions from "store/actions";
import { darkTheme, lightTheme } from "styles/theme.js";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import TopStories from "../TopStories";
import { Wrapper } from "./styles";
function App() {
  const theme = useSelector((state) => state.app.theme);
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.postActions.fetchPostIds()); //Just checking if it works!
    theme === "lightTheme"
      ? (document.body.style = `background-color: ${lightTheme.background};`)
      : (document.body.style = `background-color: ${darkTheme.background};`);
  }, [theme]);
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
        {posts && posts[0] ? posts[0].by : ""}
        <TopStories />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Text = styled.h1`
  color: ${({ theme }) => theme.text};
`;
