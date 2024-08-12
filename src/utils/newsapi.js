import { APIInfo } from "./constants";
import { getCurrentDate, getFromDate, toTitleCase } from "./utilityfunctions";
import { checkResponse } from "./api";

export const getNews = (query) => {
  const toDate = getCurrentDate();
  const fromDate = getFromDate();
  const newsAPI = fetch(
    `${APIInfo.APIBaseURL}?q=${query.search}&from=${fromDate}&to=${toDate}&pageSize=10&sortBy=publishedAt&apiKey=${APIInfo.APIKey}`
  )
    .then((res) => {
      return checkResponse(res);
    })
    .then((data) => {
      return filterNewsData(data, { query });
    });
  return newsAPI;
};

export const filterNewsData = (data, { query }) => {
  const keywordTag = toTitleCase(query.search);
  let result = data.articles.map(
    ({ source, title, publishedAt, description, url, urlToImage }) => ({
      source,
      title,
      publishedAt,
      description,
      url,
      urlToImage,
      keywordTag,
    })
  );
  return result;
};
