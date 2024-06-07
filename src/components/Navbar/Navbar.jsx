import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from "../../assets/udaan-logo.png"
import { useState } from 'react'
import menu_icon from '../../assets/menu-icon.png'
import { NavLink } from 'react-router-dom'
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
  let handler = (e)=>{
    if (!menuRef.current.contains(e.target)) {
      setMobileMenu(false)
      console.log(menuRef.current);
    }
  }
  document.addEventListener("mousedown",handler)
 }
)

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} ref={menuRef}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu? '': "hide-mobile-menu"}>
        <li><NavLink className={(e)=>{return e.isActive? "active": ""} } to = "/"> Home</NavLink></li>
        <li> <NavLink className={(e)=>{return e.isActive? "active": ""}} to = "/programs"> Program</NavLink></li>
        <li> <NavLink className={(e)=>{return e.isActive? "active": ""}} to = "/about-us">About us</NavLink></li>
         <li> <NavLink className={(e)=>{return e.isActive? "active": ""}} to = "/study-abroad">Study Abroad</NavLink></li>
        <li> <NavLink className={(e)=>{return e.isActive? "active": ""}} to = "/testimonials">Testomonials</NavLink></li>
         <li><button className='btn'><NavLink className={(e)=>{return e.isActive? "active": ""}} to = "/contact-us">Contact us</NavLink> </button></li>
          <li><button className='btn'> <NavLink className={(e)=>{return e.isActive? "btn-active": ""}} to = "/apply-now">Apply Now </NavLink></button></li>
      </ul>
       <img src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu}  />
    </nav>
  )
}

export default Navbar
