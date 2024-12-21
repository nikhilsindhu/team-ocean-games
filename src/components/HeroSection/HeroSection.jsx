import React from "react";

import RevenantSoulLogo from "../../assets/images/revenant-Soul-logo.png";
import HeroSectionBg from "../../assets/images/hero-img.jpg";
import AppstoreIcon from "../../assets/images/appstore-icon.png";
import PlaystoreIcon from "../../assets/images/playstore-icon.png";

import "./styles.scss";

export const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${HeroSectionBg})` }}
    >
      <div className="hero-section__container">
        <div className="hero-section__game-logo">
          <img src={RevenantSoulLogo} alt="Revenant’s Soul" />
        </div>
        <div className="hero-section__cta-button-list">
          <button className="hero-section__cta-button !rounded-full">
            <img src={AppstoreIcon} alt="appstore icon" />
          </button>
          <button className="hero-section__cta-button">
            <img src={PlaystoreIcon} alt="playstore icon" />
          </button>
        </div>
      </div>
    </section>
  );
};
