//Hooks and Routes
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./App.css";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

//Contexts
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { ArticleContext } from "../../contexts/ArticleContext";

//Components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedNews from "../SavedNews/SavedNews";

//Utils
import * as auth from "../../utils/auth";
import { addSavedArticle, removeSavedArticle } from "../../utils/api";
import { getNews } from "../../utils/newsapi";
import { setToken, getToken, removeToken } from "../../utils/token";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [searchResultArticles, setSearchResultArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignUpModal = () => {
    setActiveModal("signup");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleConfirmationModal = () => {
    setActiveModal("confirmation");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleLogin = (user) => {
    auth
      .signIn(user)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setCurrentUser(user);
          setIsLoggedIn(true);
        }
        closeActiveModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignUp = (user) => {
    auth
      .signUp(user)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          // setCurrentUser(user);
          // setIsLoggedIn(true);
        }
        handleConfirmationModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setHasSearched(false);
    removeToken();
    navigate("/");
  };

  const handleSearch = (search) => {
    setIsLoading(true);
    getNews(search)
      .then((data) => {
        setSearchResultArticles(data);
        setHasSearched(true);
      })
      .catch((error) => {
        console.log(error);
        setSearchError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSavedArticle = (newsItem) => {
    if (!savedArticles.find((article) => article.url === newsItem.url)) {
      addSavedArticle(newsItem)
        .then((res) => {
          setSavedArticles([res, ...savedArticles]);
        })
        .catch((error) => {
          console.log(error);
          setSearchError(true);
        });
    } else if (savedArticles.find((article) => article.url === newsItem.url)) {
      removeSavedArticle(newsItem)
        .then((res) => {
          const removedNewsArticles = savedArticles.filter(
            (article) => article.url !== res.url
          );
          setSavedArticles(removedNewsArticles);
        })
        .catch((error) => {
          console.log(error);
          setSearchError(true);
        });
    }
  };

  const handleRemoveArticle = (newsItem) => {
    removeSavedArticle(newsItem)
      .then(() => {
        const unsavedNewsArticles = savedArticles.filter(
          (article) => article.url !== newsItem.url
        );
        setSavedArticles(unsavedNewsArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!activeModal) return;
    const close = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeModal]);

  useEffect(() => {
    const token = getToken();
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}>
          <ArticleContext.Provider
            value={{
              searchResultArticles,
              setSearchResultArticles,
              savedArticles,
              setSavedArticles,
              hasSearched,
              setHasSearched,
            }}
          >
            <div className="page__content">
              <div
                className={
                  location.pathname === "/saved-news"
                    ? "page__content-header-savednews"
                    : "page__content-header"
                }
              >
                <Header
                  handleLoginModal={handleLoginModal}
                  handleLogOut={handleLogOut}
                />
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Main
                        handleSearch={handleSearch}
                        searchError={searchError}
                        isLoading={isLoading}
                        handleSavedArticle={handleSavedArticle}
                        handleRemoveArticle={handleRemoveArticle}
                      />
                    }
                  />
                  <Route
                    path="/saved-news"
                    element={
                      <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <SavedNews
                          handleLogOut={handleLogOut}
                          handleRemoveArticle={handleRemoveArticle}
                        />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </div>
              <Footer></Footer>
              
            </div>
          </ArticleContext.Provider>
        </CurrentUserContext.Provider>
      </div>
      {activeModal === "signup" && (
        <SignUpModal
          closeActiveModal={closeActiveModal}
          handleSignUp={handleSignUp}
          isOpen={activeModal === "signup"}
          handleLoginModal={handleLoginModal}
        />
      )}
      {activeModal === "login" && (
        <LoginModal
          closeActiveModal={closeActiveModal}
          handleLogin={handleLogin}
          isOpen={activeModal === "login"}
          handleSignUpModal={handleSignUpModal}
        />
      )}
      {activeModal === "confirmation" && (
        <ConfirmationModal
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === "confirmation"}
          handleLoginModal={handleLoginModal}
        />
      )}
    </>
  );
}

export default App;
