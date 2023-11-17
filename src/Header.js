import logo from './assets/Logo.jpg'; // Adjust the path as necessary


function Header() {
    return (
      <header>
        <img src={logo} alt="Little Lemon Logo" />
        {/* Other header content */}
      </header>
    );
}
export default Header;