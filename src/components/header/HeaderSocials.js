import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {TbBrandLeetcode} from 'react-icons/tb'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/gopi-a-535a3b193/" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/gopi1045" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://leetcode.com/Gopi_/" target='_blank' rel="noreferrer"><TbBrandLeetcode/></a>
    </div>
  )
}

export default HeaderSocials