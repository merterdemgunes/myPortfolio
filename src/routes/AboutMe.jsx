// AboutMe.jsx
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';
import imag from "../assets/blackHole2.gif"

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        image = {imag}
        heading = "ABOUT"
        text = "I'm a Front-End and Back-End Developer"
        source = "https://img.freepik.com/free-photo/night-sky-glows-with-iridescent-deep-space-generative-ai_188544-11285.jpg"
      />
      <AboutContent/>
      <Footer/>
    </div>
  );
};

export default AboutMe;