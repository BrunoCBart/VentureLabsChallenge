import React, { useEffect } from 'react'
import Arrow from '../svgs/Arrow'
import './menu.css'
function Menu () {
  useEffect(() => {
    if (window.innerWidth > 768) {
      const menu = document.querySelector('.ventureLabs-menu')
      menu && menu.classList.add('ventureLabs-menu--open')
    }
  }, [])
  return (
    <section className="ventureLabs-menu">
      <div className="ventureLabs__hero-container">
        <Arrow className="arrow"/>
        <p>Venture Labs®</p>
      </div>
      <div className="ventureLabs-menu-nav-container">
        <nav className="ventureLabs-menu__nav">
          <ul className="ventureLabs-menu__list">
            <li className="ventureLabs-menu__item">
              <a href="#" className="ventureLabs-menu__link">
                Notas Fiscais
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Menu
