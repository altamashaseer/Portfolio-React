import React from 'react'
import './About.css'
// import introImg from '../../img/Intro.png'
import developer from '../../img/animations/developer.json'
import Lottie from "lottie-react";

function About() {
  return (
    <div className='about global-padding global-margin'>
      <h2 className='heading' id='m-heading'>About</h2>
      <div className="a-left">
        <div className="img-wrapper">
          {/* <img src={introImg} alt="IntroImg" /> */}
          <Lottie animationData={developer} loop={true} />
        </div>
      </div>
      {/*I'm a self taught Web developer with extensive skills, who loves to take on the challenges and solve them. 
      Working in TATA Consultancy Sevrices (TCS) as Frontend Developer - System Engineer. Apart from my professional work, I'm always keen to learn about new techs which can help in upgrading my skillset and widen my knowledge. 


      */}
      

      <div className="a-right">
        <h2 className='heading' id='d-heading'>About</h2>
        <span className="a-para">I am a self taught Web developer with extensive skills, who loves to take on the challenges and solve them. Working in <b>TATA Consultancy Services (TCS)</b> as <b>Frontend Developer - System Engineer</b>. Apart from my professional work, I'm always keen to learn about new techs which can help in upgrading my skillset and widen my knowledge.
        </span>
        <span className="a-para">While doing my graduation, I had the pleasure of working for some amazing companies like Starbucks. I worked on a portion of their website for their Trinidad and Tobago website. I also worked with Nastech Group of companies as a freelance web developer. Nastech is a giant in IT and cabling sector in Middle Eastern countries. I have also worked with TechnoSpark on React and NextJS technologies.</span>
      </div>
    </div>
  )
}

export default About