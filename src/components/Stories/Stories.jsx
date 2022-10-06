import React from 'react';
import './stories-styling.css';
import { Link } from 'react-router-dom';


function Stories(prop){

    

    return(
        <div className="wrapper fade-in">
            <div className="story-pitch">
                <h1>Stories</h1>
                <div className="para-container">
                    <p>Every wedding and every event tells it's own story and I'm grateful to have participated in a few already. Here's a collection of some of how the final results looked,
			with focus on where I made the event a bit more lovable, as well as a few details of the things I was responsible for bringing to the table!</p>
                </div>
            </div>
            <div className="story-container first-story">
                <div className="centered">
                    <div>
                        <h1>Minimalist boho style shoot</h1>
                        <p>Filipino Fest | Date 1</p>
                        <Link to='/Boho' className="gallery-container">
                           View Gallery 
                        </Link>
                        
                    </div>
                </div>
                <img src={require("../../assets/images/MateoCass.jpg").default} alt="bride and groom holding hands in a well lit area"></img>

            </div>

            <div className="story-container">
                <div className="centered">
                    <div>
                        <h1>Minimalist boho style shoot</h1>
                        <p>Windmill Rainy day | Date 2</p>
                        <Link to='/Boho' className="gallery-container">
                           View Gallery 
                        </Link>
                        
                    </div>
                </div>
                <img src={require("../../assets/images/MateoCass.jpg").default} alt="bride and groom holding hands in a well lit area"></img>

            </div>

            <div className="story-container last-story">
                <div className="centered">
                    <div>
                        <h1>Coming Soon</h1>
                    </div>
                </div>
                <img src={require("../../assets/images/MelinaBen.jpg").default} alt="waves crashing on the feet of the brise and groom by the beach"></img>
            </div>
        </div>
    )
}

export default Stories;
