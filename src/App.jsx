import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './Responsive.css'
import Header from './components/Header.jsx'
import Profile from './components/Profile.jsx'
import AboutSection from './components/AboutSection.jsx'
import SkillSection from './components/SkillSection.jsx'
import ProjectSection from './components/ProjectSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Analytics } from "@vercel/analytics/react"

import Massage from './components/MassagePage/Massage.jsx'


function App() {
  
   const SaveMassage=JSON.parse(localStorage.getItem('ShowMassage')) || null;

  const contactRef = useRef(null);
  const MassaRef =useRef(null);
  const [ShowMassage,setShowMassage]=useState(SaveMassage);

 
  

useEffect(()=>{
  localStorage.setItem('ShowMassage',JSON.stringify(ShowMassage));
},[ShowMassage]);


  const AddMassage =(Name,Email,Mass)=>{
     setShowMassage( [{Name, Email, Mass }]);
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

   const scrollMassge =()=>{
    MassaRef.current?.scrollIntoView({behavior:'smooth'})
   }
  return (
    <div  className="App">
    
      <Header  scrollToContact={scrollToContact} scrollMassge={scrollMassge} ShowMassage={ShowMassage}/>
      <Profile  />
      <AboutSection />
      <SkillSection/>
      <ProjectSection/>
      <ContactSection ref={contactRef} AddMassage={AddMassage} scrollMassge={scrollMassge}/>
      {ShowMassage &&  <Massage ShowMassage={ShowMassage}  ref={MassaRef} setShowMassage={setShowMassage}/>}
        <Analytics />
       
     
    </div>
  )
}

export default App
