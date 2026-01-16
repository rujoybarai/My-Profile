import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './Responsive.css'
import Header from './components/Header.jsx'
import Profile from './components/Profile.jsx'
import AboutSection from './components/AboutSection.jsx'
import SkillSection from './components/SkillSection.jsx'
import ProjectSection from './components/ProjectSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import { useRef } from 'react'
import { useState } from 'react'

function App() {
  const contactRef = useRef(null)
  const [ShowMassage,setShowMassage]=useState();

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div  className="App">
      <Header  scrollToContact={scrollToContact}/>
      <Profile ShowMassage={ShowMassage}/>
      <AboutSection />
      <SkillSection/>
      <ProjectSection/>
      <ContactSection ref={contactRef} setShowMassage={setShowMassage}/>
    </div>
  )
}

export default App
