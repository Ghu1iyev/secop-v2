import React from 'react'
import AboutUs from './about-us'
import PartnersSlider from './partners-slider'
import OurProjects from './our-projects'
import Services from './home-services'
import Marquee from './marquee'
import Certificates from './certificates'
import Blogs from './blogs'
import CompanySwiper from '../swiper/company-swiper'

const Home = () => {
  return (
    <div className='container'>
      <AboutUs />
      <PartnersSlider />
      <OurProjects />
      <Services />
      <Marquee />
      <CompanySwiper />
      <Certificates />
      <Blogs />
      {/* <OurTeam /> */}
    </div>
  )
}

export default Home
