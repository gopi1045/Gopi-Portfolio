import React from 'react'
import './expertise.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const expertise = () => {
  return (
    <section id="expertise">
      <h5>What Skills I Have</h5>
      <h2>Technical Expertise</h2>

      <div className="container expertise__container">
        <div className="expertise__frontend">
          <h3>Frontend Development</h3>
          <div className="expertise__content"> 
            <article className="expertise__details">
              <BsFillPatchCheckFill className='expertise__details-icon'/>
              <div>
                <h4>React.JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expertise__details">
              <BsFillPatchCheckFill className='expertise__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expertise__details">
              <BsFillPatchCheckFill className='expertise__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expertise__details">
              <BsFillPatchCheckFill className='expertise__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expertise__details">
              <BsFillPatchCheckFill className='expertise__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expertise__details">
              <BsFillPatchCheckFill className='expertise__details-icon'/>
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="expertise__backend">
        <h3>Backend Development</h3>
        <div className="expertise__content"> 
            <article className="expertise__details">
              <BsFillPatchCheckFill className='expertise__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expertise__details">
              <BsFillPatchCheckFill className='expertise__details-icon'/>
              <div>
                <h4>SpringBoot</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expertise__details">
              <BsFillPatchCheckFill className='expertise__details-icon'/>
              <div>
                <h4>Hibernate</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="expertise__details">
              <BsFillPatchCheckFill className='expertise__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="expertise__details">
              <BsFillPatchCheckFill className='expertise__details-icon'/>
              <div>
                <h4>PostgresSQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="expertise__details">
              <BsFillPatchCheckFill className='expertise__details-icon'/>
              <div>
                <h4>ActiveMQ</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default expertise