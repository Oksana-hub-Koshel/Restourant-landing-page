import React from 'react';

import './MenuItem.css';
import {IProps} from "../../container/Menu/SpecialMenu";

const MenuItem = ({title, tags, price}:IProps) => {

    return (
        <div className="app_menuitem">
    <div className="app_menuitem-head">
        <div className="app_menuitem-name">
            <p className="p__cormorant" style={{color:"#DCCA87"}}>{title}</p>
        </div>
        <div className="app_menuitem-dash"/>
            <div className="app_menuitem-price">
                <p className="p__cormorant" >{price}</p>
            </div>
    </div>
            <div className="app_menuitem-sub">
<p className="p__opensans" style={{color:"#AAA"}}>{tags}</p>
            </div>
        </div>
    )

}

export default MenuItem;
