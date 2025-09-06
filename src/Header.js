// src/Header.js
import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <img src="./little-lemon-restaurant/images/Logo.svg" alt="Little Lemon restaurant logo" />
      <Nav />
    </header>
  );
};

export default Header;