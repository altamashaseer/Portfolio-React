import React, { useEffect } from 'react'
import Skill from './Skill'
// import javascript from '../../img/skills/javascript.svg' // You can use require inside array to keep it clean
import './Skills.css'
import Aos from 'aos'

const Skills = () => {
    // UPDATED: Reordered to show "High Value" skills first (Next.js, TS, Node)
    const skill = [
        {
            'key': 'Next.js',
            // MAKE SURE TO ADD nextjs.svg to your folder
            image: require('../../img/skills/nextjs.svg').default,
        },
        {
            'key': 'React JS',
            image: require('../../img/skills/react.svg').default,
        },
        {
            'key': 'TypeScript',
            // MAKE SURE TO ADD typescript.svg to your folder
            image: require('../../img/skills/typescript.svg').default,
        },
        {
            'key': 'Node JS',
            image: require('../../img/skills/nodejs.svg').default,
        },
        {
            'key': 'Redux',
            image: require('../../img/skills/redux.svg').default,
        },
        {
            'key': 'Tailwind CSS',
            // MAKE SURE TO ADD tailwind.svg to your folder
            image: require('../../img/skills/tailwind.svg').default,
        },
        {
            'key': 'JavaScript',
            image: require('../../img/skills/javascript.svg').default,
        },
        {
            'key': 'Express JS',
            image: require('../../img/skills/express.svg').default,
        },
        {
            'key': 'MongoDB',
            image: require('../../img/skills/mongo.svg').default,
        },
        {
            'key': 'Material UI',
            image: require('../../img/skills/mui.svg').default,
        },
        {
            'key': 'Git',
            image: require('../../img/skills/git.svg').default,
        },
        {
            'key': 'HTML5',
            image: require('../../img/skills/html.svg').default,
        },
        {
            'key': 'CSS3',
            image: require('../../img/skills/css.svg').default,
        },
    ]

    useEffect(() => {
        Aos.init({ duration: 1300 })
    }, [])

    return (
        <div className='skills padding-top' id='skills'>
            <h3 className="heading s-heading">Tech Stack & Tools 🔥</h3>
            <div className="container">
                {skill.map((element) => {
                    return <div data-aos="fade-up" key={element.key}>
                        <Skill image={element.image} SName={element.key} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Skills