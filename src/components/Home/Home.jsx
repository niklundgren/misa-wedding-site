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
            <p>I startred Made to Love Events in 2022 because of my passion for researching and administrating event vendors,  </p>   
                
        </div>

        <div className="compliments">
            <div className="kindWordsSlideShow">
                <div className="kindWordsContainer">
                    <div>
                        <h4>Kind Words</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur recusandae quisquam iure a facere sint illo adipisci odio nihil, blanditiis asperiores dolores quae minima dolorum, qui accusantium pariatur tempora. Voluptas est esse, quos unde reiciendis placeat minima ducimus quisquam asperiores harum saepe deleniti commodi perspiciatis dolorum eum tempora id inventore.</p>
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
