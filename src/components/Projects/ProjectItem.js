import React from 'react'
import './Projects.css'

function ProjectItem(props) {
    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.heading}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="/" className="btn btn-primary">Github</a> 
                    <div className="tech">
                    {props.techused.map((tech)=>{
                            return <div className='project-tech'><img src={tech.t} alt="techs" /></div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
