import React from 'react';

import './services-styling.css';

function Services(prop){
    return(
        <div className="wrapper fade-in">
            <section className="service-section">
                <div className="service-details-container">
                    <div>
                        <h1>Full Wedding Planning</h1>
                        <p>For this package, I am fully responsible for executing out your dream. After a thorough survey to capture your vision, I will send requests for final approval on things
			 like inivitation design, and decoration selection, while offering panels of vendors to choose from to fill the gaps in my talents like photographers and caterers.</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <p>Reviewing all vendor contracts, if desired</p>
                            </li>
                            <li>
                                <p>Full development of the wedding theme you have chosen</p>
                            </li>
                            <li>
                                <p>Attending vendor appointments, if desired</p>
                            </li>
                            <li>
                                <p>Handling follow-ups with all vendors</p>
                            </li>
                            <li>
                                <p>Complimentary Consultation Meeting to Discuss Vision</p>
                            </li>
                            <li>
                                <p>Vendor & Venue Recommendations</p>
                            </li>
                            <li>
                                <p>Main Point of Contact for All Vendors</p>
                            </li>
                            <li>
                                <p>Unlimited Communication (Either through text, phone, email, or in person)</p>
                            </li>
                            <li>
                                <p>Planning Timeline</p>
                            </li>
                            <li>
                                <p>Custom Design Vision Board</p>
                            </li>
                            <li>
                                <p>Budgeting Spreadsheet (To Be Updated Bi-weekly)</p>
                            </li>
                            <li>
                                <p>Event Rehearsal & On-site Coordination (Including Provision of Wedding Emergency Kit)</p>
                            </li>
                            <li>
                                <p>Custom Wedding Day Itinerary, Floor Plans, Checklists and other Documents </p>
                            </li>
                            <li>
                                <p>Access to my team of well-dressed and professional Assistants for day-of execution</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="service-images-container">
                    <div><img className='image-fit' src={require("../../assets/images/Styled-2.jpg").default} alt="bouqet of flowers with the engagment ring in the center"></img></div>
                    <div><img className='image-fit' src={require("../../assets/images/Styled-28.jpg").default} alt="wedding plates and glasses setup up nicely on reception tables"></img></div>
                </div>
            </section>
            <div>
                <h2>book now</h2>
            </div>
            <section className="service-section">
                <div className="service-images-container">
                    <div><img className='image-fit' src={require("../../assets/images/Styled-5.jpg").default} alt="bride heels, wedding dress, woodwoven tiara, and wedding ring showcase from birds eye view"></img></div>
                    <div><img className='image-fit' src={require("../../assets/images/Styled-14.jpg").default} alt="bride and groom holding hands"></img></div>
                </div>
                <div className="service-details-left">
                    <div>
                        <h1 className="align-text-right">Partial Planning</h1>
                        <p>For this package, I act as your support system, guiding you to which decisions are top priority and assisting where it is needed, making reccomendations but letting you take control.</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <p>Reviewing all vendor contracts, if desired</p>
                            </li>
                            <li>
                                <p>Handling follow-ups with all vendors</p>
                            </li>
                            <li>
                                <p>Complimentary Consultation Meeting to Discuss Vision</p>
                            </li>
                            <li>
                                <p>Vendor & Venue Recommendations</p>
                            </li>
                            <li>
                                <p>Unlimited Communication (Either through text, phone, email, or in person)</p>
                            </li>
                            <li>
                                <p>Custom Design Vision Board</p>
                            </li>
                            <li>
                                <p>Budgeting Spreadsheet (To Be Updated Bi-weekly), if desired</p>
                            </li>
                            <li>
                                <p>Event Rehearsal & On-site Coordination (Including Provision of Wedding Emergency Kit)</p>
                            </li>
                            <li>
                                <p>Custom Wedding Day Itinerary, Floor Plans, Checklists and other Documents</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div>
                <h2>book now</h2>
            </div>
            <section className="service-section">
                <div>
                    <div className="service-details-container">
                        <h1>Day of Coordination</h1>
                        <p>This package is to give you full support for the day of the event. I work from two weeks out where I get to know your vision, your vendors, and ensure the day goes as perfectly as you had hoped!</p>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <p>Complimentary Consultation Meeting to Discuss Vision</p>
                            </li>
                            <li>
                                <p>Handling follow-ups with all vendors </p>
                            </li>
                            <li>
                                <p>Vendor & Venue Recommendations if required</p>
                            </li>
                            <li>
                                <p>Main Point of Contact for All Vendors Day-of</p>
                            </li>
                            <li>
                                <p>Unlimited Communication (Either through text, phone, email, or in person)</p>
                            </li>
                            <li>
                                <p>Event Rehearsal & On-site Coordination (Including Provision of Wedding Emergency Kit)</p>
                            </li>
                            <li>
                                <p>Custom Wedding Day Itinerary, Floor Plans, Checklists and other Documents</p>
                            </li>
			    <li>
				<p>Professional and Well-dressed assistants (if needed) are at an additional charge</p>
			    </li>
                        </ul>
                    </div>
                </div>
                <div className="service-images-container">
                    <div><img className='image-fit' src={require("../../assets/images/Styled-59.jpg").default} alt="bride cutting the wedding cake"></img></div>
                    <div><img className='image-fit' src={require("../../assets/images/Styled-5.jpg").default} alt="just the bride shoes, dress, wedding ring and crown"></img></div>
                </div>
            </section>
            <div>
                <h2>book now</h2>
            </div>
        </div>
    )
}

export default Services;
