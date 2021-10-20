import "./MainNavBar.scss";
import brand from "../resources/logo darwinex.svg";

function MainNavBar() {
    return(
        <header className="main-nav-bar-container">
            <img src={brand} className="main-nav-brand-logo" alt="brand" />
        </header>
    );
}

export default MainNavBar;