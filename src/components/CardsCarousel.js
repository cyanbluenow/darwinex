import React from "react";
import data from "./../mockup/data";
import "./CardsCarousel.scss";
import "./../styles/commons.scss";
import TradeCard from "./TradeCard";
import listIcon from "./../resources/list-icon.svg";
import TradeListElement from './TradeListElement';
import cardIcon from "./../resources/card-icon.svg";
import switchOn from "./../resources/switchOn.svg";
import arrowDown from "./../resources/arrow-down.svg"
import leftArrow from "./../resources/circle-left-arrow-icon.svg";
import rightArrow from "./../resources/circle-right-arrow-icon.svg";



class CardsCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isListActive: false,
            isCarouselActive: true
        }
        //this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidMount() { }

    printSection() {
        if (this.state.isCarouselActive) {
            return (
                <section className="cards-carousel-container">
                    {this.printElements()}
                </section>
            )
        } else {
            return (
                <section className="dashboard-list-big-container">
                    {this.printElements() }
                </section>
            )
        }
    }

    printElements() {
        if (this.state.isCarouselActive) {
            if (data.length > 0) {
                return data.map((item, i) => {
                    return (<TradeCard
                        key={i}
                        color={item.color}
                        type={item.type}
                        number={item.number}
                        value={item.value}
                        chart={item.chart}
                        isActive={item.isActive}
                        hexagon={item.hexagon}
                        capitalInvertido={item.capitalInvertido}
                        retorno={item.retorno}
                        drawdown={item.drawdown}
                        score={item.score}
                    />
                    )
                })
            }
        } else {
            return data.map((item, i) => {
                return (<TradeListElement 
                    key={i}
                    color={item.color}
                    type={item.type}
                    number={item.number}
                    value={item.value}
                    chart={item.chart}
                    isActive={item.isActive}
                    hexagon={item.hexagon}
                    capitalInvertido={item.capitalInvertido}
                    retorno={item.retorno}
                    drawdown={item.drawdown}
                    score={item.score}
                />
                )
            })
        }
    }

    

    render() {
        return(
            <section className="cards-carousel-big-container">
                <section className="cards-carousel-menu-container">
                    <a
                        className={`cards-carousel-menu-list ${this.state.isListActive ? 'menuBtnActive' : 'menuBtnInactive'}`}
                        onClick={() => {this.setState({ isCarouselActive: false, isListActive: true }) }}
                    >
                        <img src={listIcon} className="" alt="icon" />
                    </a>
                    <a
                        className={`cards-carousel-menu-card ${this.state.isCarouselActive ? 'menuBtnActive' : 'menuBtnInactive'}`}
                        onClick={() => { this.setState({ isCarouselActive: true, isListActive: false }) }}
                    >
                        <img src={cardIcon} className="" alt="icon" />
                    </a>
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
                {this.printSection()}
            </section>
        )
    }
}

export default CardsCarousel;