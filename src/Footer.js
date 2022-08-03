import React from "react";
import "./Footer.css";
import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";
import instagram from "./images/icon-instagram.svg";
import shortly from './images/logo copy.svg'

const Footer = () => {
  return (
    <div>
      <div className="general">
        <img className="shortt" src={shortly} alt="" />
        <div>
          <h3>Features</h3>
          <p>Link Shortening</p>
          <p>Brand Links</p>
          <p>Analytics</p>
        </div>
        <div>
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div>
          <h3>Company</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Career</p>
          <p>Contact</p>
        </div>
        <div className="myimages">
          <img className="name" src={facebook} alt="" />
          <img className="name" src={twitter} alt="" />
          <img className="name" src={pinterest} alt="" />
          <img className="name" src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
