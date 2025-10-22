// Skills.jsx
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import imag from "../assets/blackHole8.gif"
import SkillsContent from '../components/SkillsContent';

const Skills = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        image = {imag}
        heading = "SKILLS"
        text = "Here is a collection of my capabilities"
      />
      <SkillsContent/>
      <Footer/>
    </div>
  );
};

export default Skills;
