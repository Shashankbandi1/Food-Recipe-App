import React from 'react';
import "./Styles.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header' >
      <h2>Food Receipe App</h2>
        <div className='primary-nav'>
          <div><Link to="/Recipes">Recipes</Link></div>
          <div><Link to="/About">About</Link></div>
          <div><Link to="/contact">Contact</Link></div>
        </div>
    </div>
  )
}

export default Header;