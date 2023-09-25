import React from 'react'
import './about.css'
import profilepic_hd from '../../assets/profilepic_hd.png'
import {FaAward} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          {/* eslint-disable-next-line */}
          <img src={profilepic_hd} alt="About Image" />
        </div>
      </div>
      <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>1+ Years Working</small>
        </article>
        <article className='about__card'>
          <FaReact className='about__icon'/>
          <h5>Technologies</h5>
          <small>Exposure to 12+ tools and technologies</small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>Worked in 5+ Projects</small>
        </article>
      </div>

      <p>Junior Full Stack Developer with 1+ years of experience in building and testing robust
        applications using a wide range of technologies. Seeking an opportunity to work with a
        reputable organization to leverage my skills while making a significant contribution to the
        organization's growth.
      </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>

   
   </section>
  )
}

export default About