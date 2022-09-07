import React from 'react'
import './Header.css'
const Header = ({heading}) => {
  return (
    <div>
          <span className='heading'>{heading}</span>
    </div>
  )
}

export default Header
