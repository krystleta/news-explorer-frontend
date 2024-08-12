import notFound from "../../assets/not-found.svg";

function NotFound() {
  return (
    <div className="notfound__section">
      <img className="notfound__image" src={notFound} alt="Nothing found" />
      <h2 className="notfound__notfound-heading">Nothing found</h2>
      <p className="notfound__notfound-text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NotFound;
