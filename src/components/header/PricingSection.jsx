import React from "react";
import "./PricingSection.css"; // Custom CSS for styling

const PricingSection = ({ isDarkTheme }) => {
  const plans = [
    {
      title: "Free Plan",
      price: "0rs",
      features: [
        "Kickstart your DSA and interview preparation journey with our free AlgoBoost Linktree! 🚀✨ Access a treasure trove of expertly curated study materials and interview prep resources, crafted by industry experts to help you excel. If you're confident in self-preparation and ready to take charge of your future, this is your ultimate toolkit. Dive in and make it happen! ",
      ],
      buttonText: "Visit LinkTre",
      buttonClass: "bg-blue-500 hover:bg-blue-600 text-white",
      formLink:
        "https://ablink.netlify.app/",
    },
    {
      title: "Basic Plan",
      price: "50rs/1hr",
      features: [
        "One to One Video Session",
        "AlgoBoost LinkTree",
        "DSA Guidance",
        "Resume Review",
        "Email support",
        "Monthly reports",
      ],
      buttonText: "Choose Basic",
      buttonClass: "bg-blue-500 hover:bg-blue-600 text-white",
      formLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdpN_9TtoQzsM_Z10hWTnwAebc5zgNs1TWfQSq8ixy7xx94tQ/viewform", // Replace with actual Google Form link
    },
    {
      title: "Premium Plan",
      price: "100rs/1hr",
      features: [
        "One to One Video Session",
        "AlgoBoost LinkTree",
        "DSA Guidance",
        "Project Guidance",
        "Interview Preparation",
        "Resume Review",
        "Email support",
        "Weekly reports",
      ],
      buttonText: "Choose Premium",
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
        Choose Your Plan
      </h2>
      <div className="pricing-cards" styles={{ backgroundColor: "#fffafa" }}>
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h3 className="pricing-title">{plan.title}</h3>
            <p className="pricing-price">{plan.price}</p>
            <ul className="pricing-features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  {feature}
                </li>
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
