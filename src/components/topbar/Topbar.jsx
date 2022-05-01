import React from 'react'
import './topbar.scss'
import { Person, Mail, GitHub, LinkedIn } from '@material-ui/icons'

export default function Topbar({ menuOpen, setMenuOpen }) {
 return (
  <div className={"topbar " + (menuOpen && "active")}>
   <div className="wrapper">
    <div className="left">
     <a href="#intro" className="logo">Nikita Khairnar</a>
     <div className="itemContainer">
      <Person className="icon" />
      <span>+91 8390230542</span>
     </div>
     <div className="itemContainer">
      <Mail className="icon" />
      <span>nikitak22092001@gmail.com</span>
     </div>
     <div className="itemContainer">
      <GitHub className="icon" />
      <a href="https://github.com/Nikitakhairnar" target="_blank">Nikitakhairnar</a>
     </div>
     <div className="itemContainer">
      <LinkedIn className="icon" />
      <a href="https://www.linkedin.com/in/nikitakhairnar/" target="_blank">NIKITA KHAIRNAR</a>
     </div>
    </div>
    <div className="right">
     <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
     </div>
    </div>
   </div>
  </div>
 )
}
