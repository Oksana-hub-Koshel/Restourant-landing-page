import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import { Link, animateScroll as scroll } from "react-scroll";

import {Register} from "../../container/Authorization/Register/Register";




const Navbar = () => {
    const [toogleMenu, setToogleMenu] = useState(false);
    const  [modal, setModal]=useState(false)

    const  scrollToTop = () => {
        scroll.scrollToTop();
    };
  return (
    <nav className="app__navbar">
      <div className="app_logo" onClick={scrollToTop} >
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className="app_navbar_links">
        <li className="app_links">
          <Link to="home"  spy={true}   smooth={true}  duration={500}>Home</Link>
        </li>
        <li className="app_links">
          <Link to="about"  spy={true} smooth={true}  duration={500}   offset={100}>About</Link>
        </li>
        <li className="app_links">
          <Link to="menu"  spy={true} smooth={true}  duration={500} offset={30}>Menu</Link>
        </li>
        <li className="app_links">
          <Link to="award"  spy={true} smooth={true}  duration={500}>Award</Link>
        </li>
          <li className="app_links">
              <Link to="contacts"  spy={true} smooth={true}  duration={500}  offset={-100}>Contacts</Link>
          </li>
      </ul>
      <div className="log_link_block">
          {modal &&  <Register  onClose={()=>setModal(false)} />}
          <a onClick={()=> setModal(true)}>Login / Register</a>

          <div />
        <Link to="/book" className="book_table">
          Book table
        </Link>
      </div>

      <div className="app__navbar_smallscreen">
        <GiHamburgerMenu
          color="white"
          fontSize={27}
          onClick={() => {
            setToogleMenu(true);
          }}
        />

        {toogleMenu && (
          <div className="app__navbar_smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="close_overlay"
              onClick={() => {
                setToogleMenu(false);
              }}
            />
            <ul className="app_navbar_smallscreen_links">
              <li className="app_links">
                <Link to="/home">Home</Link>
              </li>
              <li className="app_links">
                <Link to="/about">About</Link>
              </li>
              <li className="app_links">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="app_links">
                <Link to="/award">Award</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
