import React from "react";
import "../assets/styles/components/Card.css";

const Card = ({ icon, title, text }) => (
    <div className="card">
        <i className={icon}></i>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
);

export default Card;