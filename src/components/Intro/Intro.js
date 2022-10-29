import React from 'react'
import './Intro.css'
import Typewriter from 'typewriter-effect';

function Intro() {

  return (
    <div className='intro global-padding'>
      <div className="i-main">
        <div className="i-name">
          <div className='name'>
            <span>Hi, I am  </span>
            <span id='name'>Altamash Aseer </span><span className="wave">👋</span>
          </div>

          <div className="typeeffect">
            <h4 >and I am </h4>
            <Typewriter
              options={{
                strings: ['React Developer', 'Frontend Enthusiast', 'Team Player'],
                // 'Dedicated Programmer'
                autoStart: true,
                loop: true,
                changeDelay: 1
              }} />
          </div>

          <span className='i-para'>A aspiring Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</span>
        </div>
        <div className="connections">
          <a href="https://github.com/altamashaseer" target='__blank'><i className="fa-brands fa-github"></i></a>

          <a href="https://www.linkedin.com/in/altamash-aseer-746aa3193/" target='__blank'><i className="fa-brands fa-linkedin-in"></i></a>

          <a href="https://www.linkedin.com/in/altamash-aseer-746aa3193/" ><i className="fa-regular fa-envelope"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Intro
