import React from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'


function Navbar() {
  return (
    <div className='n-wrapper' id='Navbar'>
      <div className="n-left">
        {/* <span className="n-name">A A</span> */}
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
          </ul>
        </div>
        <button className="button n-button">Resume <i className="fa-solid fa-download"></i></button>
      </div>
    </div>
  )
}

export default Navbar
