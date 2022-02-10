import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeBtn from './ThemeBtn';

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <div className="navbar-left">
         <i className="fas fa-laptop-code"></i>
        <h1>Web Agency</h1>
        <NavLink exact to='/' className='nav-link' activeClassName='nav-link-active'>Home</NavLink>
        <NavLink to='/about' className='nav-link' activeClassName='nav-link-active'>Our Web Agency</NavLink>
        <NavLink to='/works' className='nav-link' activeClassName='nav-link-active'>Projects</NavLink>
      </div>
      <ThemeBtn/>
    </div>
  );
};

export default Navbar;