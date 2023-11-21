import React from 'react';
import aboutimg1 from '../assets/aboutimg1.jpg';
import aboutimg2 from '../assets/aboutimg2.jpg';

function About() {
    return (
        <div className="about-section">
            <div className="grid-container">
                <div className="text-column">
                    <h1>About Little Lemon</h1>
                    <p>Welcome to Little Lemon, a place where culinary excellence meets the essence of Mediterranean flavors. Founded in 2010, we have been committed to providing our guests with a unique dining experience, offering traditional recipes with a modern twist.</p>
                </div>
                <div className="images-column">
                    <img src={aboutimg1} alt="About Little Lemon1" className='img1' />
                    <img src={aboutimg2} alt="About Little Lemon2" className='img2'/>
                </div>
            </div>
            <p>Our mission is to bring the warmth and richness of the Mediterranean kitchen to your table. With ingredients sourced from the finest suppliers, every dish we serve is prepared with care and passion.</p>
        </div>
    );
}

export default About;


