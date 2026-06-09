import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          We are Mesob, a family-owned restaurant in Addis Ababa dedicated to serving fresh, homemade meals made with love. Our goal is simple — great food, warm service, and a place where everyone feels welcome
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Mesob Restaurant opened its doors in 2018 in the heart of Addis
          Ababa. We are a family-owned restaurant passionate about serving
          fresh, delicious meals made from locally sourced ingredients. What
          started as a small neighborhood kitchen has grown into a warm and
          welcoming place where families and friends come together to enjoy
          great food. We take pride in our community and put love into every
          dish we serve
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
