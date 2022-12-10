import React from 'react';
import './About.css';
import pic from '../../../images/profile.jpg';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Fragment } from 'react';
const About = () => {
  return (
    <Fragment>
      <div className="heading">About me</div>

      <div className="about">
        <div className="aboutme">
          <img src={pic} alt="profile" className="profile" />
          <h2 style={{ textAlign: 'center' }}>Arjun Laxane</h2>
          <p>A Full Stack Devloper</p>
        </div>

        <div className="connect">
          <h3 style={{ textAlign: 'center', marginBottom: '2vmax' }}>
            Have a look at
          </h3>
          <a href="https://github.com/arjunlaxane">
            <GitHubIcon sx={{ fontSize: '10vmax' }} />
          </a>
          <a href="https://6339b7bf478ad57241faa2f0--unique-melomakarona-b44daa.netlify.app/">
            <WebIcon sx={{ fontSize: '10vmax' }} />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
