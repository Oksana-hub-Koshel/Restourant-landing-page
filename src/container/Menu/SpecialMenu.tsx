import React from 'react';
import './SpecialMenu.css';
import {images, data} from "../../constants"
import SubHeading from "../../components/SubHeading/SubHeading";
import {BrowserRouter} from "react-router-dom";
import Button from "../../components/Button/Button";
import MenuItem from "../../components/Menuitem/MenuItem";

export interface IProps{
    title:string,
    tags:string,
    price:string
}

const SpecialMenu = () => (
    <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
            <SubHeading title={"Menu that fits you pallete"}/>
            <h1 className="headtext__cormorant">Today's Special</h1>
        </div>
        <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu-wine flex__center">
                <p className="app__specialMenu-menu-heading">Wine & Beer</p>
                <div className="app__specialMenu-menu-items">
                    {data.wines.map((wine:IProps, index)=> {
                        return(
                          <MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags}/>
                        )
                    })}
                </div>
            </div>
            <div className="app__specialMenu-menu-img">
                <img src={images.menu}/>
            </div>

                <div className="app__specialMenu-menu-cocktails flex__center">
                    <p className="app__specialMenu-menu-heading">Coctails</p>
                    <div className="app__specialMenu-menu-items">
                        {data.cocktails.map((cocktail:IProps, index)=> {
                            return(
                                <MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
                            )
                        })}
                    </div>
                </div>

    </div>
        <div style={{marginTop:"15px"}}>
            <Button onClick={()=>{}}>View More</Button>
        </div>
    </div>
);

export default SpecialMenu;
