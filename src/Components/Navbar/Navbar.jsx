import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import {Link} from 'react-scroll';
import conimg from '../../assets/contact.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <img src={logo} className="logo" alt="Logo" /> */}
      <Link className="desktopMenuListName">Gaurab Shrestha</Link>
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Resume</Link>
        <Link className="desktopMenuListItem">Interest</Link>
        <Link className="desktopMenuListItem">Portofolio</Link>
        <Link className="desktopMenuListItem">Research/Publication</Link>
        <Link className="desktopMenuListItem">Contact</Link>
     {/* <img src={conimg} alt="" className="desktopMenuImg"/>  */}
      </div>

    </nav>
  );
};

export default Navbar;