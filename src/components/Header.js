import React from 'react';
import {Link} from 'react-router-dom'
import bannerImg from '../assets/bannerImg.jpg'


const Header =()=> {
  return (
      <header className='header'>
        <section>
            {/*banner*/}
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterraneran restaurant, <br/> focused on traditional receipes served with a <br/>modern twist.</p>
                <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
            </div>
            {/*banner image */}
            <div className='banner-img'>
                <img src={bannerImg} alt='banner-image' />
            </div>
        </section>
      </header>
  );
}

export default Header;
