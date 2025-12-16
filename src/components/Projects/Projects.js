import React from 'react'
import ProjectItem from './ProjectItem'
import './Projects.css'

// Existing Images
import newsjunky1 from '../../img/projects/newsjunky1.png'
import newsjunky2 from '../../img/projects/newsjunky2.png'
import inotebook1 from '../../img/projects/inotebook1.png'
import inotebook2 from '../../img/projects/inotebook2.png'
import drip1 from '../../img/projects/drip1.png'
import drip2 from '../../img/projects/drip2.png'
import whatsapp1 from '../../img/projects/whatsapp2.png'
import whatsapp2 from '../../img/projects/whatsapp1.png'

// Placeholder for TradeMind (REPLACE THESE with your real screenshots)
import trademind1 from '../../img/projects/trademind1.png'
import trademind2 from '../../img/projects/trademind2.png'
import trademind3 from '../../img/projects/trademind3.png'

import scss from '../../img/skills/scss.png'
import firebase from '../../img/skills/firebase.png'

function Projects() {
    const ProjectItems = [
        {
            // PROJECT 1: TradeMind AI (New Star Project)
            img1: trademind1,
            img2: trademind2,
            img3: trademind3,
            'heading': 'TradeMind AI - SaaS Platform',
            'description': 'A SaaS-grade trading journal built with React 19 & TypeScript. Features automated technical analysis using Google Gemini AI, interactive Recharts for equity curves, and robust KPI tracking.',
            'link': 'https://trademind-app.netlify.app/',
            'github': 'https://github.com/altamashaseer',
            'techused': [
                { t: require('../../img/skills/react.svg').default },
                { t: require('../../img/skills/typescript.svg').default },
                { t: require('../../img/skills/nodejs.svg').default },
                { t: require('../../img/skills/mongo.svg').default },
            ]
        },
        {
            // PROJECT 3: WhatsApp (Real-time Chat)
            img1: whatsapp1,
            img2: whatsapp2,
            'heading': 'Real-time Chat Application',
            'description': "A low-latency messaging application engineered with React and Firebase. Features real-time WebSocket data syncing, secure authentication, and a responsive mobile-first UI.",
            'link': 'https://whatsapp-official.netlify.app/',
            'github': 'https://github.com/altamashaseer/WhatsApp-Clone-React',
            'techused': [
                { t: require('../../img/skills/react.svg').default },
                { t: firebase },
                { t: scss },
            ]
        },
        {
            // PROJECT 4: iNotebook
            img1: inotebook1,
            img2: inotebook2,
            'heading': 'iNotebook - Cloud Notes App',
            'description': "A secure MERN Stack application for managing personal notes on the cloud. Features user authentication (JWT), RESTful API architecture, and real-time syncing across devices.",
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
            // PROJECT 2: NewsJunky
            img1: newsjunky1,
            img2: newsjunky2,
            'heading': 'NewsJunky Aggregator',
            'description': 'A content aggregation platform that fetches and categorizes real-time global news. Optimized for performance with lazy loading and efficient API state management.',
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
            // PROJECT 5: Drip
            img1: drip1,
            img2: drip2,
            'heading': 'Drip - Online Fashion Store',
            'description': 'A modern e-commerce frontend interface designed for high user engagement. Features a fully responsive layout, interactive product grids, and optimized CSS architecture.',
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
                            <ProjectItem
                                heading={element.heading}
                                img1={element.img1}
                                img2={element.img2}
                                img3={element.img3}
                                description={element.description}
                                techused={element.techused}
                                link={element.link}
                                github={element.github}
                            />
                        </div>
                    })}
                    <a href="https://github.com/altamashaseer?tab=repositories" target='__blank' className="button p-btn">
                        View More <span className="material-symbols-outlined">arrow_forward</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Projects