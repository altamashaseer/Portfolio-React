import React from 'react'
import './Intro.css'
import Typewriter from 'typewriter-effect';
import Background from '../Background/Background';

function Intro() {

  return (
    <>
      <div className='intro' id='intro'>
        <Background />
        <div className="i-main global-padding">
          <div className="i-name ">
            <div className='name'>
              <span>Hi, I am </span>
              <span id='name'>Altamash Aseer </span><span className="wave">👋</span>
            </div>

            <div className="typeeffect">
              {/* Removed "and I am" for a cleaner, more senior look */}
              <Typewriter
                options={{
                  strings: [
                    'Senior Frontend Engineer',
                    'React.js & Next.js Specialist',
                    'Full Stack Developer',
                    'SaaS Architect'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 40
                }} />
            </div>

            <span className='i-para'>
              <b>Senior Software Engineer</b> 🚀 with <b>4.5+ years</b> of experience architecting scalable <b>SaaS platforms</b>.
              <br />
              I specialize in building <b>high-performance React ecosystems</b>, optimizing complex UIs, and translating business requirements into <b>robust technical solutions</b>.
            </span>
          </div>

          <div className="connections">
            <a href="https://github.com/altamashaseer" target='__blank' aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/altamash-aseer/" target='__blank' aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href='#contact' aria-label="Contact Me">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro