import React from 'react'
import './education.css'
const Education = () => {
  return (
   <section id="education">
    <h5>Where I Pursued</h5>
    <h2>Education</h2>

    <div className="container education__container">
      <article className="education">
        <div className="education__head">
          <h3>Bachelor of Information Technology</h3>
        </div>

        {/* <ul className="education__list">
          <li> */}
          <div className="education__item">
            
            <p><i>Institute :</i> Madras Institute of Technology, Chennai</p>
            <p><i>CGPA :</i> 8.34</p>
            <p><i>Year of Passing :</i> 2022</p>
          </div>
          
          {/* </li>
        </ul> */}
      </article>
      {/* End of BTech */}
      <article className="education">
        <div className="education__head">
          <h3>CLASS XII</h3>
        </div>

        {/* <ul className="education__list">
          <li> */}
          <div className="education__item">
            {/* <IoIosSchool className='eduction__list-icon'/> */}
            <p><i>Institute :</i> Bharathi Matric Hr. Sec. School</p>
            <p><i>Percentage :</i> 95.75</p>
            <p><i>Year of Passing :</i> 2018</p>
          </div>
           
          {/* </li>
        </ul> */}
      </article>
      {/* End of xii */}
      <article className="education">
        <div className="education__head">
          <h3>CLASS X</h3>
        </div>

        {/* <ul className="education__list">
          <li> */}
          <div className="education__item">
            {/* <IoIosSchool className='eduction__list-icon'/> */}
            <p><i>Institute :</i> Bharathi Matric Hr. Sec. School</p>
            <p><i>Percentage :</i> 97.8</p>
            <p><i>Year of Passing :</i> 2016</p>
          </div>
            
          {/* </li>
        </ul> */}
      </article>
    </div>
   </section>
  )
}

export default Education