import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardsList from "../SavedNewsCardsList/SavedNewsCardsList";

function SavedNews({ handleRemoveArticle }) {
  return (
    <>
      <div className="savednews__section">
        <SavedNewsHeader />
      </div>
      <SavedNewsCardsList handleRemoveArticle={handleRemoveArticle} />
    </>
  );
}

export default SavedNews;
