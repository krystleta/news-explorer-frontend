import "./NavigationBar.css";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import logo from "../../assets/logo.png";
import logoBlack from "../../assets/logo-black.jpg";
import logouticon from "../../assets/logout-icon.svg";
import logouticonblack from "../../assets/logout-icon-black.svg";

function NavigationBar({ handleLoginModal, handleLogOut }) {
  const { isLoggedIn } = useContext(CurrentUserContext);
  const { currentUser } = useContext(CurrentUserContext);
  const [isMobile, setIsMobile] = useState(false);
  const [burgerButtonClass, setBurgerButtonClass] = useState(
    "burger-bar unclicked"
  );
  const [mobileMenu, setMobileMenu] = useState("-mobile hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const location = useLocation();

  const handleResize = () => {
    if (window.innerWidth < 798) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const toggleMenu = () => {
    if (!isMenuClicked) {
      setBurgerButtonClass("burger-bar clicked");
      setMobileMenu("-mobile visible");
    } else {
      setBurgerButtonClass("burger-bar unclicked");
      setMobileMenu("-mobile hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [setIsMobile]);

  return (
    <>
      <div
        className={
          location.pathname === "/" && isMobile
            ? "navigation__bar-mobile"
            : location.pathname === "/saved-news" && isMobile
            ? "navigation__bar-mobile-savednews"
            : location.pathname === "/" && !isMobile
            ? "navigation__bar"
            : location.pathname === "/saved-news" && !isMobile
            ? "navigation__bar-savednews"
            : ""
        }
      >
        <div className="navigation__bar-left">
          <Link to="/">
            <img
              src={location.pathname === "/saved-news" ? logoBlack : logo}
              className="navigation__bar-logo"
            />
          </Link>
          <div
            className={isMobile ? "navigation__hamburger" : ""}
            onClick={toggleMenu}
          >
            <div className={burgerButtonClass}></div>
            <div className={burgerButtonClass}></div>
          </div>
        </div>
        <div className={`navigation__bar-right${isMobile ? mobileMenu : ""}`}>
          <ul className="navigation__bar-links">
            <li
              className={`navigation__bar-link${
                location.pathname === "/" ? "-active" : ""
              }`}
            >
              <Link to="/">
                <button className="navigation__bar-button">Home</button>
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li
                  className={`navigation__bar-link-saved${
                    location.pathname === "/saved-news" ? "-active" : ""
                  }`}
                >
                  <Link to="/saved-news">
                    <button className="navigation__bar-button">
                      Saved articles
                    </button>
                  </Link>
                </li>
                <li className="navigation__bar-link-logout">
                  <button
                    className="navigation__bar-logout-button"
                    onClick={handleLogOut}
                  >
                    {currentUser?.name}
                    <img
                      className="navigation__bar-logout-icon"
                      alt="Logout"
                      src={
                        location.pathname === "/saved-news"
                          ? logouticonblack
                          : logouticon
                      }
                    />
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="navigation__bar-link">
                  <button
                    className="navigation__bar-signin-button"
                    onClick={handleLoginModal}
                  >
                    Sign In
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
