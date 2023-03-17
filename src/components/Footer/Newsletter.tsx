import React from 'react';

import './Newsletter.css';
import SubHeading from "../SubHeading/SubHeading";
import Button from "../Button/Button";

const Newsletter = () => (
    <div className="app__newsletter">
        <div className="app__newsletter-heading">
            <SubHeading title={"Newsletter"}/>
            <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
            <p className="p__opensans">And never miss latest Updates</p>
        </div>
        <div className="app__newsletter-input flex__center">
<input type="email" placeholder="Enter Your Email"/>
            <Button onClick={()=>{}}>Subscribe</Button>
        </div>
    </div>
);

export default Newsletter;
