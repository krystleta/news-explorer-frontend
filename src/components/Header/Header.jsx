import "./Header.css";
import { useLocation } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";

function Header({ handleLoginModal, handleLogOut }) {
  const location = useLocation();
  
  return (
    <header
      className={location.pathname === "/" ? "header" : "header__savednews"}
    >
      <NavigationBar
        handleLoginModal={handleLoginModal}
        handleLogOut={handleLogOut}
      />
    </header>
  );
}

export default Header;
