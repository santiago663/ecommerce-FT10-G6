/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai'
import { setMenu } from '../../redux/actions/request'
import { logout } from '../../redux/actions/auth';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import '../../scss/components/_menu.scss';

function Menu() {
    const [rol, setRol] = useState(102)
    const dispatch = useDispatch()
    const { menu } = useSelector((store) => store.reducerLoading)
    const { currentUser } = useSelector((store) => store.auth)

    useEffect(() => {
        if (currentUser?.roleId) {
            setRol(currentUser.roleId)
        }
    }, [currentUser])

    useEffect(() => {
    }, [menu])

    const toggleMenu = (num) => {
        dispatch(setMenu(num))
    }

    function handleLogOut() {
        dispatch(logout())
        location.assign(process.env.REACT_APP_FRONT_URL);
    }

    return (
        <>
            <IconContext.Provider value={{ color: ' #19f9a4 ' }}>
                <nav className={menu === "1" ? 'navmenu active' :
                    menu === "0" ? 'navmenu' :
                        menu === "2" ? 'navmenu mini' :
                            null}>
                    <ul className='navmenu-items'>
                        {SidebarData.map((item, index) => {
                            if (item.belong.includes(rol)) {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            }
                        })}
                        <div className={menu === "1" ? "max-min" : "max-min active"}>
                            {menu === "1" ? <FiIcons.FiMinimize2 className='iconmenu' onClick={() => toggleMenu("2")} /> :
                                menu === "2" ? <FiIcons.FiMaximize2 className='iconmenu' onClick={() => toggleMenu("1")} /> : null}

                        </div>
                        {
                            currentUser?.name ?
                                <button
                                    type="button"
                                    className={menu === "1" ? "signin--btn" : "sign--off"}
                                    onClick={handleLogOut}>{menu === "1" ? <span> Log out</span> : <AiIcons.AiOutlinePoweroff />}
                                </button>
                                :
                                <>
                                    <Link to="/signin">
                                        <button
                                            className={menu === "1" ? "signin--btn btn-primary" : "signin--btn btn-primary signLateral"}
                                            type="button">Sign in</button>
                                    </Link>
                                    <Link to="/register">

                                        <button
                                            className={menu === "1" ? "signin--btn btn-secondary" : "signin--btn btn-secondary signLateral"}
                                            type="button">Sign up</button>
                                    </Link>
                                </>
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Menu
