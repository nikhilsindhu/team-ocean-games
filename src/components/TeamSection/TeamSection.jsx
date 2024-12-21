import React from "react";

import KieranPhoto from "../../assets/images/kieran-photo.jpeg";
import MazinPhoto from "../../assets/images/mazin-photo.jpeg";
import MohammedPhoto from "../../assets/images/mohammed-photo.jpeg";
import SagarPhoto from "../../assets/images/sagar-photo.jpeg";
import RutvijPhoto from "../../assets/images/rutvij-photo.jpeg";
import LinkedinIcon from "../../assets/images/linkedin-full-icon.png";

import "./styles.scss";

export const TeamSection = () => {
  function redirectTo(url) {
    window.open(url, "_blank");
  }
  return (
    <section className="team-section" id="team">
      <div className="team-section__container">
        <h2>Our Team</h2>
        <ul className="team-section__card-list">
          <li className="team-section__card">
            <div className="team-section__card-image">
              <img src={SagarPhoto} alt="Sagar Patel Photo" />
            </div>
            <div className="team-section__card-info">
              <h5 className="team-section__card-name">Sagar Patel</h5>
              <h6 className="team-section__card-title">Founder & Developer</h6>
              <button
                className="team-section__card-social"
                onClick={() =>
                  redirectTo(
                    "https://www.linkedin.com/in/sagar-patel-1001bb100",
                  )
                }
              >
                <img src={LinkedinIcon} />
              </button>
            </div>
          </li>
          <li className="team-section__card">
            <div className="team-section__card-image">
              <img src={MohammedPhoto} alt="Mohammed Abdul Samad Photo" />
            </div>
            <div className="team-section__card-info">
              <h5 className="team-section__card-name">Mohammed Abdul</h5>
              <h6 className="team-section__card-title">Co-founder & Artist</h6>
              <button
                className="team-section__card-social"
                onClick={() =>
                  redirectTo(
                    "https://www.linkedin.com/in/mohammed-abdul-samad-186775146",
                  )
                }
              >
                <img src={LinkedinIcon} />
              </button>
            </div>
          </li>
          <li className="team-section__card">
            <div className="team-section__card-image">
              <img src={MazinPhoto} alt="Mazin Jaleel Photo" />
            </div>
            <div className="team-section__card-info">
              <h5 className="team-section__card-name">Mazin Jaleel</h5>
              <h6 className="team-section__card-title">Concept Artist</h6>
              <button
                className="team-section__card-social"
                onClick={() =>
                  redirectTo(
                    "https://www.linkedin.com/in/mazin-jaleel-2913741b0",
                  )
                }
              >
                <img src={LinkedinIcon} />
              </button>
            </div>
          </li>
          <li className="team-section__card">
            <div className="team-section__card-image">
              <img src={KieranPhoto} alt="Kieran Baskaram Photo" />
            </div>
            <div className="team-section__card-info">
              <h5 className="team-section__card-name">Kieran Baskaram</h5>
              <h6 className="team-section__card-title">Sound Artist</h6>
              <button
                className="team-section__card-social"
                onClick={() =>
                  redirectTo("https://www.linkedin.com/in/kierannair")
                }
              >
                <img src={LinkedinIcon} />
              </button>
            </div>
          </li>
          <li className="team-section__card">
            <div className="team-section__card-image">
              <img src={RutvijPhoto} alt="Kieran Baskaram Photo" />
            </div>
            <div className="team-section__card-info">
              <h5 className="team-section__card-name">Rutvij Joshi</h5>
              <h6 className="team-section__card-title">
                Narrative-Content Desiger
              </h6>
              <button
                className="team-section__card-social"
                onClick={() =>
                  redirectTo("https://www.linkedin.com/in/rutvij99")
                }
              >
                <img src={LinkedinIcon} />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
