// src/Specials.js
import React from 'react';
import { Link } from 'react-router-dom';

const Specials = () => {
  const specialsData = [
    {
      id: 1,
      title: 'Greek Salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: './little-lemon-restaurant/images/greek salad.jpg'
    },
    {
      id: 2,
      title: 'Bruchetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: './little-lemon-restaurant/images/bruchetta.jpg'
    },
    {
      id: 3,
      title: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: './little-lemon-restaurant/images/lemon dessert.jpg'
    }
  ];

  return (
    <section className="specials" aria-labelledby="specials-heading">
      <div className="specials-header">
        <h2 id="specials-heading">This weeks specials!</h2>
        <Link 
          to="/menu" 
          className="menu-button"
          aria-label="View full menu"
        >
          Online Menu
        </Link>
      </div>
      <div className="specials-grid">
        {specialsData.map(special => (
          <article key={special.id} className="special-card">
            <img 
              src={special.image} 
              alt={special.title}
              className="special-image"
            />
            <div className="special-content">
              <div className="special-header">
                <h3>{special.title}</h3>
                <span className="price">{special.price}</span>
              </div>
              <p>{special.description}</p>
              <Link 
                to="/order" 
                className="order-link"
                aria-label={`Order ${special.title}`}
              >
                Order a delivery
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specials;