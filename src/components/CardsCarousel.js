import data from "./../mockup/data";
import "./CardsCarousel.scss";
import TradeCard from "./TradeCard";
import leftArrow from "./../resources/circle-left-arrow-icon.svg";
import rightArrow from "./../resources/circle-right-arrow-icon.svg";


function CardsCarousel() {
    return (
        <section className="cards-carousel-big-container">
            <section className="cards-carousel-menu-container">
            </section>
            <section className="card-carousel-stats-container">
                <div className="card-carousel-stats-elements">
                    <span className="card-carousel-stats-count">{data.length}</span>
                    <span className="card-carousel-stats-text">Darwins encontrados</span>
                </div>
                <div className="card-carousel-stats-elements">
                    <img src={leftArrow} className="" alt="left arrow" />
                    <img src={rightArrow} className="" alt="left arrow" />
                </div>
            </section>
            <section className="cards-carousel-container">
                <TradeCard />
                <TradeCard />
                <TradeCard />
            </section>
        </section>
    );
}

export default CardsCarousel;