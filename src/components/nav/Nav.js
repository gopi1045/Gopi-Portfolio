import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineContactPage} from 'react-icons/md'
import {TbSchool} from 'react-icons/tb'
import {BsPersonWorkspace} from 'react-icons/bs'
import {LuTrophy} from 'react-icons/lu'
import {MdOutlineWorkOutline} from 'react-icons/md'

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')

  // eslint-disable-next-line
  return (
   <nav>
    {/* eslint-disable-next-line */}
    <a href="#" className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
    <a href="#about" className={activeNav==='about'?'active':''} onClick={()=>setActiveNav("about")}><AiOutlineUser/></a>
    <a href="#experience" className={activeNav==='experience'?'active':''} onClick={()=>setActiveNav("experience")}><MdOutlineWorkOutline/></a>
    <a href="#expertise" className={activeNav==='expertise'?'active':''} onClick={()=>setActiveNav("expertise")}><BiBook/></a>
    <a href="#education" className={activeNav==='education'?'active':''} onClick={()=>setActiveNav("education")}><TbSchool/></a>
    <a href="#projects" className={activeNav==='projects'?'active':''} onClick={()=>setActiveNav("projects")}><BsPersonWorkspace/></a>
    <a href="#achievements" className={activeNav==='achievements'?'active':''} onClick={()=>setActiveNav("achievements")}><LuTrophy/></a>
    <a href="#contact" className={activeNav==='contact'?'active':''} onClick={()=>setActiveNav("contact")}><MdOutlineContactPage/></a>
    
   </nav>
  )
}

export default Nav