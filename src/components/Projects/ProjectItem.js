import React from 'react'
import './Projects.css'

function ProjectItem(props) {
    return (
        <div>
            <div className="card p-card">
                <div className="img">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="2000">
                                <img src={props.img1} class="d-block w-100 p-img" alt="Project" />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={props.img2} class="d-block w-100 p-img" alt="Project" />
                            </div>
                            {props.img3 &&
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src={props.img3} class="d-block w-100 p-img" alt="Project" />
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {/* <img id='img' src={props.img} className="card-img-top p-img" alt="..." /> */}
                <div className="card-body">
                    <div className="content">
                        <h5 className="card-title">{props.heading}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                    <div className="buttons">
                        <a href={props.github} target='__blank'><button className="button p-button">Github</button></a>
                        <a href={props.link} target='__blank'><button className="button p-button">Visit</button></a>
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
