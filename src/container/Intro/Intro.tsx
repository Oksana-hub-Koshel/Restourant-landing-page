import React, {MutableRefObject, useRef, useState} from 'react';

import './Intro.css';
import {BsFillPlayFill, BsPauseFill} from "react-icons/bs";
import {meal} from "../../constants"

const Intro = () => {

    const vidRef: React.MutableRefObject<any> = React.useRef(null);
    const [playVideo, setPlayVideo]=useState(false)

    const handleVideo=()=>{
        setPlayVideo((prev)=>!prev)
        if(playVideo){
            vidRef.current.pause()
        }
        else{
            vidRef.current.play()
        }
    }

    return (
        <div className="app__video">
            <video src={meal} controls={false} muted={false} ref={vidRef}/>
            <div className="app__video-overlay flex__center">
                <div className="app__video-overlay-circle flex__center" onClick={handleVideo}>
                    {playVideo ? <BsPauseFill color="#fff" fontSize={30}/> :
                        <BsFillPlayFill color="#fff" fontSize={30}/>}
                </div>
            </div>
        </div>
    )

};

export default Intro;
