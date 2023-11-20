import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import bruschetta from './assets/bruschetta.jpg';
import saladImage from './assets/salad.jpg';
import dessert from './assets/dessert.jpg';
import appetizer from './assets/appetizer.jpg';

// Dummy data for specials - replace with real data or API call
const specials = [
    {
        id: 1,
        name: 'Greek Salad',
        description: 'Lorem ipsum dolor sit amet consectetur...',
        price: '$12.99',
        image: saladImage,
    },
    {
        id: 2,
        name: 'Bruschetta',
        description: 'Lorem ipsum dolor sit amet consectetur...',
        price: '$8.99',
        image: appetizer,
    },
    {
        id: 3,
        name: 'Lemoncellio',
        description: 'Lorem ipsum dolor sit amet consectetur...',
        price: '$5.00',
        image: dessert,
    },
    // ... more specials
];

function HomePage() {
    const renderSpecials = specials => {
        return specials.map(special => (
            <div key={special.id} className="special-item">
                <img src={special.image} alt={special.name} className="special-image" />
                <div className="special-info">
                    <h3>{special.name} <span className="special-price">{special.price}</span></h3>
                    <p>{special.description}</p>
                </div>
            </div>
        ));
    };

    return (
        <div>
            {/* Call to Action Section */}
            <section className="cta-section">
                <div className='cta-text'>
                    <h1>Welcome to Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Discover our delicious Mediterranean dishes and enjoy a unique dining experience.</p>
                    <Link to="/reservations" className="cta-button">Reserve Your Table</Link>
                </div>
                <div className='cta-image'>
                    <img src={bruschetta} alt="Bruschetta" />
                </div>
            </section>

            {/* Specials Section */}
            <section className="specials-section">
                <div className='specials-header'>
                    <h2>Today's Specials</h2>
                    <Link to="/menu" className="menu-link-button">View Menu</Link>
                </div>
                <div className="specials-container">
                    {renderSpecials(specials)}
                </div>
            </section>

            {/* About Section */}
            <section>
                <About />
            </section>
        </div>
    );
}

export default HomePage;
