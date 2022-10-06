import React from 'react';

import './kind-words.css';

function Kindwords(prop){
    return(
        <div className="wrapper fade-in">
            <div className="story-pitch">
                <h1>Kind Words</h1>
                <div className="top-para-container">
                    <p>Some of the amazing couples I've had the chance to work with said some nice things about my work:</p>
                </div>
            </div>
            <div className="kindwords-container">
                <div className="kindwords-row kindwords-right">
                    <div className="client-words">
                        <h1>Filipinos</h1>
                        <p>Amanda is great</p>
                    </div>
                    
                    <img className="image-size" src={require("../../assets/images/filipinos.jpg").default} alt="waves crash into feet of bride and groom while on the beach"></img>
                </div>
                <div className="kindwords-row kindwords-left">
                    <div className="client-words">
                        <h1>Other people</h1>
                        <p>Wow so great</p>
                    </div>
                    <img className="image-size" src={require("../../assets/images/otherpeople.jpg").default} alt="Bride and groom holding hands in a well lit room"></img>
                </div>
            </div>
        </div>
    )
}

export default Kindwords;
