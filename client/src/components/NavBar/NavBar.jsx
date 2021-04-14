import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/_navBar.scss';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-buttons_navigation">
        <Link className="nav-link" to="/"><li>Home</li></Link>
        <Link className="nav-link" to="/Browser/products"><li>Find Art</li></Link>
        <li>About Us</li>
      </ul>
      <div className="nav-buttons_authentication">
        <ul className="nav-buttons_navigation">
          <Link className="nav-link" to="/Admin"><li>Dashboard Admin</li></Link>
        </ul>
        <Link className="link-btn-secondary" to="/signin"><button className="btn-secondary" type="button">Sign in</button></Link>
        <button className="btn-primary" type="button">Sign up</button>
      </div>
    </nav>
  );
}

export default NavBar;
