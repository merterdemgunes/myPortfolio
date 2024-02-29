import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";
import React from 'react'
import WorkCardData from "../components/WorkCardData";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map( (val,ind) =>{
                return (
                <WorkCard 
                    key ={ind}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    detail = {val.detail}
                    view = {val.view}
                    source = {val.source}
                />);
            }
            )}
        </div>
    </div>
  )
}

export default Work
