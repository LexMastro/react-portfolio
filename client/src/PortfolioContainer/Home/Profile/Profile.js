import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/alexis.mastro17">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.instagram.com/lexmastro_/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/alexis-mastro-852515223/">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://github.com/LexMastro/">
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
          <div className="profile-details-name"></div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Web Developer 💻",
                    2000,
                    "Graphic Designer 🖌",
                    2000,
                    "Social Media Management 📱",
                    2000,
                    "Animation Design 🎞",
                    2000,
                    "React/React Native Dev ⌨️",
                    2000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Enthusiastic about digitial design and web development
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Contact Me!{" "}
            </button>
            <a href="Resume (WebDevelopment).pdf" download="Alexis-resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
