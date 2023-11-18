import logo from './assets/Logo.jpg';


function Header() {
    return (
      <header>
        <img src={logo} alt="Little Lemon Logo" className='logo'/>
        {/* Other header content */}
      </header>
    );
}
export default Header;