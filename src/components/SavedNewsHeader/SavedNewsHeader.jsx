import "./SavedNewsHeader.css";
import { getKeywords, getKeywordInfo } from "../../utils/utilityfunctions";
import { useContext } from "react";
import { ArticleContext } from "../../contexts/ArticleContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNewsHeader() {
  const { currentUser } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(ArticleContext);
  const keywords = getKeywords(savedArticles);
  const keywordInfo = getKeywordInfo(keywords);

  return (
    <>
      <h1 className="savednews__header-title">Saved articles</h1>
      <p className="savednews__header-info">
        {currentUser?.name}, you have{" "}
        {savedArticles.length === 0 ? "no" : savedArticles.length} saved article
        {savedArticles.length === 1 ? "" : "s"}
      </p>

      {keywordInfo ? (
        <p className="savednews__header-keywords">
          By keywords: &nbsp;
          <span className="savednews__header-tags">{ keywordInfo }</span>
        </p>
      ) : (
        ""
      )}
    </>
  );
}

export default SavedNewsHeader;
