import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from "../../assets/udaan-logo.png"
import { useState } from 'react'
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])
  const [mobileMenu, setMobileMenu] = useState(false)
  const toogleMenu = ()=>{
    mobileMenu? setMobileMenu(false): setMobileMenu(true)
  }
  let menuRef = useRef()
  useEffect(()=>{
    document.addEventListener("mousedown",(event)=>{
      if (!menuRef.current.contains(event.target))
        {
      setMobileMenu(false)
    }
    })
  })

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul ref={menuRef} className={mobileMenu? '': "hide-mobile-menu"}>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testomonials</li>
        <li><button className='btn'>Contact us</button></li>
        <li><button className='btn'> Apply Now </button></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu} />
    </nav>
  )
}

export default Navbar
