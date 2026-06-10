import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

function Chef() {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef image" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="From Our Chef" />
        <h1 className="headtext__cormorant">
          Crafting Memorable Dining Experiences
        </h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <p className="p__opensans">
              From our kitchen to your table, every plate is thoughtfully
              prepared with authentic recipes, premium ingredients, and genuine
              hospitality. We invite you to savor not just a meal, but a journey
              of flavors that celebrate community, culture, and the simple joy
              of good food shared with good company.
            </p>
          </div>
        </div>

        <div className="app__chef-sign">
          <p>Abebe Kebede</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
}

export default Chef;
