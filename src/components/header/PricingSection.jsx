

import React from "react";
import "./PricingSection.css"; // Custom CSS for styling

const PricingSection = ({ isDarkTheme }) => {
  const plans = [
    {
      title: "AlgoBoost LinkTree",
      price: "It is Completely FREE !!!",
      features: [
        "Kickstart your DSA and interview preparation journey with our free AlgoBoost Linktree! 🚀✨ Access a treasure trove of expertly curated study materials and interview prep resources, crafted by industry experts to help you excel. If you're confident in self-preparation and ready to take charge of your future, this is your ultimate toolkit. Dive in and make it happen!",
      ],
      buttonText: "Visit LinkTree",
      buttonClass: "bg-blue-500 hover:bg-blue-600 text-white",
      formLink: "https://ablink.netlify.app/",
    },
    {
      title: "Personal Consultancy",
      price:
        "For those seeking personalized guidance, we offer advanced features like Personal Consultancy and Interview Preparation. Unlock these benefits with a nominal fee of just ₹99 for a 1-hour video consultation with your seniors.",
      features: [
        "1) One to One Video Session",
        "2) AlgoBoost LinkTree",
        "3) DSA Guidance",
        "4) Project Guidance",
        "5) Interview Preparation",
        "6) Resume Review",
        "7)   <strong>Cheat Codes</strong> to ace <strong>Online Assessments and Interviews</strong>."
      ],
      buttonText: "Book Now",
      buttonClass: "bg-green-500 hover:bg-green-600 text-white",
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdpN_9TtoQzsM_Z10hWTnwAebc5zgNs1TWfQSq8ixy7xx94tQ/viewform", // Replace with actual Google Form link
    },
  ];

  const handleButtonClick = (formLink) => {
    window.open(formLink, "_blank"); // Open the Google Form in a new tab
  };

  return (
    <section
      className="pricing-section"
      style={{ backgroundColor: isDarkTheme ? "#100101" : "#e5e4e2" }}
    >
      <h2
        className="section-title"
        style={{ color: isDarkTheme ? "white" : "black" }}
      >
       Our Services.
      </h2>
      <div className="pricing-cards" styles={{ backgroundColor: "#fffafa" }}>
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3 className="pricing-title">{plan.title}</h3>
            <p className="pricing-price" style={{ fontSize: "11px" }}>
              {plan.price}
            </p>
            <ul className="pricing-features">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="feature-item"
                  dangerouslySetInnerHTML={{ __html: feature }}
                />
              ))}
            </ul>
            <button
              className={`pricing-button ${plan.buttonClass}`}
              onClick={() => handleButtonClick(plan.formLink)}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
