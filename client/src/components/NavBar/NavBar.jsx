/* eslint-disable  */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/auth';
import { setMenu } from '../../redux/actions/request';
import { useSelector, useDispatch } from 'react-redux';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';

import '../../scss/components/_navBar.scss';

function NavBar() {
	const dispatch = useDispatch();
	const { currentUser } = useSelector((store) => store.auth);
	const shoppingCart = useSelector((state) => state.reducerShoppingCart.shoppingCart);
	const { menu } = useSelector((store) => store.reducerLoading);

	function handleLogOut() {
		dispatch(logout());
		location.assign('http://localhost:3000');
	}

	const showSidebar = () => {
		dispatch(setMenu(!menu));
	};

	useEffect(() => {}, [currentUser]);

	return (
		<nav className="navbar">
			<div className="navleft">
				<Link to="#" className="sandwich">
					{menu ? (
						<HiIcons.HiChevronDoubleLeft onClick={showSidebar} className="iconmenu" />
					) : (
						<FaIcons.FaBars onClick={showSidebar} className="iconmenu" />
					)}
				</Link>
				<ul className="nav-buttons_navigation">
					<Link className="nav-link" to="/">
						<li>Home</li>
					</Link>
					<Link className="nav-link" to="/Browser/products">
						<li>Find Art</li>
					</Link>
					<Link to="/about">
						<li>About Us</li>
					</Link>
				</ul>
			</div>
			<div className="nav-buttons_authentication">
				{currentUser?.profilePic ? (
					<div className="navbarProfilePic">
						<Link to="/user/profile">
							<img src={currentUser.profilePic} type="file" alt="profilePic" />
						</Link>
					</div>
				) : null}

				<ul className="Icon-Cart">
					<Link to="/checkout">
						<i className="fas fa-shopping-cart ">{shoppingCart.length > 0 && shoppingCart.length}</i>
					</Link>
				</ul>
				{currentUser?.name ? (
					<button type="button" className="signin--btn logout" onClick={handleLogOut}>
						Log out
					</button>
				) : (
					<>
						<Link to="/signin">
							<button className="signin--btn btn-primary" type="button">
								Sign in
							</button>
						</Link>
						<Link to="/register">
							<button className="signin--btn btn-secondary" type="button">
								Sign up
							</button>
						</Link>
					</>
				)}
			</div>
		</nav>
	);
}

export default NavBar;
