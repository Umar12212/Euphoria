import React from 'react'
import logo from './images/Logo.png'
import './styles/style.scss'
import component1 from './images/Component 1.png'
import component2 from './images/Component 2.png'
import component3 from './images/Component 3.png'
const Navbar = () => {

  return (
    <>
      <header className='Header'>
        <div className="navbar">
          <div className="navbar__left">
            <ul className='navbar__left-ul'>
              <li className='nav_li'> <a href="#!"> <img src={logo} alt="" /> </a> </li>
              <li className='nav_li'> <a href="#!">Shop</a> </li>
              <li className='nav_li'> <a href="#!">Men</a> </li>
              <li className='nav_li'> <a href="#!">Women</a> </li>
              <li className='nav_li'> <a href="#!">Combos</a> </li>
              <li className='nav_li'> <a href="#!">Joggers</a> </li>
            </ul>
          </div>
          <div className="navbar__right">
            <a href="#!" className='navbar__right-icons'> <img src={component1} alt="" /> </a>
            <a href="" className='navbar__right-icons'> <img src={component2} alt="" /> </a>
            <a href="" className='navbar__right-icons'> <img src={component3} alt="" /> </a>

            
            
          </div>
        </div>
      </header>


    </>

  )
}

export default Navbar