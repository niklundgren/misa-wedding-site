import React from 'react';
import ImageSlider from '../Slider/ImageSlider';
import { SliderData } from '../Slider/SliderData';
import './home-styling.css';

function Home(props){

return(
    <section className="wrapper wrapper-fix mainFlex fade-in">
        <ImageSlider slides={SliderData}></ImageSlider>
        <div className="pOneBox">
            <h1>Events Planning</h1>
            <p>Message: I started because I like planning
			I continued because my talents are here
			I'm dedicated and am excited to meet you
		Sample:
		I startred Made to Love Events in early 2022 after working with a friend and realizing my passion for weaving the perfect
		event out of the thousands of details that go into a wedding. To me, the thrill of finding the perfect vendors to match couples' visions
		for their big day, and the satisfaction of coordinating them all is super fun! I can't wait to meet you and start making the event I know
		you'll love.
	    </p>                
        </div>

        <div className="compliments">
            <div className="kindWordsSlideShow">
                <div className="kindWordsContainer">
                    <div>
                        <h4>Kind Words</h4>
                        <p>"Some throw away quote from the couples you've helped!" - some couple </p>
                    </div>
                </div>
                <div className="featurePhotoContainer">
                    <img className='image-fit' src={require("../../assets/images/Styled-2.jpg").default} alt="bouquet of roses with engagement ring in the center"></img>
                </div>
            </div>
        </div>
    </section>
)

}

export default Home;
