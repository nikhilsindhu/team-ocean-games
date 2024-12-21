import React from "react";

import AboutUsImage from "../../assets/images/about-img.png";

import "./styles.scss";

export const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-section__container">
        <h2>About Us</h2>
        <div className="about-section__canvas">
          <img src={AboutUsImage} alt="about-us" />
        </div>
        <p>
          Team Ocean Games is an independent game studio, focused on creating
          games related to the ‘RogueLike’ Genre: Action, Combat, Dungeon
          Crawler, Hack & Slash and debuting with the game Revenant’s Soul!
        </p>
        <p>
          To learn more about Ocean Games or inquire about publishing or
          investment partnerships, please contact us at
          <a
            href="mailto:contact@teamoceangames.com"
            target="_blank"
            className="text-paarl pl-2"
          >
            contact@teamoceangames.com
          </a>
        </p>
      </div>
    </section>
  );
};
