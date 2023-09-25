import React from 'react'
import './projects.css'

const data= [
  {
    id: 1,
    title:"Skin Cancer Classifier",
    description:"An ensemble learning-based deep learning model to classify seven types of skin lesions which utilizes U-Net segmentation model.",
    githublink:"https://drive.google.com/file/d/1FDQYazWIed0HGw2U4EnyuNnFzYoRRvmZ/view?usp=sharing"
  },
  {
    id: 2,
    title:"Covid Depression Analysis",
    description:"A Lexicon based method to analyse depression among people in India due to lockdown developed using Deep Learning Algorithms",
    githublink:"https://drive.google.com/file/d/1l8PhT-C65zpyWytiIv55hMA2PIfHE3Go/view?usp=sharing"
  },
  {
    id: 4,
    title:"Employee Management System",
    description:"System to keep track of employee details and yearly compensations, developed using React.js, SpringBoot and Mysql",
    githublink:"https://github.com/gopi1045/EMS_Springboot_React_Mysql"
  },
  {
    id: 5,
    title:"Student Management System",
    description:"System to keep track of student academic records, developed using React.js, SpringBoot and Mysql",
    githublink:"https://github.com/gopi1045/Students_Management_System"
  },
  {
    id: 6,
    title:"Task Manager",
    description:"Simple Task Manager application to keep track of day to day activities, developed using React.js",
    githublink:"https://github.com/gopi1045/Task_tracker/tree/master"
  }
];

const Portfolio = () => {

  return (
    <section id="projects">
      <h5>My Recent</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {
          data.map((project,index)=>{
            console.log("Project: ",project)
            return (
              <article key={project.id} className="projects__item">
              <div className="projects__item-image"></div>
                <h2>{project.title}</h2>
                <small><i>Description : </i> {project.description}</small>
                <a href={project.githublink} className='btn' target='_blank' rel="noreferrer">Source Code</a> 
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio