import React from 'react';

import './Chef.css';
import {images} from "../../constants"
import SubHeading from "../../components/SubHeading/SubHeading";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
  <div className="app__wrapper_img app__wrapper_img_reverse">
      <img src={images.chef} alt="chef"/>
  </div>
      <div className="app__wrapper_info">
          <SubHeading title={"Chief's World"} />
          <h1 className="headtext__cormorant">What We Believe In</h1>
          <div className="app__chef-content">
              <div className="app__cheif-content-guote">
                  <img src={images.quote}/>
                  <p className="p__opensans">
                      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
                  </p>
              </div>
              <p className="p__opensans">
                  Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum."
              </p>
          </div>
          <div className="app__cheif-sign">
<p>Kevin Luo</p>
              <p className="p__opensans">
                  Chef & Founder
              </p>
              <img src={images.sign}/>
          </div>
      </div>
  </div>
);

export default Chef;
