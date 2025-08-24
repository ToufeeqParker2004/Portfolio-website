import React, { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


function Navbar() {

  const [menu,setMenu] =useState("home");
  const menuref =useRef();

  const openMenu = () =>{
    menuref.current.style.right="0";
  }

  const closeMenu = () =>{
    menuref.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
       <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
       
      <ul className='nav-menu' ref={menuref}>
        <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />

       <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu ==="home"?<img src={underline} alt=''/> :<></>}</li>
       <li><AnchorLink className='anchor-link' offset={50} href='#About'><p onClick={()=>setMenu("About")}>About Me</p></AnchorLink>{menu ==="About"?<img src={underline} alt=''/> :<></>}</li>
       <li><AnchorLink className='anchor-link' offset={50} href='#Services'><p onClick={()=>setMenu("Services")}>Services</p></AnchorLink>{menu ==="Services"?<img src={underline} alt=''/> :<></>}</li>
       <li><AnchorLink className='anchor-link' offset={50} href='#Portfolio'><p onClick={()=>setMenu("Portfolio")}>Portfolio</p></AnchorLink>{menu ==="Portfolio"?<img src={underline} alt=''/> :<></>}</li>
       <li><AnchorLink className='anchor-link' offset={50} href='#Contact'><p onClick={()=>setMenu("Contact")}>Contact</p></AnchorLink>{menu ==="Contact"?<img src={underline} alt=''/> :<></>}</li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#Contact'> Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar