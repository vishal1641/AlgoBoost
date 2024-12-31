// import React from "react";
// import { useSpring, animated } from "react-spring";
// import "./TeamSection.css";

// const teamMembers = [
//   {
//     photo:"ashish.jpg",
//     name: "Ashish Mishra",
//     role: "TCS Digital Placed",
//     quality:"500+ DSA questions",
//     insta: "https://www.instagram.com/ashish_mishra",
//     linkedin: "https://www.linkedin.com/in/ashish-mishra",
//   },
//   {

//     photo:"vishal.jpg",
//     name: "Vishal Kumar Tiwari",
//     role: "TCS Prime Placed",
//     quality:"1000+ DSA questions",
//     insta: "https://www.instagram.com/vishal_tiwari",
//     linkedin: "https://www.linkedin.com/in/vishal-tiwari",
//   },
//   {
//     photo:"ujjwal.png",
//     name: "Ujjwal Kumar",
//     role: "Global Logic Hitachi Placed",
//     quality:"600+ DSA questions",
//     insta: "https://www.instagram.com/ujjwal_kumar",
//     linkedin: "https://www.linkedin.com/in/ujjwal-kumar",
//   },
//   {
//     photo:"suarabh.jpg",
//     name: "Saurabh Kumar Singh",
//     role: "Global Logic Hitachi Placed",
//     quality:"500+ DSA questions",
//     insta: "https://www.instagram.com/saurabh_singh",
//     linkedin: "https://www.linkedin.com/in/saurabh-kumar-singh",
//   },
  
// ];

// const TeamSection = ({ isDarkTheme }) => {
//   return (
//     <div className="team-section"    style={{backgroundColor: isDarkTheme ? "#0f0f0f" : "#d6cab8"}}>
//       <h2 className="section-title"style={{color: isDarkTheme ? "white" : "black"}}>Meet Our Team</h2>
//       <div className="team-container"  >
//         {teamMembers.map((member, index) => (
//           <TeamCard isDarkTheme={isDarkTheme} key={index} member={member} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const TeamCard = ({ member ,isDarkTheme}) => {
//   const [hovered, setHovered] = React.useState(false);

//   const flip = useSpring({
//     transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
//     opacity: hovered ? 0.9 : 1,
//   });

//   const zoom = useSpring({
//     scale: hovered ? 1.1 : 1,
//     boxShadow: hovered ? "0 10px 30px rgba(0,0,0,0.2)" : "0 5px 15px rgba(0,0,0,0.1)",
//   });

//   return (
//     <animated.div
//       className="team-card"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={zoom}
//     >
//       <animated.div className="team-card-inner" style={flip}>
//         <div className="team-card-front" style={{backgroundColor: isDarkTheme ? "#1B1B1B" : "#f2f0ef"}} >
//           <img
//             src={member.photo}
//             alt={member.name}
//             className="team-member-image"
//           />
//           <div className="team-info">
//             <h3 style={{color:isDarkTheme?"white":"black"}}>{member.name}</h3>
//             <p style={{color:"#DC143C"}}>{member.role}</p>
//             <p style={{color:isDarkTheme?"white":"black"}}>{member.quality}</p>

//           </div>
//         </div>
//         <div className="team-card-back"  style={{backgroundColor: isDarkTheme ? "#0f0f0f" : "#d6cab8"}}>
//           <div className="social-icons">
//             <a href={member.insta} target="_blank" rel="noopener noreferrer" className="social-icon">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
//               <i className="fab fa-linkedin"></i>
//             </a>
//           </div>
//         </div>
//       </animated.div>
//     </animated.div>
//   );
// };

// export default TeamSection;


import React from "react";
import { useSpring, animated } from "react-spring";
import "./TeamSection.css";

const teamMembers = [
  {
    photo: "ashish.jpg",
    name: "Ashish Mishra",
    role: "TCS Digital Placed",
    quality: "500+ DSA questions",
    insta: "https://www.instagram.com/ashish_mishra",
    linkedin: "https://www.linkedin.com/in/ashish-mishra",
  },
  {
    photo: "vishal.jpg",
    name: "Vishal Kumar Tiwari",
    role: "TCS Prime Placed",
    quality: "1000+ DSA questions",
    insta: "https://www.instagram.com/vishal_tiwari",
    linkedin: "https://www.linkedin.com/in/vishal-tiwari",
  },
  {
    photo: "ujjwal.png",
    name: "Ujjwal Kumar",
    role: "Global Logic Hitachi Placed",
    quality: "600+ DSA questions",
    insta: "https://www.instagram.com/ujjwal_kumar",
    linkedin: "https://www.linkedin.com/in/ujjwal-kumar",
  },
  {
    photo: "suarabh.jpg",
    name: "Saurabh Kumar Singh",
    role: "Global Logic Hitachi Placed",
    quality: "500+ DSA questions",
    insta: "https://www.instagram.com/saurabh_singh",
    linkedin: "https://www.linkedin.com/in/saurabh-kumar-singh",
  },
];

const TeamSection = ({ isDarkTheme }) => {
  return (
    <div
      className="team-section"
      style={{ backgroundColor: isDarkTheme ? "#0f0f0f" : "pink" }}
    >
      <h2
        className="section-title"
        style={{ color: isDarkTheme ? "white" : "black" }}
      >
        Meet Our Team
      </h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <TeamCard isDarkTheme={isDarkTheme} key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const TeamCard = ({ member, isDarkTheme }) => {
  const [hovered, setHovered] = React.useState(false);

  const fadeIn = useSpring({
    opacity: hovered ? 1 : 0,
    transform: hovered ? "translateY(0)" : "translateY(10px)",
  });

  return (
    <div
      className="team-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius:"52px 10px 10px 10px",
        backgroundColor: isDarkTheme ? "#1B1B1B" : "#f2f0ef",
        boxShadow: hovered
          ? "0 10px 30px rgba(0,0,0,0.2)"
          : "0 5px 15px rgba(0,0,0,0.1)",
        transform: hovered ? "scale(1.05)" : "scale(1)",
      }}
    >
      <img
        src={member.photo}
        alt={member.name}
        className="team-member-image"
      />
      <div className="team-info" >
        <h3 style={{ color: isDarkTheme ? "white" : "black" }}>{member.name}</h3>
        <p style={{ color: "#DC143C" }}>{member.role}</p>
        <p style={{ color: isDarkTheme ? "white" : "black" }}>
          {member.quality}
        </p>
      </div>
      <animated.div className="social-icons" style={fadeIn}>
        <a
          href={member.insta}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </animated.div>
    </div>
  );
};

export default TeamSection;
