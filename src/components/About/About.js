import React from 'react'
import './About.css'
import introImg from '../../img/Intro.png'

function About() {
  return (
    <section className='about'>
      <div className="a-left">
        <div className="img-wrapper">
          <img src={introImg} alt="IntroImg" />
        </div>
      </div>
      <div className="a-right">
    <span className='a-heading'>About</span>
      </div>
    </section>
  )
}

export default About