import "./FooterStyles.css";
import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
              <div className="item"> 
                <HomeIcon fontSize = "large" 
                  style={{ marginRight: "2rem", color: 'white' }}/>
                <p>
                Feriköy Neighborhood, Murat
                Apartment, Gediz St
                </p>  
              </div>
              <div className="item"> 
                <PhoneIcon fontSize = "large" 
                  style={{ marginRight: "2rem", color: 'white' }}/>
                <h4>+90 532 723 90 85</h4> 
              </div>
              <div className="item"> 
                <EmailIcon fontSize = "large" 
                    style={{ marginRight: "2rem", color: 'white' }}/>
                <h4>merterdemgunes@gmail.com</h4> 
              </div>  
            </div>
        </div>

        <div className="right"> 
          <h4>About me</h4>
          <p>These are my web sites</p>
          <div className="social">
          <a href="https://www.linkedin.com/in/merterdemgunes/">
            <LinkedInIcon fontSize = "large" 
                  style={{ marginRight: "2rem", color: 'white' }}/>
          </a>

          <a href="https://github.com/merterdemgunes">
            <GitHubIcon fontSize = "large" 
                  style={{ marginRight: "2rem", color: 'white' }}/>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;


