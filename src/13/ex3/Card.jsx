import React from "react";
import "./Card.css";

function Card(props) {
    const { title, backgroundColor, image, children } = props;

    return (
        <div className="Card"
             style={{ backgroundColor: backgroundColor }}>

            <div className="Card-image">
                <img src={image} alt={title} />
                <span className="Card-badge">게스트 선호</span>
                <span className="Card-heart">♡</span>
            </div>

            {title && <h3>{title}</h3>}
            {children}
        </div>
    );
}

export default Card;