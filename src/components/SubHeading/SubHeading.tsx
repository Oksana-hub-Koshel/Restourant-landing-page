import React from 'react';
import {images} from "../../constants";


type TitleProps={
    title:string
}

const SubHeading = ({title}:TitleProps) => (
  <div style={{marginBottom:"1rem"}}>
 <p className="p__cormorant" style={{color:"black"}}>{title}</p>
      <img src={images.spoon} className="spoon_img"/>
  </div>
);

export default SubHeading;
