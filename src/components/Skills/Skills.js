import React, { useEffect } from 'react'
import Skill from './Skill'
import javascript from '../../img/skills/javascript.svg'
import './Skills.css'
import Aos from 'aos'

const Skills = () => {
    const skill = [
        {
            'key': 'React JS',
            image: require('../../img/skills/react.svg').default,
        },
        {
            'key': 'HTML',
            image: require('../../img/skills/html.svg').default,
        },
        {
            'key': 'CSS',
            image: require('../../img/skills/css.svg').default,
        },
        {
            'key': 'JavaScript',
            image: javascript
            // image: require('../../img/skills/javascript.svg').default,
        },
        {
            'key': 'Bootstrap',
            image: require('../../img/skills/bootstrap.svg').default,
        },
        {
            'key': 'API Integration',
            image: require('../../img/skills/api.svg').default,
        },
        {
            'key': 'Express JS',
            image: require('../../img/skills/express.svg').default,
        },
        {
            'key': 'Node JS',
            image: require('../../img/skills/nodejs.svg').default,
        },
        {
            'key': 'Git',
            image: require('../../img/skills/git.svg').default,
        },
        {
            'key': 'Material UI',
            image: require('../../img/skills/mui.svg').default,
        },
        {
            'key': 'MongoDB',
            image: require('../../img/skills/mongo.svg').default,
        },
        {
            'key': 'Java',
            image: require('../../img/skills/java.svg').default,
        },
        {
            'key': 'Redux',
            image: require('../../img/skills/redux.svg').default,
        },


    ]
    useEffect(() => {
        Aos.init({ duration: 1300 })
    }, [])

    return (
        <div className='skills padding-top' id='skills'>
            <h3 className="heading s-heading">Skills 🔥</h3>
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
