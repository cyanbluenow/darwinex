import "./LeftMenu.scss";
import leftMenuIcon from "./../resources/left-menu-icon.svg";
import darwinia from "./../resources/darwinia-icon.svg";
import allDarwinia from "./../resources/all-darwins-icon.svg";
import explore from "./../resources/explorar-icon.svg";


function LeftMenu() {
    return (
        <nav className="left-menu-big-container">
            <div className="left-menu-btns-principal grey-btn">
                <a className="left-menu-link" href="#">
                    <img src={leftMenuIcon} className="left-menu-icon" alt="principal" />
                    <span>PRINCIPAL</span>
                </a>  
            </div>
            <div className="left-menu-btns">
                <a className="left-menu-link" href="#">
                    <img src={explore} className="main-nav-brand-logo" alt="explore" />
                    <span>Explorar</span>
                </a>
            </div>
            <div className="left-menu-btns">
                <a className="left-menu-link" href="#">
                    <img src={allDarwinia} className="main-nav-brand-logo" alt="all darwins" />
                    <span>All Darwins</span>
                </a>
            </div>
            <div className="left-menu-btns">
                <a className="left-menu-link" href="#">
                    <img src={darwinia} className="main-nav-brand-logo" alt="darwinia" />
                    <span>Darwinia</span>
                </a>
            </div>
            <div className="left-menu-bottom-btn">
                <div className="left-menu-btns-principal blue-btn">
                    <a className="left-menu-link" href="#">
                        <span>ARE YOU TRADER?</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default LeftMenu;