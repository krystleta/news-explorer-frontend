import "./NewsCard.css";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ArticleContext } from "../../contexts/ArticleContext";
import {
  truncateString,
  formatArticleDate,
  checkValidImage,
} from "../../utils/utilityfunctions";
import defaultImage from "../../assets/header-background.svg";
import bookmarkSaved from "../../assets/bookmark-icon-marked.svg";
import bookmarkImage from "../../assets/bookmark-icon-normal.svg";
import bookmarkHover from "../../assets/bookmark-icon-hover.svg";
import trashIcon from "../../assets/trash-icon.svg";
import trashIconHover from "../../assets/trash-icon-hover.svg";

function NewsCard({ item, handleSavedArticle, handleRemoveArticle }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(ArticleContext);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(
    savedArticles.some((article) => article.url === item.url)
  );
  const articleDate = new Date(item.publishedAt);
  const isValidImage = checkValidImage(item.urlToImage);

  const handleSave = () => {
    handleSavedArticle(item, isSaved);
    setIsBookmarked(!isBookmarked);
    // setIsSaved(savedArticles.some((article) => article.url === item.url));
  };

  const handleRemoveSaved = () => {
    handleRemoveArticle(item);
  };

  useEffect(() => {
    const isSaved = savedArticles.some((article) => article.url === item.url);
    setIsBookmarked(isSaved);
  }, [savedArticles, item.url]);

  return (
    <div className="newscard__container">
      <div className="newscard__header">
        {isLoggedIn && isSaved ? (
          <>
            <div className="newscard__header-keyword">
              {item.keywordTag ? item.keywordTag : " "}
            </div>
            <div className="newscard__header-delete-container">
            <div
              className={
                isHovered
                  ? "newscard__header-remove-saved-hidden"
                  : "newscard__header-remove-saved"
              }
            >
              Remove from saved
            </div>
            <div className="newscard__header-delete">
              <button
                className="newscard__header-trash"
                onClick={handleRemoveSaved}
                onMouseEnter={() => {
                  setIsHovered(true);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                }}
              >
                <img
                  src={isHovered ? trashIconHover : trashIcon}
                  alt="Remove from saved articles"
                />
              </button>
            </div>
            </div>
          </>
        ) : isLoggedIn && !isSaved ? (
          <>
            <button className="newscard__header-bookmark" onClick={handleSave}>
              <img
                src={isBookmarked ? bookmarkSaved : bookmarkImage}
                alt="Save article"
                className="newscard__header-bookmark-active"
              />
            </button>
          </>
        ) : !isLoggedIn ? (
          <>
            <div
              className={
                isHovered
                  ? "newscard__header-signin-hidden"
                  : "newscard__header-signin"
              }
            >
              Sign in to save articles
            </div>
            <button
              className="newscard__header-bookmark"
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              <img
                src={isHovered ? bookmarkHover : bookmarkImage}
                alt="Save article"
                className="newscard__header-bookmark-active"
              />
            </button>
          </>
        ) : (
          ""
        )}
      </div>
      <img
        className="newscard__image"
        src={!isValidImage ? defaultImage : item.urlToImage}
        alt={item.title}
      />
      <div className="newscard__date">{formatArticleDate(articleDate)}</div>
      <div className="newscard__title">{truncateString(item.title, 50)}</div>
      <div className="newscard__abstract">
        {item.description ? truncateString(item.description, 205) : item.title}
      </div>
      <div className="newscard__source">
        {item.source.name || item.source.id}
      </div>
    </div>
  );
}

export default NewsCard;
