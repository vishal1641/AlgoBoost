import React from "react";
import { GrInstagram, GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand Section */}
        <div style={styles.brandSection}>
          <h2 style={styles.brandTitle}>AlgoBoost</h2>
          <p style={styles.brandDescription}>
            Your ultimate destination to master DSA. Learn, practice, and
            succeed with confidence.
          </p>
        </div>

        {/* Team Section */}
        <div style={styles.teamSection}>
          <h3 style={styles.sectionTitle}>Follow us:</h3>
          <div style={styles.teamList}>
            {[
              {
                name: "Vishal Kumar Tiwari (EE 2021)",
                insta: "https://www.instagram.com/tiwari__vishal_/",
                linkedin:
                  "https://www.linkedin.com/in/vishal-kumar-tiwari-692601210/",
              },
              {
                name: "Ashish Mishra (EE 2021)",
                insta:
                  "https://www.instagram.com/ashish_0206_?igsh=MTF4N2pzbzBidnM3aA==",
                linkedin:
                  "https://www.linkedin.com/in/ashish-mishra-144ba622b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              },
              {
                name: "Saurabh Kumar Singh (EE 2021)",
                insta:
                  "https://www.instagram.com/truly_saurabh_?utm_source=qr&igsh=MXJiejR3bHpqcWVvNQ==",
                linkedin:
                  "https://www.linkedin.com/in/saurabh-singh-qwerty12345",
              },
              {
                name: "Ujjwal Kumar (EE 2021)",
                insta:
                  "https://www.instagram.com/barnwalujjwal?igsh=MXgwZG5vNjZrczllag==",
                linkedin:
                  "https://www.linkedin.com/in/ujjwalkumarbarnwal7070?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              },
            ].map((member) => (
              <div key={member.name} style={styles.teamMember}>
                <p style={styles.memberName}>{member.name}</p>
                <div style={styles.socialIcons}>
                  <a
                    href={member.insta}
                    style={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrInstagram />
                  </a>
                  <a
                    href={member.linkedin}
                    style={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GrLinkedin />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div style={styles.contactSection}>
          <h3 style={styles.sectionTitle}>Get in Touch</h3>
          <p style={styles.contactText}>
            Have questions or need help? Reach out to us at:
          </p>
          <a href="mailto:algoboost424@gmail.com" style={styles.contactLink}>
            algoboost424@gmail.com
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={styles.footerBottom}>
        <p style={styles.footerText}>
          © {new Date().getFullYear()} AlgoBoost. All rights reserved.
        </p>
        <p style={styles.footerCredits}>
          Designed and Developed with ❤️ by <strong>Vishal Kumar Tiwari.</strong>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#0f172a",
    color: "#e2e8f0",
    padding: "60px 20px",
    fontFamily: "'Poppins', sans-serif",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px",
    textAlign: "center",
  },
  brandSection: {},
  brandTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#38bdf8",
  },
  brandDescription: {
    fontSize: "16px",
    color: "#94a3b8",
    marginTop: "10px",
  },
  teamSection: {},
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: "20px",
  },
  teamList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  },
  teamMember: {},
  memberName: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "8px",
  },
  socialLink: {
    color: "#38bdf8",
    fontSize: "20px",
    transition: "transform 0.3s, color 0.3s",
    textDecoration: "none",
  },
  contactSection: {},
  contactText: {
    fontSize: "16px",
    color: "#94a3b8",
    marginBottom: "10px",
  },
  contactLink: {
    color: "#38bdf8",
    fontSize: "16px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  footerBottom: {
    marginTop: "40px",
    borderTop: "1px solid #1e293b",
    paddingTop: "20px",
    textAlign: "center",
  },
  footerText: {
    fontSize: "14px",
    color: "#94a3b8",
  },
  footerCredits: {
    fontSize: "14px",
    color: "#e2e8f0",
  },
};

export default Footer;
