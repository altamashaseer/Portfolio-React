import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'

function Projects() {
    const ProjectItems = [
        {
            img: require('../../img/skills/react.svg').default,
            'heading': 'ZARA - Online Fashion Store',
            'description': 'Zara is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups',
            'techused': [
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/react.svg').default },
            ]

        }
    ]

    return (
        <div className='container p-container'>
             <h3 className="heading p-heading">Projects 💻</h3>
            {ProjectItems.map((element) => {
                return <div key={element.heading}>
                    <ProjectItem heading={element.heading} img={element.img} description={element.description} techused={element.techused} />
                </div>
            })}


        </div>
    )
}

export default Projects
