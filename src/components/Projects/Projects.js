import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'
import newsjunky1 from '../../img/projects/newsjunky1.png'
import newsjunky2 from '../../img/projects/newsjunky2.png'
import inotebook1 from '../../img/projects/inotebook1.png'
import inotebook2 from '../../img/projects/inotebook2.png'
import drip1 from '../../img/projects/drip1.png'
import drip2 from '../../img/projects/drip2.png'

function Projects() {
    const ProjectItems = [
        {
            img1: newsjunky1,
            img2: newsjunky2,
            'heading': 'NewsJunky',
            'description': 'NewsJunky is a free news platform which select latest and best news from multiple national and international sources, sumamarises them to present in short and brief format.',
            'link':'https://newsjunky-official.netlify.app/',
            'github':'https://github.com/altamashaseer/NewsJunky-React',
            'techused': [
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/api.svg').default },
                { t: require('../../img/skills/html.svg').default },
                { t: require('../../img/skills/css.svg').default },
                { t: require('../../img/skills/javascript.svg').default },
            ]

        },
        {
            img1: inotebook1,
            img2: inotebook2,
            'heading': 'iNotebook - MERN Stack',
            'description': "Quickly capture your ideas, discoveries, to-do list & thoughts on iNotebook. Access your notes anytime, anywhere synced across all your devices.",
            'link':'https://inotebook-official.netlify.app/',
            'github':'https://github.com/altamashaseer/iNotebook-React',
            'techused': [
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/bootstrap.svg').default },
                { t: require('../../img/skills/nodejs.svg').default },
                { t: require('../../img/skills/express.svg').default },
                { t: require('../../img/skills/mongo.svg').default },
            ]

        },
        {
            img1: drip1,
            img2: drip2,
            'heading': 'Drip - Online Fashion Store',
            'description': 'Drip.com brings fashion conscious people & stylish merchandise together in a more efficient manner. Shop famous brands at best discounts!',
            'link':'https://drip-fashion.netlify.app/index.html',
            'github':'https://github.com/altamashaseer/Drip.com',
            'techused': [
                { t: require('../../img/skills/html.svg').default },
                { t: require('../../img/skills/css.svg').default },
                { t: require('../../img/skills/javascript.svg').default },
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
                        <ProjectItem heading={element.heading} img1={element.img1} img2={element.img2} description={element.description} techused={element.techused} link={element.link} github={element.github}/>
                    </div>
                })}
            </div>


        </div>
    )
}

export default Projects
