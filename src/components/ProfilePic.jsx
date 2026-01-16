import React from 'react'
import profilePic from '../assets/profile.jpg';
import { motion } from 'framer-motion';

export default function ProfilePic() {
  return (
    <motion.div className="profile-pic"
    
      animate={{
    scale: [1, 0.95, 1],
    opacity: [0.8, 1, 0.8],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
    >
      <div className="pic-card">
       <div className="pic-circle">
        <img src={profilePic} alt="Profile" />

       </div>
      </div>
        
      
    </motion.div>
  )
}
