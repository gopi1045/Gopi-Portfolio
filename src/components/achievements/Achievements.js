import React from 'react'
import './achievements.css'
import { Pagination} from 'swiper/modules';
// import Swiper core and required modules

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
    {
        id:1,
        title:"AWS CERTIFIED CLOUD PRACTITIONER",
        description:"Familiar with AWS cloud infrastructure, design principles, architecture, billing, and support documentation.",
    },
    {
        id:2,
        title:"English Typewriting",
        description:"Attained a First-Class certification in English Typewriting at the Higher level.",
    },
    {
        id:3,
        title:"Foundation For Excellence Awardee",
        description:"Recipient of a prestigious 4-year scholarship from Cognizant in recognition of outstanding academic achievements",
    }
    
]
const Achievements = () => {
  return (
    <section id="achievements">
        <h2>Participations and Achievements</h2>

        <Swiper className="container achievements__container"
               // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                data.map((data,index)=>{
                    return (
                        <SwiperSlide key={data.id} className="achievements__item">
                            <h4 className='achievements__title'>{data.title}</h4>
                            <small className='achievements__description'>{data.description}</small>
                         </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Achievements