import data from "./../mockup/data";
import "./CardsCarousel.scss";


function CardsCarousel() {
    return (
        <section className="cards-carousel-big-container">
            <section className="cards-carousel-menu-container">
            </section>
            <section className="card-carousel-stats-container">
                <span>{data.length}</span>
            </section>
        </section>
    );
}

export default CardsCarousel;