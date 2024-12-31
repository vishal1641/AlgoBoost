import React from "react";
import "./RollingGallery.css";

const RollingGallery = ({ images = [] }) => {
  const faceCount = images.length;
  const angleStep = 360 / faceCount;
  const radius = 300; // Adjust cylinder radius

  return (
    <div className="rolling-gallery-container">
      <div className="rolling-gallery">
        {images.map((url, index) => (
          <div
            key={index}
            className="gallery-face"
            style={{
              transform: `rotateY(${index * angleStep}deg) translateZ(${radius}px)`,
            }}
          >
           <img src={url} alt="DE SHAW"/>

          </div>
        ))}
      </div>
    </div>
  );
};

export default RollingGallery;
