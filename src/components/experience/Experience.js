import React from 'react'
import './experience.css'
import {TiArrowRightOutline} from 'react-icons/ti'

const data=[
'Developed REST APIs using the Spring Boot framework, utilizing Maven as the build tool, and conducted thorough testing of APIs with Postman',
'Experienced in application development with Spring Batch, Spring Security, SFTP, Collections, and Hibernate ORM, demonstrating effective use of these technologies',
'Worked with Red Hat OpenShift Containers, facilitating container orchestration and management',
'Proficient in database management, with experience in PostgreSQL and MySQL platforms',
'Experienced in working with message brokers like Active MQ',
'Writing unit tests using JUnit and Mockito',
'Proficient in object-oriented programming principles, including inheritance, encapsulation, and polymorphism, which form the foundation for design patterns',
'Developed user interfaces using React.js, HTML, CSS, Bootstrap, and Axios, ensuring responsive and user-friendly designs',
'Implemented form validation, error handling, and event handling using JavaScript and jQuery to enhance user experience',
'Skilled in Redux, proficiently managing React application states to optimize data flow and enhance user interactions',
'Participated in Agile methodology, actively engaging in daily Scrum meetings to promote collaboration and continuous improvement',
'Strong knowledge of version control tools, including GitLab, and experienced with ticket tracking platforms such as JIRA',
'Contributed to the creation and development of Technical Design Documentation (TDD) to outline system architecture and specifications'
]

const data2=[
'Developed the user interface using React.js, Bootstrap and JQuery to facilitate budget creation, manage multiple initiatives, allocate resources and costs, assign roles, and track the status of budget requests',
'Integrated Tableau dashboards into the application to visually display generated reports',
'Utilized Redux for state management, effectively storing user session information and global data',
'Familiar with cloud technologies, particularly Amazon Web Services (AWS), to enhance application deployment and scalability'
]

const Experience = () => {
  return (
    <section id="experience">
        <h5>Organizations I Worked For</h5>
        <h2>Professional Experience</h2>

        <div className="container experience__container">
            <article className="experience__item">
                <div className="org__details">
                    <h2>Silicon Valley Bank</h2>
                    <div className="org__period">
                        <h5>Bengaluru</h5>
                        <h5>2022 - Present</h5>
                    </div>
                </div>
                <h3 style={{marginTop:'2rem'}}>Project #1: Shared Loss Application Platform</h3>
                <h4 style={{marginTop:'0.5rem'}}>Roles and Responsibilities</h4>

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

                <h3 style={{marginTop:'2rem'}}>Project #2: Finance Connect</h3>
                <h4 style={{marginTop:'0.5rem'}}>Roles and Responsibilities</h4>

                <ul className="roles">
                    {
                        data2.map((item,index)=>{
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