import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import './FindUs.css'

function FindUs() {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant">Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">
            Bole Road, Atlas Building, Ground Floor Bole Sub-City, Woreda 03
            Addis Ababa, Ethiopia
          </p>

          <p className="p__cormorant opening-hours">
            Opening Hours
          </p>

          <p className="p__opensans">
            Monday – Friday: 8:00 AM – 10:00 PM
          </p>

          <p className="p__opensans">
            Saturday – Sunday: 9:00 AM – 11:00 PM
          </p>

        </div>

        <button className="custom__button">Visit Us</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus" />
      </div>
    </div>
  );
}

export default FindUs;
