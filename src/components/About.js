import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <img
        src="https://your-photo-url.jpg" // Replace with your actual photo URL
        alt="Your Name"
        className="profile-photo"
      />
      <div className="about-info">
        <h2>Your Name</h2>
        <p>
          I am a passionate software engineer with expertise in various
          technologies. I enjoy solving complex problems and creating
          innovative solutions.
        </p>
        {/* Add more information about yourself as needed */}
      </div>
    </div>
  );
};

export default About;
