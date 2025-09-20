// src/components/About.js

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>Hotel Aiswarya</h1>
      <p className="tagline">Your comfort. Our priority.</p>

      <div className="about-content">
        <p>
          Flavors that comfort. Spices that excite. Meals you’ll remember.
        </p>
      </div>

      <div className="map-section">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            title="Hotel Aiswarya Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.925876909047!2d75.8081320748014!3d11.560042744251788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba67b0054b74c05%3A0xd34717db734ac83c!2sAiswarya%20hotel!5e1!3m2!1sen!2sin!4v1758288345544!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;

