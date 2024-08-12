import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__left">
        &copy; {year} News Explorer, Powered by News API
      </div>
      <div className="footer__right">
        <div className="footer__links-list">
          <ul className="footer__links-list">
            <li className="footer__link">Home</li>
            <li className="footer__link">TripleTen</li>
          </ul>
        </div>
        <div className="footer__links-social">
          <ul className="footer__links">
            <li className="footer__link">
              <button className="footer__link-github-icon" />
            </li>
            <li className="footer__link">
              <button className="footer__link-fb-icon" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
