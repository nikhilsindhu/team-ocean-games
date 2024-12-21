import React from "react";
import { Link } from "react-router";

import LinkedinIcon from "../../assets/images/linkedin-icon.png";
import DiscordIcon from "../../assets/images/discord-icon.png";
import InstagramIcon from "../../assets/images/instagram-icon.png";
import EmailIcon from "../../assets/images/email-icon.png";

import "./styles.scss";

export const Footer = () => {
  function redirectTo(url) {
    window.open(url, "_blank");
  }
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <div className="footer__copyright-section">
          <span className="footer__copyright-text">
            Copyright © 2024 Team Ocean Games
          </span>
        </div>
        <div className="footer__privacy-policy-section">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

        <div className="footer__social-media">
          <h4 className="footer__social-media-hint">Stay Connected With Us</h4>
          <ul className="footer__social-media-items">
            <li className="footer__social-media-item">
              <button
                className="footer__social-media-btn"
                onClick={() =>
                  redirectTo("https://www.linkedin.com/company/teamoceangames")
                }
              >
                <img src={LinkedinIcon} />
              </button>
            </li>
            <li className="footer__social-media-item">
              <button
                className="footer__social-media-btn"
                onClick={() => redirectTo("https://discord.gg/fE5GggMPsn")}
              >
                <img src={DiscordIcon} />
              </button>
            </li>
            <li className="footer__social-media-item">
              <button
                className="footer__social-media-btn"
                onClick={() =>
                  redirectTo("https://www.instagram.com/teamoceangames")
                }
              >
                <img src={InstagramIcon} />
              </button>
            </li>
            <li className="footer__social-media-item">
              <button
                className="footer__social-media-btn"
                onClick={() => redirectTo("mailto:contact@teamoceangames.com")}
              >
                <img src={EmailIcon} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
