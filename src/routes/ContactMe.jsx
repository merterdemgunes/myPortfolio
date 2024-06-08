// ContactMe.jsx
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Form from "../components/Form";
import imag from "../assets/blackHole6.gif"
import imag1 from "../assets/blackhole6.jpg"


const ContactMe = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        image = {imag}
        imageSmall={imag1} 
        heading = "CONTACT ME"
        text = "Feel free to contact me"
      />
      <Form/>
      <Footer/>
    </div>
  );
};

export default ContactMe;
