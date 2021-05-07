/*eslint-disable*/
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import * as CgIcons from 'react-icons/cg';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'Profile',
        path: '/user/profile',
        icon: <CgIcons.CgProfile />,
        cName: 'navm-text',
        belong: [100,101]
    },
    {
        title: 'Library',
        path: '/user/library',
        icon: <FaIcons.FaImages />,
        cName: 'navm-text',
        belong: [101]
    },
    {
        title: 'Wishlist',
        path: '/user/wishlist',
        icon: <FaIcons.FaHeart />,
        cName: 'navm-text',
        belong: [101]
    },
    {
        title: 'Orders',
        path: '/user/orders',
        icon: <IoIcons.IoIosPaper />,
        cName: 'navm-text',
        belong: [101]
    },
    // {
    //     title: 'Questions',
    //     path: '/user/questions',
    //     icon: <FiIcons.FiHelpCircle />,
    //     cName: 'navm-text',
    //     belong: [102,101]
    // },
    {
        title: 'Products',
        path: '/admin/Product',
        icon: <FaIcons.FaImages />,
        cName: 'navm-text',
        belong: [100]
    },
    {
        title: 'Orders',
        path: '/admin/Order',
        icon: < IoIcons.IoIosPaper />,
        cName: 'navm-text',
        belong: [100]
    },
    {
        title: 'Authors',
        path: '/admin/Author',
        icon: <GiIcons.GiAstronautHelmet />,
        cName: 'navm-text',
        belong: [100]
    },
    {
        title: 'Categories',
        path: '/admin/Category',
        icon: <AiIcons.AiFillBook />,
        cName: 'navm-text',
        belong: [100]
    },
    {
        title: 'Users',
        path: '/admin/User',
        icon: <RiIcons.RiAdminFill />,
        cName: 'navm-text',
        belong: [100]
    },

]