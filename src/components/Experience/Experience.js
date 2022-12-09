import React from 'react'
import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import InternIcon from '@mui/icons-material/Lightbulb';


function Experience() {
    return (
        <div className='experience padding-top' id='experience'>
            <h3 className="heading e-heading">Education & Experience 💼</h3>
            <div className="e-wrapper global-padding">
                <VerticalTimeline lineColor={'var(--black)'}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconClassName='vertical-timeline-icon'

                        contentStyle={{ borderTop: '3px solid #317773', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        contentArrowStyle={{ borderRight: '10px solid #fff ', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        date="APR 2021 - present"

                        iconStyle={{ background: '#317773', color: '#fff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}

                        icon={<WorkIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">Assistant System Engineer</h4>
                        <h6 className="vertical-timeline-element-subtitle">Tata Consultancy Services (TCS)</h6>
                        <p>Currently working with TCS as React JS developer.</p>
                        <p><b>Responsibilites</b></p>
                        <ul>
                            <li>Suggesting & Implementing the solutions to problems.</li>
                            <li>Converting the designs into working code.</li>
                            <li>Making the required changes suggested by client & work on the feedback.</li>
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconClassName='vertical-timeline-icon'


                        contentStyle={{ borderTop: '3px solid #085aa8', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        contentArrowStyle={{ borderRight: '10px solid #fff ', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        date="Aug 2020 – Sep 2020"

                        iconStyle={{ background: '#085aa8', color: '#fff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}

                        icon={<InternIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">Web Developer - Intern</h4>
                        <h6 className="vertical-timeline-element-subtitle">Zeichnen services</h6>
                        <p>Learnt about web technologies & acquired hands-on experience building dynamic pages.</p>
                        <p><b>Responsibilites</b></p>
                        <ul>
                            <li>Fixing significant bugs & errors under guidance of senior developers.</li>
                            <li>Improving existing code browser compatibility & mobile responsiveness.</li>
                            {/* <li>Making the required changes suggested by client & work on the feedback</li> */}
                        </ul>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--school"
                        iconClassName='vertical-timeline-icon'

                        contentStyle={{ borderTop: '3px solid #f6c821', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        contentArrowStyle={{ borderRight: '10px solid #fff ', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        date="2016 - 2020"

                        iconStyle={{ background: '#f6c821', color: '#fff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}

                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Technology (ME)</h3>
                        <h6 className="vertical-timeline-element-subtitle">IMSEC, Dr. A.P.J. Abdul Kalam Technical University</h6>
                        <p>Graduation Year: 2020 <br />Percentage: 71.3%</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--school"
                        iconClassName='vertical-timeline-icon'

                        contentStyle={{ borderTop: '3px solid #4e2aa1', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        contentArrowStyle={{ borderRight: '10px solid #fff ', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        date="2014 - 2016"

                        iconStyle={{ background: '#4e2aa1', color: '#fff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}

                        icon={<ScienceIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">Intermediate & High School</h4>
                        <h6 className="vertical-timeline-element-subtitle">GreenWood School (C.B.S.E)</h6>
                        <p><b>Senior Secondary </b> - PCM <br />Completion Year: 2016<br />Percentage: 85%</p>
                        <p><b>Secondary</b><br />Completion Year: 2014<br />CGPA: 8.89/10.0</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconClassName='vertical-timeline-icon'
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience
