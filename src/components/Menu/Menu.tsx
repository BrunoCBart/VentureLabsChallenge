import { useEffect } from 'react'
import Arrow from '../svgs/Arrow'
import NewUser from '../svgs/NewUser'
import UserList from '../svgs/UserList'
import './menu.css'
function Menu ({ setMenuItem }: {setMenuItem: (e: any) => void}) {
  useEffect(() => {
    if (window.innerWidth > 768) {
      const menu = document.querySelector('.ventureLabs-menu')
      menu && menu.classList.add('ventureLabs-menu--open')
    }
  }, [])

  const onBtnItemClick = (item: string) => {
    const prevItem = document.querySelector('.ventureLabs-menu__item.active')
    if (prevItem) prevItem.classList.remove('active')
    const currentItem = document.querySelector(`.ventureLabs-menu__item.item-${item}`)
    currentItem?.classList.add('active')
    setMenuItem(item)
  }
  return (
    <section className="ventureLabs-menu">
      <div className="ventureLabs__hero-container">
        <Arrow className="arrow"/>
        <p>Venture Labs®</p>
      </div>
      <div className="ventureLabs-menu-nav-container">
        <nav className="ventureLabs-menu__nav">
          <ul className="ventureLabs-menu__list">
            <li className="ventureLabs-menu__item item-newClient active">
              <button
                onClick={() => onBtnItemClick('newClient')}
                className="ventureLabs-menu__btn">
                <NewUser className="newUser-icon"/>
                 <span className="ventureLabs-menu__btn-text">Novo Cliente</span>
              </button>
            </li>
            <li className="ventureLabs-menu__item item-clientList">
              <button
                onClick={() => onBtnItemClick('clientList')}

                className="ventureLabs-menu__btn">
                <UserList className="newUser-icon list"/>
                  <span className="ventureLabs-menu__btn-text">Lista de Clientes</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Menu
