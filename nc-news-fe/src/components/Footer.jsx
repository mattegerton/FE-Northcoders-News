import React from "react";
import "./css/Footer.css";

const Footer = () => {
  let date = new Date();
  return (
    <div className="footer">
      <h4> Copyright © {date.getFullYear()} Matt Egerton </h4>
      <div className="footerSocial">
        <ion-icon name="logo-facebook" />
        <ion-icon name="logo-twitter" />
        <ion-icon name="logo-github" />
      </div>
    </div>
  );
};

export default Footer;
