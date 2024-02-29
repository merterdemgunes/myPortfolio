//HeroImg
import React from 'react';
import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg"
import myImage from "../assets/Mert_Erdem_Gunes_Vesikalık.jpg"

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img'
        src = {IntroImg} alt= "IntroImg"/>
      </div>
      <div className='content'>
        <img className='my-img' src={myImage} alt="YourImageAltText" />        
        <p>HI, I'M MERT ERDEM GÜNEŞ</p>
        <h1>FRONT END & BACK END Developer</h1>
      </div>
    </div>
  );
};

export default HeroImg;