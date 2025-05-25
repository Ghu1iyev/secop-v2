import React from 'react'
import AboutUs from './about-us'
import PartnersSlider from './partners-slider'
import OurProjects from './our-projects'
import Services from './home-services'

const Home = () => {
  return (
    <div className='container'>
      <AboutUs />
      <PartnersSlider />
      <OurProjects />
      <Services />
    </div>
  )
}

export default Home
