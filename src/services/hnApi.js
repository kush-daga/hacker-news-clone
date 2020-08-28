import ApiService from "./api";

const PRETTY_PRINT = ".json?print=pretty";
const BASE_URL = "https://hacker-news.firebaseio.com/v0";

const apiClient = new ApiService({ baseURL: BASE_URL });

const hnApi = {}; //INITIALIZING API

const PAGE_LIMIT = 10; // to get only 10 stories at a time

//UTILS
const getPageIndexes = (limit, page = 0) => ({
  begin: page * limit,
  end: (page + 1) * limit,
});
const getIdInPage = ({ begin, end, items }) => items.slice(begin, end); //Get begin and end index of a page
console.log(apiClient);
//HN API FUNCTIONS
hnApi.getTopPostsByIds = () => apiClient.get(`/topstories${PRETTY_PRINT}`); //Get the top stories
hnApi.getSinglePost = (id) => apiClient.get(`/item/${id}${PRETTY_PRINT}`); //Get data of a single story
hnApi.getPostsOnAPage = (ids, page) => {
  const { begin, end } = getPageIndexes(PAGE_LIMIT, page);
  const idsToFetch = getIdInPage({ begin, end, items: ids });
  const unresolvedPromises = idsToFetch.map((id) => hnApi.getSinglePost(id));
  return Promise.all(unresolvedPromises);
}; //Get posts of one page

export default hnApi;
