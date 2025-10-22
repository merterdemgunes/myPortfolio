import "./AboutContentStyles.css";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>
              I am Mert Erdem Güneş, a Computer Engineering graduate from Bahçeşehir University
              with a GPA of 3.48. Throughout my academic journey, I have consistently focused on
              enhancing my technical skills and contributing to both academic and independent projects.
              I am passionate about building efficient, scalable, and user-friendly software solutions,
              and I continuously seek opportunities to grow in the field of software development.
            </p>

            <br/>
            <br/>

            <h1>My Goals</h1>
            <p>
              I aim to specialize in <b>full-stack development</b>, combining strong backend logic
              with appealing and functional user interfaces. I am also deeply interested in
              <b>artificial intelligence</b> and <b>machine learning</b>, and I plan to integrate these
              technologies into modern software solutions to create smarter, data-driven systems.
            </p>
        </div>
        <div className="right">
            <h1>What do I do?</h1>
            <p>
              I completed a one-year long-term internship at <b>Halkbank Internet Banking Department</b>,
              where I contributed to both <b>frontend</b> and <b>backend</b> development processes.
              On the backend side, I worked with <b>.NET (C#)</b> and <b>MSSQL</b>, while on the frontend
              I developed components using <b>Angular</b>. During this experience, I gained hands-on
              exposure to real-world, high-traffic systems and participated in multiple projects that
              were deployed to production. This internship helped me develop a strong understanding of
              corporate software development, teamwork in agile environments, and building secure,
              scalable applications in the financial domain.
            </p>
        </div>
    </div>
  )
}

export default AboutContent
