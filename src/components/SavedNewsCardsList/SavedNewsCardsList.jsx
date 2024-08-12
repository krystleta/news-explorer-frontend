import "./SavedNewsCardsList.css";
import { useState, useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { ArticleContext } from "../../contexts/ArticleContext";

function SavedNewsCardsList({ handleRemoveArticle }) {
  const { savedArticles } = useContext(ArticleContext);
  const [visible, setVisible] = useState(3);

  const loadMore = () => {
    setVisible(visible + 3);
  };
  return (
    <div className="savednewscardlist__section">

      <div className="savednewscardlist__items">
        {savedArticles.slice(0, visible).map((item) => (
          <NewsCard
            key={item.publishedAt}
            item={item}
            handleRemoveArticle={handleRemoveArticle}
          />
        ))}
      </div>
      <div className="savednewscardlist__more">
        {visible < savedArticles.length && (
          <button className="savednewscardlist__button" onClick={loadMore}>
            Show more
          </button>
        )}
      </div>
    </div>
  );
}

export default SavedNewsCardsList;
