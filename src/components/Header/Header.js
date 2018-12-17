import React from "react";
import "./Header.css"


const Header = props => (
    <center>
        <div className="headerBar">
            <p>Score: {props.score}</p>
            <button onClick={() => props.reset()}>Reset</button>
        </div>
    </center>
);

export default Header;