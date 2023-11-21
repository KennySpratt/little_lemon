import React from 'react';
import logo from '../assets/Logo.jpg';
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer({onReservationClick }) {
    return (
      <footer>
        <section className='footer-section'>
          <div>
            <img src={logo} alt="Little Lemon Logo" />
          </div>
          <div className="footer-navigation">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/booking">Reservations</a></li>
              <li><a href="/order">Order</a></li>
              <li><a href="/login">Sign-up</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <ul>
              <li><b>Address:</b> <br/> 123 Lemon Street, Chicago IL </li>
              <li><b>Phone:</b> <br/> (123) 456-7890</li>
              <li><b>Email:</b> <br/> contact@littlelemon.com</li>
              <li><b>Hours:</b> <br/> 11am-3pm, 5pm-10pm</li>
            </ul>
          </div>

          <div className="footer-social">
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
