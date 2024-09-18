// Header.js
import React from 'react';
import Button from './Button';

const SignUp = () => {
  return (
    <div className='header'>
      <h2>Sign up for daily insider</h2>
      <input className='searchbar' type="text" placeholder="Search" />
      <Button type="button" text="Submit" className="submit" />
    </div>
  );
};

export default SignUp;
