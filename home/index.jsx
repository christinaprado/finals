import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>Hello, I'm Christina Prado</h1>
          <h3>Software Developer & Designer</h3>
          <p>
            Welcome to my personal website! I'm passionate about creating beautiful, 
            functional digital experiences that solve real-world problems. With a 
            background in computer science and design, I bring a unique perspective 
            to every project I work on.
          </p>
          <p>
            I believe in continuous learning and pushing the boundaries of what's 
            possible with technology. When I'm not coding, you can find me exploring 
            nature, reading a good book, or experimenting with new recipes in the kitchen.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
        <div className="about-image">
          <div className="profile-image">
            <div className="image-placeholder">
              <span>Profile Image</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 