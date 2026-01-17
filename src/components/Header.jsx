import React from 'react'
import { motion } from 'framer-motion'
import Logo from "../assets/Logo.png"


export default function Header({scrollToContact}) {

  return (
    <div className="header">
        <div className="Logo">
            <h2><img src={Logo} alt="" /></h2>
        </div>
         
        <ul className="nav-list">
         
            <motion.li 
            whileHover={{ scale: 1.1 }}
            
            whileTap={{ scale: 0.95 }}
            
            ><a htmlhref='/'>Home</a></motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
            
            whileTap={{ scale: 0.95 }}
            ><a onClick={scrollToContact} >Contact Me</a></motion.li>

          
        </ul>
    </div>
  )
}
