import data from "./../mockup/data";
import "./CardsCarousel.scss";
import TradeCard from "./TradeCard";
import listIcon from "./../resources/list-icon.svg";
import cardIcon from "./../resources/card-icon.svg";
import switchOn from "./../resources/switchOn.svg";
import arrowDown from "./../resources/arrow-down.svg"
import leftArrow from "./../resources/circle-left-arrow-icon.svg";
import rightArrow from "./../resources/circle-right-arrow-icon.svg";



function CardsCarousel() {

    function printCards()
    {
        if (data.length > 0) {
            return data.map((item, i) => {
                return(<TradeCard
                    key={i}
                    color={item.color}
                    type={item.type}
                    number={item.number}
                    value={item.value}
                    chart={item.chart}
                    isActive={item.isActive}
                    hexagon={item.hexagon}
                    capitalInvertido={item.capitalInvertido}
                    retorno={item.hexagon}
                    drawdown={item.drawdown}
                    score={item.score}
                />
                )
            })
        }
    };

    return (
        <section className="cards-carousel-big-container">
            <section className="cards-carousel-menu-container">
                <div className="cards-carousel-menu-list">
                    <img src={listIcon} className="" alt="icon" />
                </div>
                <div className="cards-carousel-menu-card">
                    <img src={cardIcon} className=""  alt="icon"/>
                </div>
                <div className="cards-carousel-menu-switch">
                    <div className="card-carousel-menu-text">
                        <span>In Portfolio</span>
                    </div>
                    <div className="cards-carousel-menu-switch-icon">
                        <img src={switchOn} className="" alt="switch" />
                    </div>
                </div>
                <div className="cards-carousel-menu-dropdown">
                    <div className="cards-carousel-menu-dropdown-content">
                        <div className="cards-carousel-menu-text">
                            <span>Order by Return</span>
                        </div>
                        <img src={arrowDown} className="" alt="icon" />
                    </div>
                </div>
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
                {printCards()}
            </section>
        </section>
    );
}

export default CardsCarousel;