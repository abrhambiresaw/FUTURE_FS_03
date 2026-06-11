import React from "react";

import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="chase the new flavour" />
      <h1 className="app__header-h1">Discover Exceptional Taste</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        {" "}
        Experience the rich flavors of Ethiopia at Mesob — where every dish is
        crafted with love, fresh local ingredients, and generations of culinary
        tradition.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.Tibs} alt="header img" />
    </div>
  </div>
);

export default Header;
