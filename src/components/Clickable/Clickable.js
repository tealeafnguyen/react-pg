import React from "react";
import "./Clickable.css";


const Clickable = props => (
    <span onClick={() => props.clicked(props.id)} className="click">
        <div className="card">
            <img alt={props.id} src={props.image} />
        </div>
    </span>
);

export default Clickable;