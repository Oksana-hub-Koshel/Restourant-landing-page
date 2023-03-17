import React from 'react';
import {FiInstagram, FiTwitter, FiFacebook} from "react-icons/fi";
import './Footer.css';
import FooterOverlay from "../../components/Footer/FooterOverlay";
import Newsletter from "../../components/Footer/Newsletter";
import {images} from "../../constants"

const Footer = () => (
    <div className="app__footer section__padding">
        <FooterOverlay/>
        <Newsletter/>
        <div className="app__footer-links">
            <div className="app__footer-links-contact">
<h1 className="app__footer-headtext">Contact Us</h1>
                <p className="p__opensans">New York, NY 0019, USA</p>
                <p className="p__opensans">+1 212 33 4576</p>
                <p className="p__opensans">+1 212 33 4576</p>
            </div>
            <div className="app__footer-links-logo">
                <img src={images.gericht}/>
                <p className='p__opensans'>The best to find yourself isto lose yourself in the service of others</p>
                <img src={images.spoon} className="spoon__img" style={{marginTop:"20px"}}/>
<div className="app__footer-links-icons">
    <FiFacebook/>
    <FiInstagram />
    <FiTwitter/>
</div>
            </div>
            <div className="app__footer-links-work">
                <h1 className="app__footer-headtext">Working Hours</h1>
                <p className="p__opensans">Monday-Friday</p>
                <p className="p__opensans">08am-10pm</p>
                <p className="p__opensans">Saturday-Sunday</p>
                <p className="p__opensans">09am-12am</p>
            </div>
        </div>
        <div className="app__footer-copyright">
            <p className="p__opensans">2023 Gericht. All rights reserved</p>
        </div>
    </div>
);

export default Footer;
