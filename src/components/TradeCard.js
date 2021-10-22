import "./TradeCard.scss";
import activeFolder from "./../resources/active-folder-icon.svg";
import inactiveFolder from "./../resources/inactive-folder.svg";
import hexagon from "./../resources/hexagon-icon.svg";

function TradeCard(props) {

    function isActiveBtn(btnStatus)
    {
        if (btnStatus){
            return (<img src={activeFolder} className="" alt="folder" />)
        }
        else{
            return (<img src={inactiveFolder} className="" alt="folder" />)
        }
    }

    function printNumberColor(number)
    {
        if (Math.sign(number) > 0) {
            return 'positiveNumber'
        }
        else {
            return 'negativeNumber'
        }
    }

    return (
        <article className="trade-card-big-container">
            <header className="trade-card-header-container">
                <div className="trade-card-header-element">
                    <img src={require(`./../resources/${props.color}.svg`).default} className="trade-card-header-circle-color" alt="dollar icon" />
                    <span className="trade-card-header-type">{ props.type}</span>
                    <span className="trade-card-header-position">#</span>
                    <span className="trade-card-header-position">{ props.number}</span>
                </div>
                <div className="trade-card-header-element">
                    <span className="trade-card-header-value">{ props.value}</span>
                    <span className="trade-card-header-btn-text">TRADE</span>
                </div>
            </header>
            {/* CHART-START*/}
            <article className="trade-card-chart-container">
                <img src={require(`./../resources/${props.chart}.svg`).default} className="" alt="chart"/>
            </article>
            {/* CHART-END*/}
            {/* FOLDER-START*/}
            <article className="trade-card-folder-row-container">
                <div className="trade-card-folder-element">
                    <div className="trade-card-folder-circle">
                        {isActiveBtn(props.isActive)}
                    </div>
                </div>
                <div className="trade-card-folder-element">
                    <div className="trade-card-folder-hexagon">
                        <img src={hexagon} className="" alt="hexagon" />
                        <span>{props.hexagon}</span>
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
                        <span>{props.capitalInvertido}</span>
                    </div>
                </div>
                {/* RETORNO */}
                <div className="trade-card-data-element-row">
                    <div className="trade-card-data-title">
                        <span>RETORNO</span>
                    </div>
                    <div className="trade-card-data-value">
                        <span className={`${printNumberColor(props.retorno)}`}>{props.retorno}</span>
                        <span className={`${printNumberColor(props.retorno)}`}>%</span>
                    </div>
                </div>
                {/* DRAWDOWN */}
                <div className="trade-card-data-element-row">
                    <div className="trade-card-data-title">
                        <span>DRAWDOWN</span>
                    </div>
                    <div className="trade-card-data-value">
                        <span className={`${printNumberColor(props.drawdown)}`}>{props.drawdown}</span>
                        <span className={`${printNumberColor(props.drawdown)}`}>%</span>
                    </div>
                </div>
                {/* SCORE */}
                <div className="trade-card-data-element-row">
                    <div className="trade-card-data-title">
                        <span>SCORE</span>
                    </div>
                    <div className="trade-card-data-value">
                        <span>{ props.score}</span>
                    </div>
                </div>
            </article>
            {/* DATA-END */}
        </article>
    );
}

export default TradeCard;