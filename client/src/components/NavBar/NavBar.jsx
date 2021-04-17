/* eslint-disable  */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/auth'
import '../../scss/components/_navBar.scss';

function NavBar() {
  const dispatch = useDispatch()
  const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
  const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);

  function handleLogOut() {
    dispatch(logout())
    location.assign("http://localhost:3000")
  }

  return (
    <nav className="navbar">
      <ul className="nav-buttons_navigation">
        <Link className="nav-link" to="/">
          <li>Home</li>
        </Link>
        <Link className="nav-link" to="/Browser/products">
          <li>Find Art</li>
        </Link>
        <li>About Us</li>
      </ul>
      <div className="nav-buttons_authentication">
        <ul className="Icon-Cart">
          <Link to="/checkout">
            <i className="fas fa-shopping-cart ">{shoppingCart.length > 0 && shoppingCart.length}</i>
          </Link>
        </ul>
        {currentUser?.roleId === 100 ? <ul className="nav-buttons_navigation">
          <Link className="nav-link" to="/Admin">
            <li>Dashboard Admin</li>
          </Link>
        </ul> : <span></span>
        }
        {
          currentUser ?
            <button type="button" onClick={handleLogOut}>Log Out</button>
            :
            <>
              <Link className="link-btn-secondary" to="/signin">
                <button className="btn-secondary" type="button">Sign in</button>
              </Link>
              <Link className="link-btn-secondary" to="/register">
                <button className="btn-primary" type="button">Sign up</button>
              </Link>
            </>
        }
      </div>
    </nav>
  );
}

export default NavBar;
