//import { BASE_URL } from "../utils/constants";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export function addSavedArticle(newsItem) {
  return new Promise((resolve) => {
    resolve({
      id: "65f7371e7bce9e7d331b11a0",
      title: newsItem.title,
      description: newsItem.description,
      publishedAt: newsItem.publishedAt,
      source: { name: newsItem.source.name},
      url: newsItem.url,
      urlToImage: newsItem.urlToImage,
      keywordTag: newsItem.keywordTag,
    });
  });
}

export const removeSavedArticle = () => {
  return new Promise((resolve) => {
    const response = {
      ok: true,
      status: 200,
      statusText: "OK",
    };
    resolve(response);
  });
};

export { checkResponse }
