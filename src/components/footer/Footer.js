import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <footer>
      
      <ul className="permalinks">
      {/* eslint-disable-next-line */}
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#expertise">Expertise</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    

      {/* <div className='footer_socials'>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div> */}

      <div className="footer__copyright">
        <small>&copy; Gopi. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer