import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className='left-section'>
         <p>&copy; 2024 Vueinfo. All rights reserved.</p>
        <p>Bookmark us</p>
        <p>For Queries : </p>
          <p>contact: vigneshyadav3337@gmail.com</p>
      </div>
        <div className='rignt-section'>
        <p>Quick Access</p>
        <div className="social-icons">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
        </div>
        </div>
    </div>
</footer>
  );
}
