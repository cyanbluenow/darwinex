import "./App.scss";
import MainNavBar from "./../components/MainNavBar";
import LeftMenu from "./../components/LeftMenu";
import UserData from "./../components/UserData";
import CardsCarousel from "./../components/CardsCarousel";
import TradeListElement from "./../components/TradeListElement";

function App() {
    return (
        <div className="app-big-container">
            <MainNavBar />
            <section className="app-container">
                <LeftMenu />
                <section className="col-2">
                    <UserData/>
                    <CardsCarousel />
                </section>
            </section>
        </div>
  );
}

export default App;
