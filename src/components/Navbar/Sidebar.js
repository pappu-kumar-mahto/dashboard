import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FcIcons from 'react-icons/fc';

export const Sidebar = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Employees',
    path: '/employee',
    icon: <IoIcons.IoIosPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Departments',
    path: '/department',
    icon: <FcIcons.FcDepartment />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/',
    icon: <AiIcons.AiOutlineLogin />,
    cName: 'nav-text'
  },
 
];
