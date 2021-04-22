/* eslint-disable  */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/auth';
import { setMenu } from '../../redux/actions/request'
import * as FaIcons from 'react-icons/fa';
import '../../scss/components/_navBar.scss';

function NavBar() {
  const dispatch = useDispatch()
  const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
  const { menu } = useSelector((store) => store.reducerLoading)

  const showSidebar = () => {
    dispatch(setMenu(!menu))
  }

  return (
    <nav className="navbar">
      <div className="navleft">
        <Link to="#" className="sandwich">
          <FaIcons.FaBars onClick={showSidebar} className='iconmenu' />
        </Link>

        <ul className="nav-buttons_navigation">
          <Link className="nav-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="nav-link" to="/Browser/products">
            <li>Find Art</li>
          </Link>
          <li>About Us</li>
        </ul>
      </div>
      <div className="nav-buttons_authentication">
        <ul className="Icon-Cart">
          <Link to="/checkout">
            <i className="fas fa-shopping-cart ">{shoppingCart.length > 0 && shoppingCart.length}</i>
          </Link>
        </ul>
        {/* <div className="profile-img"></div> */}
      </div>
    </nav>
  );
}

export default NavBar;
