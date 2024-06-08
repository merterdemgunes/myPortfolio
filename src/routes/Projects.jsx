// Projects.jsx
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';
import imag from "../assets/blackHole10.gif"
import imag1 from "../assets/blackhole10.jpg"

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        image = {imag}
        imageSmall={imag1} 
        heading = "PROJECTS"
        text = "Some of my most recent works"
      />
      <Work/>
      <Footer/>
    </div>
  );
};

export default Projects;
