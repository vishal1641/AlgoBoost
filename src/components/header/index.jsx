import React, { useEffect, useState } from "react";


import "aos/dist/aos.css"; // Import AOS styles;
import RollingGallery from "./RollingGallery";
import TeamSection from "./TeamSection";
import FAQ from "./FAQ.jsx";
import Footer from "./Footer";
import WhyChooseUs from "./WhyChooseUs";
import AOS from "aos";

import PricingSection from "./PricingSection";
import { FaLaptopCode } from "react-icons/fa";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = () => {


  
  const reasons = [
    {
      icon: <FaLaptopCode size={40} color="#4CAF50" />,
      title: "AlgoBoost 1st Year Sheet",
      description:
        "Access meticulously filtered DSA sheet, with more than 300+ Leetcode problems for 1st year students.",
      sheetLink:
        "https://docs.google.com/spreadsheets/d/1Kb6nNXesQIdKH6BxAQkrWzR8JSoefwYheRP6EKBdrCk/edit?gid=0#gid=0", // Replace with the actual link
    },

    {
      icon: <FaLaptopCode size={40} color="#2196F3" />,
      title: "AlgoBoost 2nd Year Sheet",
      description:
        "Access meticulously filtered DSA sheet, with more than 300+ Leetcode problems for 2nd year students.",
      sheetLink:
        "https://docs.google.com/spreadsheets/d/1Kb6nNXesQIdKH6BxAQkrWzR8JSoefwYheRP6EKBdrCk/edit?gid=0#gid=0", // Replace with the actual link
    },
    {
      icon: <FaLaptopCode size={40} color="#FF5722" />,
      title: "AlgoBoost 3rd Year Sheet",
      description:
        "Access meticulously filtered DSA sheet, with 200 Leetcode problems for 3rd year students.",
      sheetLink:
        "https://docs.google.com/spreadsheets/d/116taumzuvZY0Di0Oz-QN4c1nQP6q_n6x06Jzc0wlt30/edit?gid=0#gid=0",
    },

    {
      icon: <FaLaptopCode size={40} color="#FFC107" />,
      title: "AlgoBoost 4th Year Sheet",
      description:
        "Access meticulously filtered DSA sheet, with 80 Leetcode problems for 4th year students.",
      sheetLink:
        "https://docs.google.com/spreadsheets/d/1r8Aa0wj22QuxJsgSLz0hl-k8mSefRSknAJhZ9BX75Fg/edit?gid=0#gid=0",
    },
  ];

 
  const images = [
    "TCS",
    "YAMAHA",
    "SAMSUNG",
    "GL HITACHI",
    "COGNIZANT",
    "CAPGEMINI",
    "D.E. SHAW",
    "GIRIKON",
    "Q SPIDER",
  ];

 

  const [stars, setStars] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      once: true, // Only animate once
    });
  }, []);

  useEffect(() => {
    if (true) {
      document.body.style.backgroundColor = isDarkTheme ? "#1a1a1a" : "#f5f5f5";
      generateRandomStars();
    } else {
      document.body.style.backgroundColor = "";
      setStars([]);
    }
  }, [isDarkTheme]);

  const generateRandomStars = () => {
    const numberOfStars = 110;
    let generatedStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      const size = Math.random() * (3 - 1) + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;

      generatedStars.push({
        size,
        left: `${left}%`,
        top: `${top}%`,
        speedX,
        speedY,
      });
    }
    setStars(generatedStars);
  };

  useEffect(() => {
    const moveStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          let newLeft = parseFloat(star.left);
          let newTop = parseFloat(star.top);

          newLeft += star.speedX;
          newTop += star.speedY;

          if (newLeft <= 0 || newLeft >= 100) star.speedX = -star.speedX;
          if (newTop <= 0 || newTop >= 100) star.speedY = -star.speedY;

          return {
            ...star,
            left: `${newLeft}%`,
            top: `${newTop}%`,
          };
        })
      );
    };

    const intervalId = setInterval(moveStars, 50);

    return () => clearInterval(intervalId);
  }, [stars]);

  const handleDownloadRoadmap = () => {
    const link = document.createElement("a");
    link.href = "/algoboost.pdf";
    link.download = "algoboost.pdf";
    link.click();
  };

  const handleSheetOpen = (sheetLink) => {
    window.open(sheetLink, "_blank"); // Opens the Google Spreadsheet in a new tab
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  

  return (
    <>
      <nav
        className={`flex justify-between items-center w-full h-16 px-6 fixed top-0 left-0 z-20 ${
          isDarkTheme
            ? "bg-white/10 backdrop-blur-lg bg-opacity-20 border border-black/10 shadow-xl"
            : "bg-white/10 backdrop-blur-lg bg-opacity-30 border border-black/10 shadow-xl"
        } transition duration-300 ease-in-out`}
      >
        <div
          className={`text-4xl font-extrabold font-poppins relative group ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
          style={{
            cursor: "pointer",
            transition:
              "transform 0.3s ease, color 0.3s ease, text-shadow 0.3s ease",
            fontSize: "25px",
          }}
        >
          AlgoBoost.
          <div
            className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-30 transition duration-500 ease-in-out"
            style={{
              borderRadius: "50%",
              filter: "blur(8px)",
              zIndex: -1,
            }}
          ></div>
        </div>
      </nav>

      {/* {userLoggedIn && ( */}
      <>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {stars.map((star, index) => (
            <div
              key={index}
              style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.left,
                top: star.top,
                borderRadius: "50%",
                backgroundColor: isDarkTheme ? "white" : "black",
                position: "absolute",
                transition: "all 0.2s ease-in-out",
                animation: "twinkle 1s infinite",
              }}
              className="absolute"
            />
          ))}
        </div>
        <div
          className={`absolute top-28 left-1/2 transform -translate-x-1/2 rounded-lg p-6 text-center shadow-2xl w-full sm:w-auto ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
          style={{
            opacity: 1,
            transition: "ease-in-out",
            minHeight: "300px",
            padding: "2rem",
          }}
        >
          <h2
            className="font-extrabold font-poppins mb-4"
            style={{
              fontSize: "2.5rem",
            }}
          >
            About Us.
          </h2>
          <p className=" font-calibri text-m mb-3">
            Welcome to &nbsp;
            <span
              style={{
                color: "red",
                fontFamily: "sans-serif",
                fontSize: "20px",
              }}
            >
              AlgoBoost 🌟
              <br />
            </span>
            Gear up for success with AlgoBoost, your one-stop solution for
            mastering DSA, core CS concepts, and competitive programming. Our
            curated DSA sheets, including company-specific problem sets, are
            designed to boost your problem-solving skills and prepare you for
            interviews. <br /> <br />
            Elevate your preparation with our Basic and Premium Plans, offering
            personalized one-on-one sessions with your final year seniors placed
            at top companies. Unlock your potential, achieve your goals, and let
            AlgoBoost be your partner in success! 🚀
          </p>

          <div className="flex justify-center space-x-4 mt-6 flex-wrap">
            <button
              onClick={handleDownloadRoadmap}
              className={`px-6 py-3 border text-sm font-medium rounded-full transition duration-300 ${
                isDarkTheme
                  ? "bg-transparent border-white text-white hover:bg-white/40 hover:text-white"
                  : "bg-transparent border-black text-black hover:bg-black/10 hover:text-black"
              }`}
            >
              DSA Roadmap
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/spreadsheets/d/1Et1PWOEuDz25_KDjGCHALastZXhBNKXvJi4LT-gpei4/edit?gid=0#gid=0",
                  "_blank"
                )
              }
              className={`px-6 py-3 border text-sm font-medium rounded-full transition duration-300 ${
                isDarkTheme
                  ? "bg-transparent border-white text-white hover:bg-white/40 hover:text-white"
                  : "bg-transparent border-black text-black hover:bg-black/10 hover:text-black"
              }`}
            >
              Tcs Sheet
            </button>
          </div>
        </div>
      </>
      {/* )} */}

      {/* Bouncing Circular "Explore More" Div */}
      <div
  className={`hidden md:block fixed bottom-10 left-10 w-11 h-26 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
    isDarkTheme ? "border-white text-white" : "border-black text-black"
  }`}
  style={{
    animation: "bounce 2s infinite",
    backgroundColor: "transparent",
    height: "82px",
    justifyContent: "center",
    alignItems: "center",
   
  }}
>
  <span
    className="font-bold"
    style={{
      marginLeft: "2px",
      fontSize: "10px",
      textAlign: "center", // Center text inside the div
    }}
  >
    Scroll Down.
  </span>
</div>

<style>
  {`
    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px); /* Move up */
      }
      100% {
        transform: translateY(0); /* Move back to original position */
      }
    }
  `}
</style>

      {/* Theme Toggle Button */}
      
      <div
        className="absolute right-5 top-20"
        style={{
          zIndex: 10,
        }}
      >
        <div
          className={` border-2 rounded-full p-2 ${
            isDarkTheme ? "border-white" : "border-black"
          }`}
        >
          <button
            onClick={toggleTheme}
            className="text-3xl bg-transparent border-none cursor-pointer"
            style={{
              padding: "8px",
              borderRadius: "50%",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {isDarkTheme ? (
              <BsFillSunFill className="w-6 h-6 text-yellow-400" />
            ) : (
              <BsFillMoonFill className="w-6 h-6 text-silver-500" />
            )}
          </button>
        </div>
      </div>
      {/* )} */}

      <div>
        {/* {userLoggedIn && ( */}
        <div
          style={{
            marginTop: "675px", // Ensures it appears 100px below the icons
            padding: "36px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2px",
              color: isDarkTheme ? "white" : "black",

              fontSize: "34px", // Default size
              fontFamily: "Overpass,sans-serif",
              fontWeight: "600",
            }}
            className="software-companies-title"
          >
            Major Software Companies at BIT, Sindri.
          </h2>

          <style>
            {`
    @media (max-width: 768px) {
      
    }
  `}
          </style>
        </div>
        {/* )} */}

        {/* Media Query for Mobile View */}

        <div
          style={{
            position: "relative",
            width: "80%",
            margin: "0 auto",
            overflow: "hidden",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Carousel Container */}
        </div>
      </div>
      {/* {userLoggedIn && ( */}
      <>
        <div>
          <RollingGallery isDarkTheme={isDarkTheme} images={images} />
        </div>
        <h2
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "11px",
            color: "grey",
            fontSize: "60px", // Default size
            fontFamily: "Overpass,sans-serif",
            fontWeight: "600",
          }}
          className="software-companies-title"
        >
          <span style={{ color: isDarkTheme ? "white" : "black" }}>
            DSA Sheets.
          </span>
        </h2>

        <section
          className="why-choose-us"
          style={{ backgroundColor: isDarkTheme ? "#100101" : "#e5e4e2" }}
        >
          <div className="reasons-container">
            {reasons.map((reason, index) => (
              <div
                className="reason-card"
                key={index}
                style={{
                  backgroundColor: isDarkTheme ? "#100101" : "white",
                  border: isDarkTheme ? "1px solid grey" : "none",
                }}
              >
                <div className="icon">{reason.icon}</div>
                <h3
                  className="reason-title"
                  style={{
                    color: isDarkTheme ? "white" : "black",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {reason.title}
                </h3>
                <p className="reason-description" style={{ color: "grey" }}>
                  {reason.description}
                </p>
                <button
                  style={{ color: "red", border: "1px solid grey" }}
                  onClick={() => handleSheetOpen(reason.sheetLink)}
                  className={`mt-6 px-4 py-3 border text-sm font-medium rounded-full transition duration-300 ${
                    true
                      ? "bg-transparent border-white text-white hover:bg-blue/40 hover:text-black"
                      : "bg-transparent border-black text-black hover:bg-black/10 hover:text-white"
                  }`}
                >
                  Solve-->
                </button>
              </div>
            ))}
          </div>
        </section>
      </>
      {/* )} */}
      {/* {userLoggedIn && ( */}
      <>
        <WhyChooseUs isDarkTheme={isDarkTheme} />

        <PricingSection isDarkTheme={isDarkTheme} />
        <TeamSection isDarkTheme={isDarkTheme} />
        <FAQ isDarkTheme={isDarkTheme} />
        <Footer />
      </>
      {/* )} */}
    </>
  );
};

export default Header;
