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
      <div className="savednews__header-title">Saved articles</div>
      <div className="savednews__header-info">
        {currentUser?.name}, you have{" "}
        {savedArticles.length === 0 ? "no" : savedArticles.length} saved article
        {savedArticles.length === 1 ? "" : "s"}
      </div>

      {keywordInfo ? (
        <div className="savednews__header-keywords">
          By keywords: &nbsp;
          <span className="savednews__header-tags">{ keywordInfo }</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default SavedNewsHeader;
