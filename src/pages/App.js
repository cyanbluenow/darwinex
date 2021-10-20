import "./App.scss";
import MainNavBar from "./../components/MainNavBar";
import LeftMenu from "./../components/LeftMenu";
import CardsCarousel from "./../components/CardsCarousel";

function App() {
    return (
        <div className="app-big-container">
            <MainNavBar />
            <section className="app-container">
                <LeftMenu />
                <section className="col-2">
                    <CardsCarousel/>
                </section>
            </section>
        </div>
  );
}

export default App;
