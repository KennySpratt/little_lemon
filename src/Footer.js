function Footer() {
    return (
      <footer>
        <div className="footer-navigation">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <p>Address: 123 Lemon Street, Chicago IL </p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@littlelemon.com</p>
        </div>
  
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </footer>
    );
  }
  
export default Footer;
  