import "./NewsCardList.css";
import { useState, useContext } from "react";
import { ArticleContext } from "../../contexts/ArticleContext";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ handleSavedArticle, handleRemoveArticle }) {
  const { searchResultArticles } = useContext(ArticleContext);
  const { hasSearched } = useContext(ArticleContext);
  const [visible, setVisible] = useState(3);

  const loadMore = () => {
    setVisible(visible + 3);
  };

  return (
    <div className="newscardlist__section">
      <h1 className="newscardlist__heading">Search results</h1>
      { hasSearched ? (
        <>
        <div className="newscardlist__items">
        {searchResultArticles.slice(0, visible).map((item) => (
          <NewsCard
            key={item.publishedAt}
            item={item}
            handleSavedArticle={handleSavedArticle}
            handleRemoveArticle={handleRemoveArticle}
          />
        ))}
      </div>
      <div className="newscardlist__more">
        {visible < searchResultArticles.length && (
          <button className="newscardlist__button" onClick={loadMore}>
            Show more
          </button>
        )}
      </div>
      </>
      ) : (
        ""
      )}
      
    </div>
  );
}

export default NewsCardList;
