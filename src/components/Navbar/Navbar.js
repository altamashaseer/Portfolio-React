import React from 'react'
import './Navbar.css'


function Navbar() {
  return (
    <div className='n-wrapper' id='Navbar'>
      <div className="n-left">
        <span class="n-name">Altamash</span>
      </div>
      <div className="n-right">
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
        <button className="button n-button">Resume</button>
      </div>
    </div>
  )
}

export default Navbar
