import React from 'react'
import './About.css'
// import introImg from '../../img/Intro.png'
import developer from'../../img/animations/developer.json'
import Lottie from "lottie-react";

function About() {
  return (
    <div className='about global-padding'>
      <div className="a-left">
        <div className="img-wrapper">
          {/* <img src={introImg} alt="IntroImg" /> */}
          <Lottie animationData={developer} loop={true} />
        </div>
      </div>

      <div className="a-right">
        <h2 className='heading'>About</h2>
        <span className="a-para">I am a Computer Scientist who just graduated from the premier IT university COMSATS University Islamabad in Computer Science Majors. I am a highly skilled professional developer who loves to take on the challenges and then solve them.</span>
        <span className="a-para">While doing my graduation, I had the pleasure of working for some amazing companies like Starbucks. I worked on a portion of their website for their Trinidad and Tobago website. I also worked with Nastech Group of companies as a freelance web developer. Nastech is a giant in IT and cabling sector in Middle Eastern countries. I have also worked with TechnoSpark on React and NextJS technologies.</span>
      </div>
    </div>
  )
}

export default About