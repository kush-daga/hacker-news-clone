import {
  FETCH_POST_IDS_REQUEST,
  FETCH_POST_IDS_SUCCESS,
  FETCH_POST_IDS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./types";
import hnApi from "services/hnApi";

// export const requestPostIds = () => {
//     return {
//         type:"FETCH_POST_IDS_REQUEST",
//     }
// }
// export const recievePostIds = (payload) => {
//     return {
//         type: FETCH_POST_IDS_SUCCESS,
//         payload: payload
//     }
// }
const action = (type, payload) => ({ type, payload });
export const fetchPostIds = (payload = {}) => {
  return (dispatch) => {
    dispatch(action(FETCH_POST_IDS_REQUEST, payload));
    return hnApi
      .getTopPostsByIds()
      .then((postIds) => {
        dispatch(action(FETCH_POST_IDS_SUCCESS, { postIds }));
        dispatch(fetchPosts({ postIds, page: 0 })); //TO get the first page posts together
        return postIds;
      })
      .catch((err) => dispatch(action(FETCH_POST_IDS_FAILURE, err)));
  };
};

export const fetchPosts = (payload = {}) => {
  console.log("HEREE");
  return (dispatch) => {
    dispatch(action(FETCH_POSTS_REQUEST, payload));
    const { postIds, page } = payload;
    return hnApi
      .getPostsOnAPage(postIds, page)
      .then((posts) => dispatch(action(FETCH_POSTS_SUCCESS, { posts })))
      .catch((err) => dispatch(action(FETCH_POSTS_FAILURE, err)));
  };
};

const postActions = {
  fetchPostIds,
  fetchPosts,
};
export default postActions;
