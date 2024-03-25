import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
        <p>&copy; 2024 Zonix Blogs. All rights reserved.</p>
        <p>Bookmark us</p>
        <div className="social-icons">
            <li><Link to="/about">About</Link></li>
        </div>
    </div>
</footer>
  );
}
