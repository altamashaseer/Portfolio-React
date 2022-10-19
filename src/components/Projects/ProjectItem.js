import React from 'react'
import './Projects.css'

function ProjectItem(props) {
    return (
        <div>
            <div className="card p-card">
                <img src={props.img} className="card-img-top p-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.heading}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className="buttons">
                    <a href="/"><button className="button p-button">Github</button></a>
                    <a href="/"><button className="button p-button">Visit</button></a>
                    </div>
                    <div className="tech">
                        {props.techused.map((tech) => {
                            return <div key={tech.t} className='project-tech'>
                                <img src={tech.t} alt="techs" />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
