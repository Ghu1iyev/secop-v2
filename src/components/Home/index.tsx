import React from "react";
import Info from "./info";
import Blogs from "./blogs";
import Marquee from "./marquee";
import AboutUs from "./about-us";
import OurTeam from "./our-team";
import Services from "./home-services";
import OurProjects from "./our-projects";
import Certificates from "./certificates";
import PartnersSlider from "../shared/partners-slider";

const Home = () => {
  return (
    <div className="container">
      <AboutUs />
      <PartnersSlider />
      <OurProjects />
      <Services />
      <Marquee />
      <Info />
      <Certificates />
      <Blogs />
      {/* <OurTeam /> */}
    </div>
  );
};

export default Home;
