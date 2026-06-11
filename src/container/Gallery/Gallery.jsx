import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery05,
];

function Gallery() {
  const scroll = (direction) => {
    const track = document.querySelector(".app__gallery-images_track");
    if (direction === "left") {
      track.style.animationDirection = "reverse";
    } else {
      track.style.animationDirection = "normal";
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans">
          Explore our gallery and discover the moments that make every visit
          special. From beautifully prepared dishes and refreshing drinks to
          warm hospitality and memorable gatherings, each image captures the
          atmosphere, flavor, and experience that define our restaurant.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        
        <div className="app__gallery-images_container">
          <div className="app__gallery-images_track">

            
            {galleryImages.map((image, index) => (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image} alt="gallery" />
                <BsInstagram className="gallery__images-icon" />
              </div>
            ))}

            {/* Duplicate photos for seamless loop */}
            {galleryImages.map((image, index) => (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-copy-${index + 1}`}
              >
                <img src={image} alt="gallery" />
                <BsInstagram className="gallery__images-icon" />
              </div>
            ))}

          </div>
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;