import React, { useState } from "react";

const FAQ = ({ isDarkTheme }) => {
  const faqs = [
    {
      question: "How to prepare for coding interviews?",
      answer:
        "Prepare for coding interviews with AlgoBoost by mastering programming basics, following a structured 6-month roadmap, and solving curated problems on LeetCode and GFG. Learn from expert resources, practice mock interviews, and participate in contests. Stay consistent, analyze solutions, and track progress.",
    },
    {
      question:
        "Are the AlgoBoost DSA sheet questions enough for interview preparation?",
      answer:
        "The AlgoBoost DSA Sheet is an essential tool for coding interview preparation, offering a comprehensive solution to your coding challenges. It effectively covers core concepts and includes a wide range of questions that address most fundamental DSA topics. Additionally, the sheet provides extra problem sets to further enhance your practice and reinforce your understanding, making it an excellent resource for interview readiness.",
    },
    {
      question: "How can I make the most of my experience on the AlgoBoost website?",
      answer:
        "To get the most out of the AlgoBoost website, start by following a tailored preparation plan that aligns with your goals. We offer various resources designed for both beginners and advanced coders, helping you progress at your own pace. Our platform also provides specialized sheets for different user needs. In addition, we are continuously enhancing our platform with new features, including mentorship programs, live doubt-solving sessions, and much more to support your learning journey. Stay engaged and make the most of these valuable resources for efficient coding preparation.",
    },
    {
      question: "Is AlgoBoost free to use?",
      answer:
        "Yes, the Linktree resources are completely free to access. However, for advanced features such as one-on-one sessions and interview guidance, there is a minimal fee of ₹50/hr in the Basic Plan and ₹100/hr in the Premium Plan. These plans offer personalized support to take your preparation to the next level.",
    },
    {
      question: "What are the features of the AlgoBoost Linktree?",
      answer:
        "The AlgoBoost Linktree is a treasure trove of study materials, covering CS fundamentals, interview preparation, and much more. These resources have helped us crack interviews, and we are confident that they will do the same for you. Trust our curated content to guide you on your path to success, as it’s designed by experts who understand what it takes to excel. ",
    },
   
    {
      question: "What are the essential things to cover in core coding subjects?",
      answer:
        "To develop a comprehensive interview preparation strategy, it's crucial to focus on core subjects. Along with Data Structures and Algorithms (DSA), key topics like Database Management Systems (DBMS), Object-Oriented Programming (OOP), Operating Systems, and Computer Networks should be prioritized. Our platform offers a wide range of important questions on each of these subjects, helping you build a solid foundation for your interviews.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{
        maxWidth: "90%",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "transparent",
        borderRadius: "12px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
   fontSize:"2.5rem",
   fontWeight:"700",
          marginBottom: "20px",
          color: isDarkTheme ? "white" : "black",
        }}
      >
        Frequently Asked Questions
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              padding: "15px",
              cursor: "pointer",
              backgroundColor:
                activeIndex === index
                  ? "rgba(52, 152, 219, 0.1)"
                  : "transparent",
              borderRadius: "8px",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => toggleFAQ(index)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: isDarkTheme ? "white" : "black",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {faq.question}
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  transform:
                    activeIndex === index ? "rotate(45deg)" : "rotate(0)",
                  transition: "transform 0.3s ease",
                }}
              >
                +
              </span>
            </div>
            {activeIndex === index && (
              <div
                style={{
                  marginTop: "10px",
                  padding: "10px 0",
                  color: isDarkTheme ? "white" : "black",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  backgroundColor: isDarkTheme ? "#1c1c1c" : "white",
                  borderRadius: "6px",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
