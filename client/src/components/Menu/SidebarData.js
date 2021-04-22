/*eslint-disable*/
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi'

export const SidebarData = [
    {
        title: 'Profile',
        path: '/user',
        icon: <AiIcons.AiFillHome />,
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
        title: 'Orders',
        path: '/user/orders',
        icon: <IoIcons.IoIosPaper />,
        cName: 'navm-text',
        belong: [101]
    },
    {
        title: 'Settings',
        path: '/user/settings',
        icon: <IoIcons.IoMdSettings />,
        cName: 'navm-text',
        belong: [101],
    },
    {
        title: 'Questions',
        path: '/user/questions',
        icon: <FiIcons.FiHelpCircle />,
        cName: 'navm-text',
        belong: [102,101]
    },
    {
        title: 'Products',
        path: '/admin/Product',
        icon: <AiIcons.AiFillHome />,
        cName: 'navm-text',
        belong: [100]
    },
    {
        title: 'Orders',
        path: '/admin/Order',
        icon: <FaIcons.FaImages />,
        cName: 'navm-text',
        belong: [100]
    },
    {
        title: 'Authors',
        path: '/admin/Author',
        icon: <IoIcons.IoIosPaper />,
        cName: 'navm-text',
        belong: [100]
    },
    {
        title: 'Categories',
        path: '/admin/Category',
        icon: <IoIcons.IoMdSettings />,
        cName: 'navm-text',
        belong: [100]
    },
    {
        title: 'Users',
        path: '/admin/User',
        icon: <FiIcons.FiHelpCircle />,
        cName: 'navm-text',
        belong: [100]
    },

]