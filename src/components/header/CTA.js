import React from 'react'
// import CV from '../../assets/Resume_Gopi.pdf'

const CTA = () => {
  let CV="https://drive.google.com/file/d/17A6Ux-CaVDP2kGvIpWNzXL7HojHigkIC/view?usp=drive_link";
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA