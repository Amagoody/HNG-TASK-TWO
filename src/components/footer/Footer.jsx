import React from "react";
import "./footer.css"
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="about">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="youtube" />
      </div>
      <div className="condition">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <div className="copy">
        <p>© 2021 MovieBox by Adriana Eka Prayudha </p>
      </div>
    </div>
  );
};

export default Footer;
