import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardsList from "../SavedNewsCardsList/SavedNewsCardsList";

function SavedNews({ handleRemoveArticle }) {
  return (
    <>
      <div className="savednews__section">
        <SavedNewsHeader />
      </div>
      <div className="savednewslist__section">
        <SavedNewsCardsList handleRemoveArticle={handleRemoveArticle} />
      </div>
    </>
  );
}

export default SavedNews;
