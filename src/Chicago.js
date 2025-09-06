// src/Chicago.js
import React from 'react';

const Chicago = () => {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="about-content">
        <h2 id="about-heading">Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
          Despite the city's diversity, the two brothers recognized the lack of 
          authentic Mediterranean cuisine in Chicago, and were inspired to bring 
          the flavors of their homeland to the people of their adopted city.
        </p>
        <p>
          Today Little Lemon is a cherished culinary landmark in Chicago, 
          known for its warm hospitality, vibrant atmosphere, and unforgettable 
          Mediterranean dishes crafted from the finest ingredients.
        </p>
      </div>
      <div className="about-images">
        <img 
          src="./little-lemon-restaurant/images/Mario and Adrian A.jpg" 
          alt="Mario and Adrian, the founders of Little Lemon"
          className="founder-image"
        />
        <img 
          src="./little-lemon-restaurant/images/Mario and Adrian b.jpg" 
          alt="Mario and Adrian cooking in the Little Lemon kitchen"
          className="founder-image"
        />
      </div>
    </section>
  );
};

export default Chicago;