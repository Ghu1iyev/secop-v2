import React from 'react'
import AboutUs from './about-us'
import OurProjects from './our-projects'
import Services from './home-services'
import Marquee from './marquee'
import Certificates from './certificates'
import Blogs from './blogs'
import CompanySwiper from '../swiper/company-swiper'
import PartnersSlider from '../swiper/partners-slider'
import OurTeams from './our-team'


const Home = () => {
  return (
    <div className="container">
      <AboutUs />
      <PartnersSlider />
      <OurProjects />
      <Services />
      <Marquee />
      <CompanySwiper />
      <Certificates />
      <OurTeams />
      <Blogs />
    </div>
  );
};

export default Home;
