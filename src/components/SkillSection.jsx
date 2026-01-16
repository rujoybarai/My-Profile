import React from 'react'
import { FaHtml5 } from "react-icons/fa6"
import { IoLogoCss3 } from "react-icons/io5"
import { FaJsSquare } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { BiLogoVisualStudio } from "react-icons/bi"
import { motion } from 'framer-motion'


export default function SkillSection() {
  return (
    <div  className='Skill-section'>
        <h2>Technologies I use</h2>
        <div className='Skill-box'>
            <motion.div
              initial={{scale:0.9}}
              whileHover={{scale:1.1,color:"#E34F26",transition:{duration:1}}}
            ><FaHtml5 size={50} /></motion.div>
             <motion.div
             initial={{scale:0.9}}
              whileHover={{scale:1.1,color:"#1572B6",transition:{duration:1}}}
             >   <IoLogoCss3 size={50}/></motion.div>
            <motion.div
            initial={{scale:0.9}}
              whileHover={{scale:1.1,color:"#F7DF1E",transition:{duration:1}}}
            ><FaJsSquare size={50}/></motion.div>
            <motion.div
            initial={{scale:0.9}}
              whileHover={{scale:1.1,color:"#7952B3",transition:{duration:1}}}
            > <FaBootstrap size={50}/></motion.div>
           <motion.div
           initial={{scale:0.9}}
              whileHover={{scale:1.1,color:"#61DAFB",transition:{duration:1}}}
           > <FaReact size={50}/></motion.div>
           <motion.div
             initial={{scale:0.9}}
              whileHover={{scale:1.1,color:"#181717",transition:{duration:1}}}
           > <FaGithub size={50}/></motion.div>
            <motion.div
             initial={{scale:0.9}}
              whileHover={{scale:1.1,color:"#007ACC",transition:{duration:1}}}
            ><BiLogoVisualStudio size={50} /></motion.div>

            
        </div>
    </div>
)}
