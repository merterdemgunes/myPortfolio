// AboutMe.jsx
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import imag from "../assets/blackHole2.gif"
import imag1 from "../assets/blackhole2.jpg"

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        image = {imag}
        imageSmall={imag1} 
        heading = "ABOUT"
        text = "I'm a Front-End and Back-End Developer"
      />
      <AboutContent/>
      <Footer/>
    </div>
  );
};

export default AboutMe;