import React from 'react';
import './Navbar.css'; 
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const path = useLocation().pathname;
  return (
    <>
    <nav>
      <div className="logo"><Link to="/">Zonix</Link></div>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="search-button">
      <button>Search</button>
      </div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      <button className="signin-button"><Link to="/sign-in">SignIn</Link></button> 
    </nav> 
    <div className="options">
       <ul className="menu2">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      </div>
    </>
  );
}

export default Navbar;
