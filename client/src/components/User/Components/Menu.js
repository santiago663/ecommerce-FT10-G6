/*eslint-disable*/
import React, { Fragment, useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'
import '../../../scss/components/_menu.scss'

function Menu() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        console.log('entro')
        setSidebar(!sidebar)}

    return (
<>
    <IconContext.Provider value={{ color: ' #19f9a4 '}}>
    <div className="navbarm">
        <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={ showSidebar } className='iconmenu'/>
        </Link>
        <div className="profile-img"></div>
    </div>
    <nav className={ sidebar ? 'navmenu active' : 'navmenu'}>
        <ul className='navmenu-items'>
            <li className='navbarm-toggle'>
                <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose  onClick={ showSidebar } />
                </Link>
            </li>
            {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path} onClick={ showSidebar }>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    </IconContext.Provider>
</>
    )
}

export default Menu
