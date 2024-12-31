// import React from "react";
// import "./RollingGallery.css";

// const RollingGallery = ({ images = [] }) => {
//   const faceCount = images.length;
//   const angleStep = 360 / faceCount;
//   const radius = 300; // Adjust cylinder radius

//   return (
//     <div className="rolling-gallery-container">
//       <div className="rolling-gallery">
//         {images.map((url, index) => (
//           <div
//             key={index}
//             className="gallery-face"
//             style={{
//               transform: `rotateY(${index * angleStep}deg) translateZ(${radius}px)`,
//             }}
//           >
//            <img src={url} alt=""/>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RollingGallery;


import React from "react";
import "./RollingGallery.css";

const RollingGallery = ({ images = [] }) => {
  const faceCount = images.length;
  const angleStep = 360 / faceCount;
  const radius = 300; // Adjust cylinder radius

  return (
    <div className="rolling-gallery-container" style={{ position: "relative", width: "100%", height: "350px", margin: "auto", perspective: "1000px" }}>
      <div
        className="rolling-gallery"
        style={{
          display: "flex",
          flexWrap: "wrap",
          transformStyle: "preserve-3d",
          animation: "rotate 20s infinite linear", // Rotation animation
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          
        }}
      >
        {images.map((text, index) => (
          <div
            key={index}
            className="gallery-face"
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              backgroundColor:"#1c1c1c", // Set black background
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: `rotateY(${index * angleStep}deg) translateZ(${radius}px)`,
              color: "white",
              fontSize: "24px", // Adjust text size
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RollingGallery;
