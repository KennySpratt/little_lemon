import logo from './assets/Logo.jpg';
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer({onReservationClick }) {
    return (
      <footer>
        <div>
            <img src={logo} alt="Little Lemon Logo" />
        </div>
        <div className="footer-navigation">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="#" onClick={onReservationClick}>Reservations</a></li>
            <li><a href="/order">Order</a></li>
            <li><a href="/login">Sign-up/Login</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <p>Address: 123 Lemon Street, Chicago IL </p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@littlelemon.com</p>
          <p>Hours: 11am-3pm, 5pm-10pm</p>
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
      </footer>
    );
  }

export default Footer;
