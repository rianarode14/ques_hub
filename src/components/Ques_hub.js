import React from "react";

import Rectangle6 from '../images/Rectangle6.svg';
import Rectangle13 from '../images/Rectangle13.svg';




import './Ques_hub.css';

const Ques_hub = () => {
    return (
        <div className="inst">
            <div className="background-container">
                 
                <img src={Rectangle6} alt="Rectangle" className="rectangle1" /> 
                <img src={Rectangle13} alt="Rectangle" className="rectangle2"/>
                <img src={Rectangle13} alt="Rectangle" className="rectangle3"/>
                <img src={Rectangle13} alt="Rectangle" className="rectangle4"/>
                <img src={Rectangle13} alt="Rectangle" className="rectangle5"/>
                <img src={Rectangle13} alt="Rectangle" className="rectangle6"/>
               
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
            
            <span className="rectangle_18"></span>
            <span className="rectangle_18_2"></span>
            <span className="rectangle_18_3"></span>
            <span className="rectangle_18_4"></span>
            <span className="rectangle_18_5"></span>
            <span className="rectangle_18_6"></span>

            <span className="num_text1"><span>Q1</span></span>
            <span className="num_text2"><span>Q2</span></span>
            <span className="num_text3"><span>Q3</span></span>
            <span className="num_text4"><span>Q4</span></span>
            <span className="num_text5"><span>Q5</span></span>
            <span className="num_text6"><span>Q6</span></span>

            <span className="firstReact"></span>
            


            
        </div>
    );
}

export default Ques_hub;
