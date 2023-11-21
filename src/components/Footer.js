import React from 'react';
import logo from '../assets/Logo.jpg';
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer({onReservationClick }) {
    return (
      <footer>
        <section>
          <div className='company-info'>
              <img src={logo} alt="Little Lemon Logo" />
              <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>
          <div className="footer-navigation">
          <h3>Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/order">Order Online</a></li>
              <li><a href="/login">Sign-up/Login</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <ul>
              <li>Address: <br/> 123 Lemon Street, Chicago IL </li>
              <li>Phone: <br/> (123) 456-7890</li>
              <li>Email: <br/> contact@littlelemon.com</li>
              <li>Hours: <br/> 11am-3pm, 5pm-10pm</li>
            </ul>
          </div>

          <div className="footer-social">
          <h3>Socials</h3>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <TiSocialTwitter />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
            </a>
          </div>
        </section>
      </footer>
    );
  }

export default Footer;
