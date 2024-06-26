import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from "../../assets/udaan-logo.png"
import { useState } from 'react'
import menu_icon from '../../assets/menu-icon.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
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
    <nav className={`container ${sticky ? 'small-nav' : ''}`} ref={menuRef}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu? '': "hide-mobile-menu"}>
        <li><NavLink className={(e)=>{return e.isActive? "active": ""} } to = "/"> Home</NavLink></li>
        <li> <NavLink className={(e)=>{return e.isActive? "active": ""}} to = "/programs"> Program</NavLink></li>
        <li> <NavLink className={(e)=>{return e.isActive? "active": ""}} to = "/about-us">About us</NavLink></li>
         <li className='study-abroad'> Study Abroad 
         <ul className='sub-nav'>
          <li> <NavLink className={(e)=>{return e.isActive? "active": ""} } to= "/canada"> CANADA</NavLink></li>
          <li> <NavLink className={(e)=>{return e.isActive? "active": ""} } to="/uk"> UK</NavLink></li>
          <li> <NavLink className={(e)=>{return e.isActive? "active": ""} } to='/usa'> USA</NavLink></li>
          <li> <NavLink className={(e)=>{return e.isActive? "active": ""} } to='/australia'> AUSTRALIA</NavLink></li>
         </ul></li>
        <li className='test-preparation'> Test Preparation
        <ul className='test-sub-nav'>
          <li> <NavLink className={(e)=>{return e.isActive? "active": ""} } to= "/IELTS"> IELTS</NavLink></li>
          <li> <NavLink className={(e)=>{return e.isActive? "active": ""} } to="/PTE"> PTE</NavLink></li>
          <li> <NavLink className={(e)=>{return e.isActive? "active": ""} } to='/TOEFL'> TOEFL</NavLink></li>
          <li> <NavLink className={(e)=>{return e.isActive? "active": ""} } to='/SAT'> SAT</NavLink></li>
          <li> <NavLink className={(e)=>{return e.isActive? "active": ""} } to='/GRE'> GRE</NavLink></li></ul>
        </li>
         <li><NavLink className={(e)=>{return e.isActive? "active": ""}} to = "/contact-us">Contact us</NavLink> </li>
          <li><NavLink className={(e)=>{return e.isActive? "active": ""}} to = "/apply-now">Apply Now </NavLink></li>
      </ul>
       <img src={menu_icon} alt="" className='menu-icon' onClick={toogleMenu}  />
    </nav>
  )
}

export default Navbar
