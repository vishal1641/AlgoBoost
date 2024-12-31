import React from "react";
import "./WhyChooseUs.css"; // Custom CSS for styling
import { FaCode, FaUserFriends, FaCheckCircle, FaLaptopCode } from "react-icons/fa";

const WhyChooseUs = ({ isDarkTheme }) => {
  const reasons = [
    {
      icon: <FaCode size={40} color="#4CAF50" />,
      title: "Expert Engineers",
      description: "Learn from our experience as we have impressive coding profiles and we are placed in top tech companies like TCS and Global Logic Hitachi.",
    },
    {
      icon: <FaLaptopCode size={40} color="#2196F3" />,
      title: "Curated Resources",
      description: "Access meticulously filtered DSA sheets, interview question banks, and hands-on practice materials.",
    },
    {
      icon: <FaUserFriends size={40} color="#FF5722" />,
      title: "Beginner-Friendly",
      description: "Whether you're new to coding or looking to level up, our tailored guidance ensures your success.",
    },
    {
      icon: <FaCheckCircle size={40} color="#FFC107" />,
      title: "Proven Success",
      description: "Focus only on what matters and secure your dream job in just 5 months.",
    },
  ];

  return (
    <section className="why-choose-us "  style={{backgroundColor: isDarkTheme ? "#0f0f0f" : "#d6cab8"}}>
      <h2 className="section-title" style={{color: isDarkTheme ? "white" : "black"}}>Why Choose Us?</h2>
      
      <div className="reasons-container"  >
        {reasons.map((reason, index) => (
          <div className="reason-card" key={index}  style={{backgroundColor: isDarkTheme ? "#100101" : "white"}}>
            <div className="icon">{reason.icon}</div>
            <h3 className="reason-title" style={{color:"#DC143C"}}>{reason.title}</h3>
            <p className="reason-description" style={{color: isDarkTheme ? "white" : "black"}}>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
