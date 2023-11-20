import React from 'react';
// Import any additional assets or components you need

function About() {
    return (
        <div className="about-section">
            <h1>About Little Lemon</h1>
            <p>Welcome to Little Lemon, a place where culinary excellence meets the essence of Mediterranean flavors. Founded in [Year], we have been committed to providing our guests with a unique dining experience, offering traditional recipes with a modern twist.</p>
            
            {/* Include more paragraphs, images, or other components as needed */}
            
            <div className="about-image">
                <img src="path_to_about_image.jpg" alt="About Little Lemon" />
                {/* Adjust the path to your image */}
            </div>

            <p>Our mission is to bring the warmth and richness of the Mediterranean kitchen to your table. With ingredients sourced from the finest suppliers, every dish we serve is prepared with care and passion.</p>

            {/* More content about your team, your values, your journey, etc. */}
        </div>
    );
}

export default About;

