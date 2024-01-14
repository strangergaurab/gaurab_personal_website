import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <Link className="desktopMenuListName">Gaurab Shrestha</Link>
      <div className="desktopMenu">
        <Link className="desktopMenuListItem" to="/">Home</Link>
        <Link className="desktopMenuListItem" to="/About">About</Link>
        <Link className="desktopMenuListItem">Resume</Link>
        <Link className="desktopMenuListItem">Interest</Link>
        <Link className="desktopMenuListItem">Portofolio</Link>
        <Link className="desktopMenuListItem">Research/Publication</Link>
        <Link className="desktopMenuListItem" to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;