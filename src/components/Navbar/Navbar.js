import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'
import resume from '../../img/Resume/Altamash.pdf'

function Navbar() {
  const [Toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(!Toggle)
    console.log(Toggle);
  }

  return (
    <div id='Navbar'>
      <div className="n-left">
        <img src={logo} alt="" />
      </div>
      <div className={`${Toggle ? 'active n-right' : 'n-right'}`} id='m-navbar'>
        <div className="n-list">
          <span id="close-nav" onClick={handleClick}><i class="fa-solid fa-chevron-right"></i></span>
          <ul>
            <a href="#intro"><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#skills"><li>Skills</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#experience"><li>Experience</li></a>
            <a href="#contact"><li>Contact</li></a>
            <a href={resume} className='download-btn' download="Altamash's Resume"><button className='button n-button'>Resume <i className="fa-solid fa-download"></i></button></a>
          </ul>
        </div>
      </div>

      <div id="mobile" onClick={handleClick}>
        {/* <i className={`${Toggle ? 'fa-solid fa-chevron-right' : 'fa-solid fa-bars'}`}></i> */}
        <i className='fa-solid fa-bars'></i>
      </div>
    </div >
  )
}

export default Navbar
