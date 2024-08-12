import "./Footer.css";
import { Link } from "react-router-dom";

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
            <li className="footer__link"><Link to="/" target="_blank">Home</Link></li>
            <li className="footer__link"><Link to="https://tripleten.com/" target="_blank">TripleTen</Link></li>
          </ul>
        </div>
        <div className="footer__links-social">
          <ul className="footer__links">
            <li className="footer__link">
              <Link to="https://github.com" target="_blank"><button className="footer__link-github-icon" /></Link>
            </li>
            <li className="footer__link">
            <Link to="https://facebook.com" target="_blank"><button className="footer__link-fb-icon" /></Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
