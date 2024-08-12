import React from "react";
import rect1 from '../images/rect1.svg';
import './Ques_hub.css';

const Ques_hub = () => {
    return (
        <div className="inst">
            <div className="background-container">
                <img src={rect1} alt="Rectangle" className="rectangle" />
                <button className="logout">LOGOUT</button>
            </div>

            <span className="ncc">
                <span>NCC</span>
            </span>

            <span className="header-1">
                <span>INSTRUCTIONS</span>
            </span>
            <span className="header-2">
                <span>QUESTION HUB</span>
            </span>
            <span className="header-3">
                <span>LEADERBOARDS</span>
            </span>
            <span className="header-4">
                <span>RESULTS</span>
            </span>

            <span className="question-hub">
                <span>QUESTION HUB</span>
            </span>

            <div class="box"></div>


            
        </div>
    );
}

export default Ques_hub;
