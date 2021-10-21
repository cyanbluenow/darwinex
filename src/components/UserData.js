import "./UserData.scss";
import avatar from "./../resources/avatar.svg";
import downArrow from "./../resources/light-grey-down-arrow.svg";
function UserData() {
    return (
        <section className="user-data-big-container">
            <section className="user-data-user-container">
                <div>
                    <img src={avatar} className="" alt="icon" />
                    <span>AIS</span>
                </div>
                <div className="user-data-user">
                    <span className="user-data-strategy">Estrategianombre</span>
                    <span className="user-data-name">Nombre de Usuario</span>
                </div>
                
            </section>
            <section className="user-data-text-container">
                <p>TSM is absolutely passionate about automated, systematic trading, and to drive system lorem ipsum dolor sit amet...</p>
                <div className="user-data-arrow-icon">
                    <img src={downArrow}  alt="icon" />
                </div>
            </section>
        </section>
    );
}

export default UserData;