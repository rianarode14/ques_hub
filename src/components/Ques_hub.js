import React from "react";
import Rectangle6 from '../images/Rectangle6.svg';
import Rectangle13 from '../images/Rectangle13.svg';



import './Ques_hub.css';

const Ques_hub = () => {

    // Logout handler function (you can perform any other action, but the button stays visible)
    const handleLogout = () => {
        // Perform your logout logic here, for example:
        console.log("User has logged out!");
    };

    return (
        <div className="inst">
            <div className="background-container">
                
                <img src={Rectangle6} alt="Rectangle" className="rectangle1" />
                <img src={Rectangle13} alt="Rectangle" className="rectangle2" />
                <img src={Rectangle13} alt="Rectangle" className="rectangle3" />
                <img src={Rectangle13} alt="Rectangle" className="rectangle4" />
                <img src={Rectangle13} alt="Rectangle" className="rectangle5" />
                <img src={Rectangle13} alt="Rectangle" className="rectangle6" />

                {/* Logout button that stays in place */}
                <button className="logout" onClick={handleLogout}>
                    LOGOUT
                </button>

                <span className="firstReact"></span>
            </div>

            <span className="ncc">NCC</span>
            <span className="header-1">INSTRUCTIONS</span>
            <span className="header-2">QUESTION HUB</span>
            <span className="header-3">LEADERBOARDS</span>
            <span className="header-4">RESULTS</span>
            <span className="question-hub">QUESTION HUB</span>

            <span className="rectangle_18"></span>
            <span className="rectangle_18_2"></span>
            <span className="rectangle_18_3"></span>
            <span className="rectangle_18_4"></span>
            <span className="rectangle_18_5"></span>
            <span className="rectangle_18_6"></span>

            <span className="num_text1">Q1</span>
            <span className="num_text2">Q2</span>
            <span className="num_text3">Q3</span>
            <span className="num_text4">Q4</span>
            <span className="num_text5">Q5</span>
            <span className="num_text6">Q6</span>
        </div>
    );
};

export default Ques_hub;
