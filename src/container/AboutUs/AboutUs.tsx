import React from 'react';
import './AboutUs.css';
import {images} from "../../constants"
import Button from "../../components/Button/Button";

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center ">
            <img src={images.G}/>
        </div>
        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content-about flex__center">
                <h1 className="app__header-h1">About us</h1>
                <img src={images.spoon}/>
                <p className="p__opensans">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <Button onClick={()=>{}}>Know More</Button>
            </div>
            <div className="app_aboutus_content_knife flex__center">
                <img src={images.knife}/>
            </div>

            <div className="app__aboutus-content-history flex__center">
                <h1 className="app__header-h1">Our History</h1>
                <img src={images.spoon}/>
                <p className="p__opensans">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <Button onClick={()=>{}}>Know More</Button>
            </div>
        </div>
    </div>
);

export default AboutUs;
