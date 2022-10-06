import React from 'react';
import './footer-styling.css';
import { Link } from 'react-router-dom';

function Footer(props){

    return(
        <footer>
            <section>
                <div>
                    <h3><Link to={"./Contact"}>Book Now</Link></h3>
                </div>
                
                
            </section>
            <section>
                <>
                    <script src="https://apps.elfsight.com/p/platform.js" defer></script>
                    <div class="elfsight-app-b59ea761-94d3-4aff-9617-0d2bbc769ccc"></div>
                </>
            </section>
            <section>
                <h3>Follow</h3>
                <div className="social-logo-group">
                    <a href="https://www.instagram.com/madetoloveevents/"><img className='image-fit' src={require("../../assets/images/instagram.svg").default}/></a>
                </div>
            </section>
            

        </footer>
    )
}

export default Footer;
