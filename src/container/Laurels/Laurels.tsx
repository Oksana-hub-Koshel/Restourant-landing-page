import React from 'react';

import './Laurels.css';
import {SubHeading} from "../../components"
import {images, data} from "../../constants"

interface AwardProp{
    imgUrl: string,
    title: string,
    subtitle: string
}

const AwardCard=({title,imgUrl,subtitle}:AwardProp)=>{
    return(
            <div className="app__laurels-awards-card">
                <img src={imgUrl} alt="award"/>
                <div className="app__laurels-awards-card-content">
                    <p className="p__cormorant" style={{color:"#DCCA87"}}>{title}</p>
                    <p className="p__cormorant" >{subtitle}</p>
                </div>
            </div>
            )

}
const Laurels = () => (
    <div className="app__bg app__wrapper section__padding" id="award">
        <div className="app__wrapper_info">
            <SubHeading title={"Awards & recognition"}/>
            <h1 className="headtext__cormorant">Our Laurels</h1>
            <div className="app__laurels-awards">
                {data.awards.map((award:AwardProp, index)=>{

                    return(
                        <AwardCard imgUrl={award.imgUrl} title={award.title} subtitle={award.subtitle} key={index} />
                    )
                })}
            </div>
        </div>
        <div className="app__wrapper_img">
            <img src={images.laurels}/>
        </div>
    </div>
);

export default Laurels;
