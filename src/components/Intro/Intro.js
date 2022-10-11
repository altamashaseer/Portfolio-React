import React from 'react'
import './Intro.css'
import Typewriter from 'typewriter-effect';

function Intro() {
  return (
    <div className='intro'>

      <div className="i-left">
        <div className="i-name">
          <div className='name'>
            <span>Hi, I'm  </span>
            <span id='name'> Altamash Aseer <span class="wave">👋</span></span>
          </div>

          <div className="typeeffect">
            <h4 >and I am </h4>
            <Typewriter 
              options={{
                strings: ['React Developer', 'Frontend Enthusiast', 'Dedicated Programmer', 'Team Player'],
                autoStart: true,
                loop: true,
                changeDelay: 1
              }} />
          </div>

          <span className='i-para'>A aspiring Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</span>
        </div>
        <div className="connections">
          <button className='button i-button'><i className="fa-brands fa-github"></i><a href="https://github.com/altamashaseer" target='__blank'>View on Github</a></button>
          <button className='button i-button'><i className="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/altamash-aseer-746aa3193/" target='__blank'>View on LinkedIn</a></button>
        </div>
      </div>

      <div className="i-right">


      </div>
    </div>
  )
}

export default Intro
