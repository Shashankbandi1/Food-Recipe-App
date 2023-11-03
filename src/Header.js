import React from 'react';
import "./Styles.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header' >
      <h2>Food Receipe App</h2>
        <div className='primary-nav'>
          <div>About</div>
          <div><Link to="/About">Contact</Link></div>
          <div><Link to="/contact">Contact</Link></div>
        </div>
    </div>
  )
}

export default Header;