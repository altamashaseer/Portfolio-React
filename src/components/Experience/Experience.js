import React from 'react'
import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import InternIcon from '@mui/icons-material/Lightbulb';


function Experience() {
    return (
        <div className='experience padding-top' id='experience'>
            <h3 className="heading e-heading">Experience & Education 💼</h3>
            <div className="e-wrapper global-padding">
                <VerticalTimeline lineColor={'var(--black)'}>

                    {/* UPLERS - Current Role */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconClassName='vertical-timeline-icon'
                        contentStyle={{ borderTop: '3px solid #085aa8', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}
                        contentArrowStyle={{ borderRight: '10px solid #fff ', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}
                        date="AUG 2023 - Present"
                        iconStyle={{ background: '#085aa8', color: '#fff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}
                        icon={<WorkIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">Senior Software Engineer</h4>
                        <h6 className="vertical-timeline-element-subtitle">Uplers (Remote)</h6>
                        <p><b>Key Achievements</b></p>
                        <ul>
                            <li><b>AI Platform Leadership:</b> Led frontend development for an AI-interview platform scaling to 8,000+ daily interviews.</li>
                            <li><b>Recruitment Automation:</b> Architected a portal managing a 3 million+ talent network from scratch.</li>
                            <li><b>Performance Tuning:</b> Implemented advanced caching strategies, cutting API load times by <b>25%</b>.</li>
                            <li><b>Analytics Integration:</b> Built user-tracking systems to drive data-informed product decisions.</li>
                        </ul>
                    </VerticalTimelineElement>

                    {/* TCS - Previous Role */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconClassName='vertical-timeline-icon'
                        contentStyle={{ borderTop: '3px solid #317773', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}
                        contentArrowStyle={{ borderRight: '10px solid #fff ', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}
                        date="APR 2021 - AUG 2023"
                        iconStyle={{ background: '#317773', color: '#fff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}
                        icon={<WorkIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">System Engineer (Frontend)</h4>
                        <h6 className="vertical-timeline-element-subtitle">Tata Consultancy Services (TCS)</h6>
                        <p><b>Key Achievements</b></p>
                        <ul>
                            <li><b>Legacy Migration:</b> Migrated an enterprise EdTech platform to a modern React.js SPA, boosting user engagement by <b>30%</b>.</li>
                            <li><b>Next.js Application:</b> Developed a workforce attendance system using Next.js to streamline internal operations.</li>
                            <li><b>Component Library:</b> Built reusable, pixel-perfect components from Figma designs, reducing development time for future modules.</li>
                        </ul>
                    </VerticalTimelineElement>

                    {/* INTERNSHIP */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        iconClassName='vertical-timeline-icon'
                        contentStyle={{ borderTop: '3px solid #085aa8', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}
                        contentArrowStyle={{ borderRight: '10px solid #fff ', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}
                        date="Aug 2020 – Sep 2020"
                        iconStyle={{ background: '#085aa8', color: '#fff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}
                        icon={<InternIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">Web Developer Intern</h4>
                        <h6 className="vertical-timeline-element-subtitle">Zeichnen Services</h6>
                        <p><b>Role Overview</b></p>
                        <ul>
                            <li>Improved browser compatibility and mobile responsiveness for client websites.</li>
                            <li>Assisted senior developers in debugging and deploying frontend patches.</li>
                        </ul>
                    </VerticalTimelineElement>

                    {/* EDUCATION - B.Tech Only */}
                    <VerticalTimelineElement
                        className="vertical-timeline-element--school"
                        iconClassName='vertical-timeline-icon'
                        contentStyle={{ borderTop: '3px solid #f6c821', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}
                        contentArrowStyle={{ borderRight: '10px solid #fff ', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}
                        date="2016 - 2020"
                        iconStyle={{ background: '#f6c821', color: '#fff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}
                        icon={<SchoolIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">Bachelor of Technology (B.Tech)</h4>
                        <h6 className="vertical-timeline-element-subtitle">Dr. A.P.J. Abdul Kalam Technical University</h6>
                        <p>Computer Science / Mechanical Engineering Background</p>
                    </VerticalTimelineElement>

                    {/* End Star */}
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