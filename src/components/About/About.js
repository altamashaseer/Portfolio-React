import React from 'react'
import './About.css'
// import introImg from '../../img/Intro.png'
import developer from '../../img/animations/developer.json'
import Lottie from "lottie-react";

function About() {
  return (
    <div className='about global-padding padding-top' id='about' >
      <h2 className='heading' id='m-heading'>About</h2>
      <div className="a-left">
        <div className="img-wrapper">
          <Lottie animationData={developer} loop={true} />
        </div>
      </div>     

      <div className="a-right">
        <h2 className='heading' id='d-heading'>About</h2>
        <span className="a-para">I am a self-taught Frontend Developer with extensive skills, who love<b> Programming</b>,<b> Developing</b>,<b> Learning,</b> and <b> Problem Solving</b>. I am passionate about taking challenges and solving them by communicating & sharing experiences.  
        </span>
        <span className="a-para">Currently, working in <b>Uplers</b> as <b>React Developer</b>. In addition to my professional work, I'm always keen to learn about different techs / tools which can help to upgrade my skillset and widen my knowledge to become an efficient <b>Full Stack Developer</b>.</span>
      </div>
    </div>
  )
}

export default About