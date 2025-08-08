import React from 'react'
import Hero1 from './sections/Hero1'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './sections/LogoSection'
import FeaturesCard from './sections/FeaturesCard'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import ContactSection from './sections/ContactSection'
import Footer from './sections/Footer'



const App = () => {
  return (
    <>
    <NavBar/>
<Hero1/>
<ShowcaseSection/>
<LogoSection/>
<FeaturesCard/>
<ExperienceSection/>
  <TechStack/>
  <ContactSection/>
<Footer/>
    </>
  )
}

export default App
