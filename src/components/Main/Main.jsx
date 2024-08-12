import "./Main.css";
import "../NotFound/NotFound.css";
import { useContext } from "react";
import { ArticleContext } from "../../contexts/ArticleContext";

import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";

function Main({
  handleSearch,
  isLoading,
  searchError,
  handleSavedArticle,
  handleRemoveArticle,
}) {
  const { searchResultArticles } = useContext(ArticleContext);
  const { hasSearched } = useContext(ArticleContext);
  
  return (
    <main className="main">
      <SearchForm handleSearch={handleSearch} />

      {hasSearched && searchResultArticles.length > 0 ? (
        <NewsCardList
          handleSavedArticle={handleSavedArticle}
          handleRemoveArticle={handleRemoveArticle}
        />
      ) : hasSearched && searchResultArticles.length === 0 ? (
        <NotFound />
      ) : isLoading ? (
        <Preloader />
      ) : searchError === true ? (
        <NotFound />
      ) : (
        ""
      )}
      <About />
    </main>
  );
}

export default Main;
