import "./HeroImg2Styles.css";
import React, { useState, useEffect } from 'react';

const HeroImg2 = (props) => {

  const [chosenImage, setChosenImage] = useState(window.innerWidth < 1000 ? props.imageSmall : props.image);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 1000) {
        setChosenImage(props.imageSmall);
      } else {
        setChosenImage(props.image);
      }
    };

    window.addEventListener('resize', updateImage);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', updateImage);
  }, [props.image, props.imageSmall]);

  return (
    <div className="cont">
      <img
        src={chosenImage} 
        alt="Example Image"
      />
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default HeroImg2
