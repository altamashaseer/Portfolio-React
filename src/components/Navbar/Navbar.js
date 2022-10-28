import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'


function Navbar() {
  const [Toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(!Toggle)
    console.log(Toggle);
  }

  return (
    <div className='n-wrapper' id='Navbar'>
      <div className="n-left">
        <img src={logo} alt="" />
      </div>
      <div className="n-right ">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Contact</li>
            <button className="button n-button">Resume <i className="fa-solid fa-download"></i></button>
          </ul>
        </div>
      </div>

      <div id="mobile" onClick={handleClick}>
        <i className={`${Toggle ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}`}></i>
      </div>
    </div>
  )
}

export default Navbar
