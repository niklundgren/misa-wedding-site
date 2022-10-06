import React from 'react';
import './about-styling.css';

function About(props){
    return(
        <div className="wrapper about-wrapper-fix fade-in">
            <section className="top-banner">
                <h1>About Me</h1>
               
            </section>
            <section className="mid-section">
                <div><p>
		Hi! I'm Amanda Lundgren. After earning my teaching degree at Colorado Christian in 2018, I learned a lot about planning carefully when I 
		followed God's calling on my life to teach English in Korea for a year right when COVID struck! When I finally made it back to the states,
		I moved to the bay area where God led me to the We Are Church movement. I started teaching xx grade at xxx school this year, but decided to 
		use the talents God's given me for planning and coordinating as another way I can glorify Him and sustain living in the bay. Believe it or not,
		there are a lot of overlapping skills between getting thirty 10 year-olds to do their math homework, and getting ten 30 year-olds to get to
		events on time!  
		</p></div>
                <div><img className='image-fit' src={require("../../assets/images/Lorena16.jpg").default} alt="Wedding planner sitting on the floor by desk smiling at the camera"></img></div>
            </section>
            <section className="bottom-section">
                <div className="promise-box bottom-section-item">
                    <div><img className='image-fit' src={require("../../assets/images/promise.png").default} alt="drawing of fingers crossed"></img></div>
                    <div>
                        <h2>Promise</h2>
                        <p>I promise you won't need to cross your fingers on your big day. We'll plan out all the details and backup plans ahead of time!</p>
                    </div>
                </div>
                <div className="values-box bottom-section-item">
                    <div><img className='image-fit' src={require("../../assets/images/values.png").default} alt="drawing of Stars shinning"></img></div>
                    <div>
                        <h2>Personal Touch</h2>
                        <p>I don't handle more than a couple events at a time, so I can guarentee you'll have my full attention and personal touch on everything from your vendors to your napkins.</p>
                    </div>
                </div>
                <div className="sustain-box bottom-section-item">
                    <div><img className='image-fit' src={require("../../assets/images/sustainability.png").default} alt="drawing of hand holding a growing plant"></img></div>
                    <div>
                        <h2>Sustainability</h2>
                        <p>God's given us stewardship of His possesions, and I will do my best to honor that in avoiding waste of your resources or the planet's.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
