import {
  FETCH_POST_IDS_REQUEST,
  FETCH_POST_IDS_SUCCESS,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./types";

const initialState = {
  postIds: [],
  posts: [],
  page: 0,
  isFetching: false,
  error: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_IDS_REQUEST:
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_POST_IDS_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload.posts],
        page: state.page + 1,
        isFetching: false,
      };

    //TODO Add error handling
    default:
      return state;
  }
};

export default postReducer;
