import React, { useState } from 'react'
import resto from '../assets/restuarant.png'
import { Link } from "react-router-dom"
import './Navbar.css'
import cart from '../assets/online-shopping.png'
import menu from '../assets/menu.png'  
function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className='nav'>
<div className='nav-left'>
    <div className='nav-left-img'><img src={resto}/></div>
    <div className='nav-right-head'><h2>HOTEL AISWARYA</h2></div>
</div>
<div className='nav-right'>
  <img className='menu-icon' onClick={()=>setOpen(!open)} src={menu}/>
     <ul className={`nav-right-ul ${open ? 'active' : ''}`}>
      <Link className='link' to="/">HOME</Link>
      <Link className='link' to="/contact">CONTACT</Link>
      <Link className='link' to="/about" >ABOUT</Link>
      <Link className='link-cart' to="/cart"><img src={cart}/></Link>
     </ul>
</div>
    </div>
  )
}

export default Navbar
