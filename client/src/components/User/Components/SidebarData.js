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
        cName: 'navm-text'
    },
    {
        title: 'Library',
        path: '/user/library',
        icon: <FaIcons.FaImages />,
        cName: 'navm-text'
    },
    {
        title: 'Orders',
        path: '/user/orders',
        icon: <IoIcons.IoIosPaper />,
        cName: 'navm-text'
    },
    {
        title: 'Settings',
        path: '/user/settings',
        icon: <IoIcons.IoMdSettings />,
        cName: 'navm-text'
    },
    {
        title: 'Questions',
        path: '/user/questions',
        icon: <FiIcons.FiHelpCircle />,
        cName: 'navm-text'
    },

]