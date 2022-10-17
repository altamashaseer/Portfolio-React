import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'

function Projects() {
    const ProjectItems = [
        {
            img: require('../../img/skills/react.svg').default,
            'heading': 'ZARA - Online Fashion Store',
            'description': 'Zara is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups',
            'techused':
                [{
                    t1: require('../../img/skills/react.svg').default,
                    t2: require('../../img/skills/react.svg').default,
                    t3: require('../../img/skills/react.svg').default,
                }]

        }
    ]
    
    const distributor = (element) => {
        console.log(element.length())
        // for (let index = 1; index <= 3; index++) {
        //     const element = array[index];

        // }
    }
    return (
        <div className='container'>
            {ProjectItems.map((element) => {
                return <div key={element.heading}>
                    <ProjectItem heading={element.heading} img={element.img} description={element.description} techused={distributor(element.techused)} />
                </div>
            })}

        </div>
    )
}

export default Projects
