// src/CustomersSay.js
import React from 'react';

const CustomersSay = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      review: 'Amazing food and great service! The Mediterranean flavors are authentic and delicious.',
      avatar: './little-lemon-restaurant/images/customer1.jpg'
    },
    {
      id: 2,
      name: 'Mike Chen',
      rating: 5,
      review: 'Best restaurant in Chicago! The atmosphere is perfect for family dining.',
      avatar: './little-lemon-restaurant/images/customer2.jpg'
    },
    {
      id: 3,
      name: 'Emma Davis',
      rating: 4,
      review: 'Love coming here for special occasions. The lemon dessert is to die for!',
      avatar: './little-lemon-restaurant/images/customer3.jpg'
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">What our customers say!</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <article key={testimonial.id} className="testimonial-card">
            <div className="rating" aria-label={`${testimonial.rating} stars out of 5`}>
              {renderStars(testimonial.rating)}
            </div>
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="customer-avatar"
            />
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.review}"</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomersSay;