import React from "react";
import { NavLink } from "react-router-dom";
import "./Toggle.css";
// import Logo from '../../Images/TripThrill-Logo-1.png';
import { slide as Menu } from 'react-burger-menu';
 
 class NavBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <>
      <Menu right >
        <NavLink id="homestay" className="menu-item" to="/homestay">  <i class="fas fa-home"> </i>  &nbsp;Home Stay</NavLink>
        <NavLink id="blog" className="menu-item" to="/blog"> <i class="fas fa-map-marker-alt"></i>  &nbsp; Locations</NavLink>
        <NavLink id="about" className="menu-item" to="/about"> <i class="fas fa-address-card"></i>  &nbsp;About us</NavLink>
        <NavLink id="contact" className="menu-item" to="/contact"> <i class="fas fa-book"></i>  &nbsp;Trip Dairy</NavLink>
        {/* <a id="contact" className="menu-item" href="/s">Login</a> */}
      </Menu>
      </>
    );
  }
}
export default NavBar;