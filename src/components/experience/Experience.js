import React from 'react'
import './experience.css'
import {TiArrowRightOutline} from 'react-icons/ti'

const data=[
    'Developed User Interfaces with React.js, Javascript, JQuery, HTML, CSS, Bootstrap, and Axios',
    'Worked on form validation, error handling, and event handling using JavaScript and jQuery.',
    'Implemented Search and Pagination features which will help users to filter and view APIs as per their requirements.',
    'Skilled in Redux, proficiently managing React application states for optimized data flow and enhanced user interactions.',
    'Worked with database platforms such as Postgres and Mysql.',
    'Developed REST APIs with Spring Boot framework, Maven build tool, and tested APIs using Postman.',
    'Possess experience in utilizing Hibernate ORM and JPA effectively.',
    'Experienced in working with ActiveMQ message broker.',
    'Worked with Agile Methodology and participated in daily Scrum meetings.',
    'Strong knowledge of version control tools like Gitlab and ticket tracking platforms like JIRA.',
    'Familiar with cloud technologies and Amazon Web Services (AWS).'
]

const Experience = () => {
  return (
    <section id="experience">
        <h5>Organizations I Worked For</h5>
        <h2>Professional Experience</h2>

        <div className="container experience__container">
            <article className="experience__item">
                <div className="org__details">
                    <h3>Silicon Valley Bank</h3>
                    <div className="org__period">
                        <h5>Bengaluru</h5>
                        <h5>2022 - Present</h5>
                    </div>
                </div>
                <h4 style={{marginTop:'2rem'}}>Roles and Responsibilities</h4>

                <ul className="roles">
                    {
                        data.map((item,index)=>{
                            // console.log(item);
                            return(
                               <li key={index}><div className="arrow-icon"><TiArrowRightOutline/></div> {item}</li>
                            )
                        })
                    }
                </ul>

            </article>
        </div>
    </section>
  )
}

export default Experience