import React from 'react'
import Bars from '../svgs/Bars'
import './header.css'
function Header () {
  const onClickOpenMenu = () => {
    const menu = document.querySelector('.ventureLabs-menu')
    console.log('a')
    menu && menu.classList.toggle('ventureLabs-menu--open')
  }

  return (
    <header className="header">
      <div className="header__container">
        <button className="header__bars-btn" onClick={onClickOpenMenu}>
          <Bars className="header__bars"/>
        </button>
        <p>Venture Labs®</p>
      </div>
    </header>
  )
}

export default Header
