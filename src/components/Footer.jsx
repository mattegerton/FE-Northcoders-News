import React from "react";
import "./css/Footer.css";

const Footer = () => {
  let date = new Date();
  return (
    <div className="footer">
      <div className="footerSocial">
        <a
          className="footerSocialIcon"
          href="https://www.facebook.com/megerton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-facebook" />
        </a>

        <a
          className="footerSocialIcon"
          href="https://twitter.com/matthewjegerton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-twitter" />
        </a>

        <a
          className="footerSocialIcon"
          href="https://github.com/mattegerton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-github" />
        </a>

        <a
          className="footerSocialIcon"
          href="https://www.linkedin.com/in/matthewjegerton/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-linkedin" />
        </a>
      </div>
      <h4> Copyright © {date.getFullYear()} Matt Egerton </h4>
    </div>
  );
};

export default Footer;
