import "./AboutContentStyles.css";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>
            After completing my high school education with the highest honors in 2020 at Mafen College, Samsun, I continued my academic journey at Bahçeşehir University, Istanbul, where I am currently pursuing a degree in Computer Engineering. As a third-year student with a CGPA of 3.35, I am dedicated to doing well in both academic and self-practice work.
            <br/>
            <br/>

            Proficient in C++, Python, Java, and knowledgeable in HTML, CSS, SQL, React.js, JavaScript, and Node.js, I am equipped with a diverse skill set to tackle complex challenges in the field of computer engineering. Beyond technical skills, I am fluent in Turkish, proficient in English, and have a basic understanding of German.
            </p>
        </div>
        <div className="right">
            <h1>What do I want to do in the future?</h1>
            <p>
            In my future career, I aspire to become proficient in both front-end and back-end development, competently crafting user-friendly interfaces and robust systems.
            </p>
            <br/>
            <br/>
            <h1>What do I enjoy doing in my free time?</h1>
            <p>
            In my free time, I enjoy playing table tennis, billiards, and exercising. On weekends, I also follow Galatasaray's matches.
            </p>

        </div>
    </div>
  )
}

export default AboutContent
