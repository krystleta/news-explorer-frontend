import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader__content">
      <div className="circle-preloader"></div> 
      <div className="preloader__text">Searching for news...</div>
      {/* <div className="preloader__notfound">
        <img src={notFound} alt="Nothing found" />
        <h2 className="preloader__notfound-heading">Nothing found</h2>
        <p className="preloader__notfound-text">
          Sorry, but nothing matched your search terms.
        </p>
      </div> */}
    </div>
  );
}

export default Preloader;
