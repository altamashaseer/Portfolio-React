import React from 'react'
import './Skills.css'


const Skill = (props) => {
    return (
        <div className='skill-container'>
            <div className="s-wrapper">
                <img src={props.image} alt="Skill" />
                <span className='SName'>{props.SName}</span>
            </div>
        </div>
    )
}

export default Skill;
