// Header.js
import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <h1 style={{marginRight : 20}}>DEV@Deakin</h1>
      <input className='searchbar' type="text" placeholder="Search" />
      <button className='submit'>Post</button>
      <button className='submit'>Login</button>
    </div>
  );
};

export default Header;
