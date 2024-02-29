import'./SkillsContentStyles.css';
import React from 'react';

const SkillsContent = () => {
    const skills = [
        { name: 'HTML', percentage: 70 },
        { name: 'CSS', percentage: 70 },
        { name: 'JavaScript', percentage: 80 },
        { name: 'React.js', percentage: 80 },
        { name: 'C++', percentage: 90 },
        { name: 'Python', percentage: 65 },
        { name: 'Java', percentage: 90 },
    ];

    return (
        <div className="skills-container">
        {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
            <p>{skill.name}</p>
            <div className="progress-bar">
                <div
                className="progress"
                style={{ width: `${skill.percentage}%` }}>
                </div>
            </div>
            </div>
        ))}
        </div>
    );
}

export default SkillsContent


