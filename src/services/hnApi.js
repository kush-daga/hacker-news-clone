import ApiService from "./api";

const PRETTY_PRINT = ".json?print=pretty";
const BASE_URL = "https://hacker-news.firebaseio.com/v0";

const apiClient = new ApiService({ baseUrl: BASE_URL });

const hnApi = {};

const PAGE_LIMIT = 10; // to get only 10 stories at a time

const getPageIndexes = (limit, page = 0) => ({
  begin: page * limit,
  end: (page + 1) * limit,
});

const getIdInPage = ({ begin, end, items }) => items.slice(begin, end);

hnApi.getTopStoriesByIds = () => apiClient.get(`/topstories${PRETTY_PRINT}`);
hnApi.getSingleStory = (id) => apiClient.get(`/item/${id}${PRETTY_PRINT}`);
hnApi.getStoriesOnAPage = (ids, page) => {
  const { begin, end } = getPageIndexes(PAGE_LIMIT, page);
  const idsToFetch = getIdInPage({ begin, end, items: ids });
  const unresolvedPromises = idsToFetch.map((id) => hnApi.getSingleStory(id));
  return Promise.all(unresolvedPromises);
};

export default hnApi;
