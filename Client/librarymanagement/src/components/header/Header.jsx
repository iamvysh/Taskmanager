import React from 'react'
import "./Header.scss"
import "../../styles/components/_button.scss"
const Header = () => {
  return (
    <div>
      <nav className='header'>
            <div className="header__logo">
                <h5>Task Manger</h5>
            </div>
            <div className="header__buttons">
                <button className='button'>Sign In</button>
                <button className='button'>Sign Out</button>
            </div>

      </nav>
    </div>
  )
}

export default Header
