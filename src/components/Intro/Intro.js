import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <div className='intro'>
      <div className="i-left">

      </div>
      <div className="i-right">
        <div className="i-name">
            <span>Hi, I'm </span>
            <span>Altamash <span class="wave">👋</span></span>
            <span>A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.</span>
        </div>
        <div className="connections">
            <button><a href="https://github.com/altamashaseer" target='__blank'>View on Github</a></button>
            <button><a href="https://www.linkedin.com/in/altamash-aseer-746aa3193/" target='__blank'>View on LinkedIn</a></button>
        </div>
      </div>
    </div>
  )
}

export default Intro
