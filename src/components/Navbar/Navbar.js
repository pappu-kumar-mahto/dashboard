import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { IconContext } from 'react-icons';
import { useDispatch,useSelector } from 'react-redux'
import {toggleState } from '../../features/toggleSlice'
import './Navbar.css';
function Navbar() {
  const dispatch = useDispatch()
  const {toggleStatus: status} = useSelector((state)=> state.toggle)
  
  const showSidebar = () => dispatch(toggleState())

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to='#' className='menu-bar'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={status ? 'nav-menu active': 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bar'>
                <AiIcons.AiOutlineClose/>
              </Link>
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
