import "./TradeListElement.scss";

function TradeListElement(props)
{
    return (
        <section className="trade-list-element-big-container">
            {/*<img src={require(`./../resources/${props.color}.svg`).default} alt="dollar icon" />*/}
            <img src={require(`./../resources/orange-dollar-icon.svg`).default} alt="dollar icon" />
            <span>{props.type }</span>
            <span>#</span>
            <span>{props.number}</span>
            <span>{props.value}</span>
            <span>{props.isActive}</span>
            <span>{props.hexagon}</span>
            <span>{props.capitalInvertido}</span>
            <span>{props.retorno}</span>
            <span>{props.drawdown}</span>
            <span>{props.score }</span>
            <span>SEE CHART</span>
        </section>
    )
}

export default TradeListElement;