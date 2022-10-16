import React from 'react'
import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';


function Experience() {
    return (
        <div className='experience'>
            <h3 className="heading e-heading">Education & Experience 💼</h3>
            <div className="e-wrapper">
                <VerticalTimeline lineColor={'var(--black)'}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--school"
                        iconClassName='vertical-timeline-icon'

                        contentStyle={{ borderTop: '3px solid #317773', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        contentArrowStyle={{ borderRight: '10px solid #fff ', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        date="2014 - 2016"

                        iconStyle={{ background: '#317773', color: '#fff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}

                        icon={<ScienceIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">Inter & High School</h4>
                        <h6 className="vertical-timeline-element-subtitle">GreenWood School (C.B.S.E)</h6>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--school"
                        iconClassName='vertical-timeline-icon'

                        contentStyle={{ borderTop: '3px solid #ffc541', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        contentArrowStyle={{ borderRight: '10px solid #fff ', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        date="MAY 2016 - OCT 2020"

                        iconStyle={{ background: '#ffc541', color: '#fff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}

                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">B.Tech (ME) </h3>
                        <h6 className="vertical-timeline-element-subtitle">Dr. A.P.J. Abdul Kalam Technical University</h6>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--college"
                        iconClassName='vertical-timeline-icon'

                        contentStyle={{ borderTop: '3px solid #4b20ab', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        contentArrowStyle={{ borderRight: '10px solid #fff ', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}

                        date="APR 2021 - present"

                        iconStyle={{ background: '#4b20ab', color: '#fff', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }}

                        icon={<WorkIcon />}
                    >
                        <h4 className="vertical-timeline-element-title">FrontEnd Developer</h4>
                        <h6 className="vertical-timeline-element-subtitle">Tata Consultancy Services (TCS)</h6>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
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
