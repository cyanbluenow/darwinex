import "./TradeCard.scss";
import orangeDollarIcon from "./../resources/orange-dollar-icon.svg";
import chart from "./../resources/orange-chart.svg";
import folder from "./../resources/folder-icon.svg";
import hexagon from "./../resources/hexagon-icon.svg";


function TradeCard(){
    return (
        <article className="trade-card-big-container">
            <header className="trade-card-header-container">
                <div className="trade-card-header-element">
                    <img src={orangeDollarIcon} className="trade-card-header-circle-color" alt="dollar icon" />
                    <span className="trade-card-header-type">BWE</span>
                    <span className="trade-card-header-position">#</span>
                    <span className="trade-card-header-position">12</span>
                </div>
                <div className="trade-card-header-element">
                    <span className="trade-card-header-value">180.22</span>
                    <span className="trade-card-header-btn-text">TRADE</span>
                </div>
            </header>
            {/* CHART-START*/}
            <article className="trade-card-chart-container">
                <img src={ chart} className="" alt="chart"/>
            </article>
            {/* CHART-END*/}
            {/* FOLDER-START*/}
            <article className="trade-card-folder-row-container">
                <div className="trade-card-folder-element">
                    <div className="trade-card-folder-circle">
                        <img src={folder} className="" alt="folder" />
                    </div>
                </div>
                <div className="trade-card-folder-element">
                    <div className="trade-card-folder-hexagon">
                        <img src={hexagon} className="" alt="hexagon" />
                        <span>4</span>
                    </div>
                </div>
            </article>
            {/* FOLDER-END*/}
            {/* DATA-START */}
            <article className="trade-card-data-rows-container">
                {/* CAPITAL INVERTIDO */}
                <div className="trade-card-data-element-row">
                    <div className="trade-card-data-title">
                        <span>CAPITAL INVERTIDO</span>
                    </div>
                    <div className="trade-card-data-value">
                        <span>$</span>
                        <span>1600.00</span>
                    </div>
                </div>
                {/* RETORNO */}
                <div className="trade-card-data-element-row">
                    <div className="trade-card-data-title">
                        <span>RETORNO</span>
                    </div>
                    <div className="trade-card-data-value">
                        <span>1600.00</span>
                        <span>%</span>
                    </div>
                </div>
                {/* DRAWDOWN */}
                <div className="trade-card-data-element-row">
                    <div className="trade-card-data-title">
                        <span>DRAWDOWN</span>
                    </div>
                    <div className="trade-card-data-value">
                        <span>1600.00</span>
                        <span>%</span>
                    </div>
                </div>
                {/* SCORE */}
                <div className="trade-card-data-element-row">
                    <div className="trade-card-data-title">
                        <span>SCORE</span>
                    </div>
                    <div className="trade-card-data-value">
                        <span>1600.00</span>
                    </div>
                </div>
            </article>
            {/* DATA-END */}
        </article>
    );
}

export default TradeCard;