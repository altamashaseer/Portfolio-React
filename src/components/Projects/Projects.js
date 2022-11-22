import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'
import newsjunky from '../../img/projects/newsjunky.png'

function Projects() {
    const ProjectItems = [
        {
            img1: newsjunky,
            img2: newsjunky,
            'heading': 'NewsJunky',
            'description': 'NewsJunky is a free platform which select latest and best news from multiple national and international sources and sumamarises them to present in short and brief format.',
            'link':'',
            'techused': [
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/api.svg').default },
                { t: require('../../img/skills/html.svg').default },
                { t: require('../../img/skills/css.svg').default },
                { t: require('../../img/skills/javascript.svg').default },
            ]

        },
        {
            img: require('../../img/skills/react.svg').default,
            'heading': '2ZARA - Online Fashion Store',
            'description': 'Zara is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups',
            'techused': [
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/react.svg').default },
            ]

        },
        {
            img: require('../../img/skills/react.svg').default,
            'heading': '3ZARA - Online Fashion Store',
            'description': 'Zara is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups',
            'techused': [
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/react.svg').default },
            ]

        },
        {
            img: require('../../img/skills/react.svg').default,
            'heading': '4ZARA - Online Fashion Store',
            'description': 'Zara is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups',
            'techused': [
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/react.svg').default },
            ]

        },
        {
            img: require('../../img/skills/react.svg').default,
            'heading': '5ZARA - Online Fashion Store',
            'description': 'Zara is one of the largest international fashion companies. It belongs to Inditex, one of the world’s largest distribution groups',
            'techused': [
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/react.svg').default },
            ]

        },
    ]

    return (
        <div className='p-container global-padding padding-top' id='projects'>
            <h3 className="heading p-heading">Projects 💻</h3>
            <div className="project-item-wrapper">
                {ProjectItems.map((element) => {
                    return <div className='each-card' key={element.heading}>
                        <ProjectItem heading={element.heading} img1={element.img1} img2={element.img2} description={element.description} techused={element.techused} />
                    </div>
                })}
            </div>


        </div>
    )
}

export default Projects
