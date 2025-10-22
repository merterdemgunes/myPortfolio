//Navbar.jsx
import React, { useState } from 'react';
import "./NavbarStyles.css";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/home">
        <h1>My Portfolio</h1>
      </Link>
        <ul className= {click ? 'nav-menu active' : "nav-menu"}>
          <li><Link onClick = {handleClick} to="/home">Home</Link></li>
          <li><Link onClick = {handleClick} to="/about">About Me</Link></li>
          <li><Link onClick = {handleClick} to="/skills">Skills</Link></li>
          <li><Link onClick = {handleClick} to="/projects">Projects</Link></li>
          <li><Link onClick = {handleClick} to="/contact">Contact Me</Link></li>

          <li><Link onClick = {handleClick} to="/logout" fontSize = "large"><LogoutIcon/></Link></li>
        </ul>
        <div className='hamburger'>
        <MenuIcon onClick = {handleClick} fontSize = "large" style={{ color: 'white' }} />
        </div>
    </div>
  );
};

export default Navbar;
