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
        <h2 className='heading' id='d-heading'>About Me</h2>

        <span className="a-para">
          With over <b>4.5 years of professional experience</b>, I am a Software Engineer focused on building robust, user-centric frontend architectures. Currently, I lead frontend initiatives at <b>Uplers</b>, enabling <b>AI-driven recruitment platforms</b> that serve thousands of daily users.
        </span>

        <span className="a-para">
          I specialize in translating complex business requirements into pixel-perfect, scalable code using <b>React.js, Next.js, and TypeScript</b>. My background spans from migrating enterprise legacy systems at <b>Tata Consultancy Services (TCS)</b> to building agile <b>SaaS products</b> from scratch. I am passionate about <b>performance optimization</b>, clean code, and delivering seamless user experiences.
        </span>
      </div>
    </div>
  )
}

export default About