import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'
import newsjunky1 from '../../img/projects/newsjunky1.png'
import newsjunky2 from '../../img/projects/newsjunky2.png'
import inotebook1 from '../../img/projects/inotebook1.png'
import inotebook2 from '../../img/projects/inotebook2.png'
import drip1 from '../../img/projects/drip1.png'
import drip2 from '../../img/projects/drip2.png'
import whatsapp1 from '../../img/projects/whatsapp2.png'
import whatsapp2 from '../../img/projects/whatsapp1.png'
import scss from '../../img/skills/scss.png'
import firebase from '../../img/skills/firebase.png'

function Projects() {
    const ProjectItems = [
        {
            img1: newsjunky1,
            img2: newsjunky2,
            'heading': 'NewsJunky',
            'description': 'NewsJunky is a free news platform which select latest and best news from multiple national and international sources, sumamarises them to present in short and brief format.',
            'link': 'https://newsjunky-official.netlify.app/',
            'github': 'https://github.com/altamashaseer/NewsJunky-React',
            'techused': [
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/api.svg').default },
                { t: require('../../img/skills/html.svg').default },
                { t: require('../../img/skills/css.svg').default },
                { t: require('../../img/skills/javascript.svg').default },
            ]

        },
        {
            img1: whatsapp1,
            img2: whatsapp2,
            'heading': 'WhatsApp Clone',
            'description': "WhatsApp Web clone developed using React JS. Integrated Firebase services for authentication, database, and backend.",
            'link': 'https://whatsapp-official.netlify.app/',
            'github': 'https://github.com/altamashaseer/WhatsApp-Clone-React',
            'techused': [
                { t: require('../../img/skills/react.svg').default },
                { t: firebase },
                { t: scss },
            ]

        },
        {
            img1: inotebook1,
            img2: inotebook2,
            'heading': 'iNotebook - MERN Stack',
            'description': "Quickly capture your ideas, discoveries, to-do list & thoughts on iNotebook. Access your notes anytime, anywhere synced across all your devices.",
            'link': 'https://inotebook-official.netlify.app/',
            'github': 'https://github.com/altamashaseer/iNotebook-React',
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
            'link': 'https://drip-fashion.netlify.app/index.html',
            'github': 'https://github.com/altamashaseer/Drip.com',
            'techused': [
                { t: require('../../img/skills/html.svg').default },
                { t: require('../../img/skills/css.svg').default },
                { t: require('../../img/skills/javascript.svg').default },
            ]

        }
    ]

    return (
        <>
            <div className='p-container global-padding padding-top' id='projects'>
                <h3 className="heading p-heading">Projects 💻</h3>
                <div className="project-item-wrapper">
                    {ProjectItems.map((element) => {
                        return <div className='each-card' key={element.heading}>
                            <ProjectItem heading={element.heading} img1={element.img1} img2={element.img2} description={element.description} techused={element.techused} link={element.link} github={element.github} />
                        </div>
                    })}
                    <a href="https://github.com/altamashaseer?tab=repositories" target='__blank' className="button p-btn"> View More <span class="material-symbols-outlined">arrow_forward</span></a>
                </div>
            </div>
        </>
    )
}

export default Projects
