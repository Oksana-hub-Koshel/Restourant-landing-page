import React from 'react';
import {SubHeading} from "../../components"
import {images} from "../../constants"
import Button from "../../components/Button/Button";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding">
<div className="app__wrapper_info">
    <SubHeading title={"Contact"} />
    <h1 className="headtext__cormorant" style={{marginBottom:"3rem"}}>Find Us</h1>
    <div className="app__wrapper-content" style={{marginBottom:"2rem"}} >
        <p className="p__opensans">Lane Ends Bungalow, Wracraft Hall Lane, Rudheart CW TR</p>
        <p className="p__cormorant" style={{color:"#DCCA87", margin: "2rem 0"}}>Opening Hours:</p>
        <p className="p__opensans">Mon-Fri: 10am-02am</p>
        <p className="p__opensans" >Sat-Sun: 10am-03am</p>
    </div>
    <Button onClick={()=>{}}>Visit Us</Button>
</div>
<div className="app__wrapper_img">
    <img src={images.findus} alt="find us"/>
</div>
  </div>
);

export default FindUs;
