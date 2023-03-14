import React from 'react';
import {images} from "../../constants";


type TitleProps={
    title:string
}

const SubHeading = ({title}:TitleProps) => (
  <div style={{marginBottom:"1rem"}}>
 <p className="p__cormorant" >{title}</p>
      <img src={images.spoon} className="spoon_img" style={{height:"20"}}/>
  </div>
);

export default SubHeading;
