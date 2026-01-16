import React from 'react'
import { IoGameController } from "react-icons/io5"
import { GiMusicalNotes } from "react-icons/gi"
import { RiMovieAiFill } from "react-icons/ri"
import { TbBikeFilled } from "react-icons/tb"
import { GiAirplaneDeparture } from "react-icons/gi"
import { FaMoneyCheckAlt } from "react-icons/fa"
import { TbCricket } from "react-icons/tb"
import { FaLaptopCode } from "react-icons/fa"
import { motion } from 'framer-motion'

export default function AboutSection() {
    const fadeUp = {
      hidden: { opacity: 0, x: -100 },
      show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1  }
  }

};
  
    const fadeUp2 ={
       hidden :{opacity: 0 , x:20  },
       show:{opacity:1, x:0,transition:{duration: 1}}
  }; 
  return (
    <div className="about-section">
        <h2>About Me</h2>
        <motion.p 
        initial={{opacity:0,scale:0.7}}
         whileInView={{opacity:1,scale:1,transition:{duration:1}}}
         viewport={{ once: true }}
        
        >Hi, I’m Rujoy Barai, a Computer Science student at United International University (UIU). I’m passionate about web development and programming, and I enjoy exploring new technologies to create useful project</motion.p>
        <div className="about-content">
            <div className='personal-details'>
                <h2>Personal Details</h2>
                <motion.ul
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                >
                    <li><strong>Name: </strong> <span>Rujoy Barai</span></li>
                    <li><strong>Profession:</strong> <span>Frontend Developer</span></li>
                    <li><strong>Specialization:</strong> <span>React.js, JavaScript</span></li>
                    <li><strong>Skills: </strong> <span>HTML, CSS, Bootstrap, React.js, JavaScript</span></li>
                    <li><strong>Education:</strong>  <span>Computer Science & Engineering (CSE)</span></li>
                    <li><strong>University:</strong> <span>United Internatiional University</span></li>
                    <li><strong>Email:</strong> <span>rujoybarai2005@yahoo.com</span></li>
                     <li><strong>HSC:</strong> <span>2024(GPA 5)</span></li>
                    <li><strong>SSC:</strong> <span>2022(GPA 5)</span></li>
                    <li><strong>Address:</strong> <span>Dhaka, Bangladesh</span></li>
                </motion.ul>
            </div>
            <div className='my-interest'>
                <h2>My Interests</h2>
                <motion.div className='interest-box'
                 variants={fadeUp2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                
                >
                <div className='Box1'>
                    <IoGameController size={25} color="white" id='box-child' />
                    <p>Gaming</p>
                </div>
                <div className='Box1'>
                    <GiMusicalNotes size={25} color="white" id='box-child' />
                    <p>Music</p>
                </div>
                <div className='Box1'>
                    <RiMovieAiFill size={25} color="white" id='box-child' />
                    <p>Movies</p>
                </div>
                <div className='Box1'>
                    <TbBikeFilled size={25} color="white" id='box-child' />
                    <p>Bike </p>
                </div>
                <div className='Box1'>
                    <GiAirplaneDeparture size={25} color="white" id='box-child' />
                    <p>Traveling</p>
                </div>
                <div className='Box1'>
                    <FaMoneyCheckAlt size={25} color="white" id='box-child' />
                    <p>Investing</p>
                </div>
                <div className='Box1'>
                    <TbCricket size={25} color="white" id='box-child' />
                    <p>Cricket</p>
                </div>
                <div className='Box1'>
                    <FaLaptopCode size={25} color="white" id='box-child' />
                    <p>Coding</p>
                </div>
               
                </motion.div>
            </div>

        </div>


    </div>
  )
}
