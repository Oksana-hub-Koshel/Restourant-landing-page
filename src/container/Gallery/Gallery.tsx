import React, {MutableRefObject, useRef} from 'react';

import './Gallery.css';
import {images} from "../../constants"
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort } from  "react-icons/bs";
import SubHeading from "../../components/SubHeading/SubHeading";
import Button from "../../components/Button/Button";

const galleryImages=[images.gallery01, images.gallery02, images.gallery03]

const Gallery = () => {
    const scrollRef:React.MutableRefObject<any>=useRef(null)

    const scroll=(direction:string)=>{
        const {current}=scrollRef

        if(direction==="left"){
            current.scrollLeft -=300;
        }
        else{
            current.scrollLeft +=300
        }
    }

    return(
        <div className="app__gallery flex__center">
<div className="app__gallery-content">
    <SubHeading title={"Instagram"} />
    <h1 className="headtext__cormorant"> Photo Gallery</h1>
    <p className="p__cormorant" style={{color:"#AAA", marginTop:"2rem", marginBottom:"2rem"}}>Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore</p>
    <Button onClick={()=>{}} >View More</Button>
</div>
            <div className="app__gallery-images">
                <div className="app__gallery-images-container" ref={scrollRef}>
                    {galleryImages.map((image, index)=>{
                        return(
                            <div className="app__gallery-images-card flex__center" key={index}>
                                <img src={image}/>
                                <BsInstagram className="gallery__image-icon" />
                            </div>
                            )

                    })}
                </div>
                <div className="app__gallery-images-arrow">
                    <BsArrowLeftShort className="gallery__arrow-icon" onClick={()=>scroll("left")} />
                    <BsArrowRightShort className="gallery__arrow-icon" onClick={()=>scroll("right")} />
                </div>
            </div>

        </div>
    )
}



export default Gallery;
