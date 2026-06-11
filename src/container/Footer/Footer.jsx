import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";
import { images } from "../../constants";

function Footer() {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">
            Bole Road, Atlas Building, Ground Floor Bole Sub-City, Woreda 03
            Addis Ababa, Ethiopia
          </p>

          <p className="p__opensans">+251 9-83-92-83-92</p>

          <p className="p__opensans">+251 9-73-83-73-73</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.Mesob} alt="footer-logo" />
          <p className="p__opnesans">A place where every guest feels at home.</p>
          <img src={images.spoon} alt="spoon" className="spoon__image" />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>

          <p className="p__opensans">8:00 AM – 10:00 PM</p>
           
           <p className="p__opensans">Saturday-Sunday:</p>

          <p className="p__opensans">9:00 AM – 11:00 PM</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">© 2020–2026 Mesob. All Rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
