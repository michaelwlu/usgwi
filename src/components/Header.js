import React from 'react';
import '../stylesheets/header.css';

const Header = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">
        <i class="fas fa-cloud" />
        {' '}
        Weather App
      </span>
    </nav>
  )
}

export default Header;
