import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app_logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className="app_navbar_links">
        <li className="app_links">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="app_links">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="app_links">
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li className="app_links">
          <NavLink to="/award">Award</NavLink>
        </li>
      </ul>
      <div className="log_link_block">
        <NavLink to="/login" className="log_link">
          Log In / Register
        </NavLink>
        <div />
        <NavLink to="/book" className="book_table">
          Book table
        </NavLink>
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
                <NavLink to="/home">Home</NavLink>
              </li>
              <li className="app_links">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="app_links">
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li className="app_links">
                <NavLink to="/award">Award</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
