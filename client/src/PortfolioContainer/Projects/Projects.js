import React from "react";
import { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import beautyboard from "../../../src/img/Projects/beautyboard.png";
import weather from "../../../src/img/Projects/weather.png";
import lettuceEat from "../../../src/img/Projects/LettuceEat.png";

export default function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div
      className="projects screen-container fade-in"
      id={props.id || ""}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <ScreenHeading title={"Projects"} />;
      <div className="card">
        <img src={lettuceEat} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">(1) Lettuce Eat</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://eat.watsonised.com/" className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
      <div className="card">
        <img src={beautyboard} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">(2) Beauty Board</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://mighty-reef-26126.herokuapp.com/"
            className="btn btn-primary"
          >
            View Project
          </a>
        </div>
      </div>
      <div className="card">
        <img src={weather} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">(3) Weather Dashboard</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://lexmastro.github.io/weather-dashboard/"
            className="btn btn-primary"
          >
            View Project
          </a>
        </div>
      </div>
      <div className="view-all-projects-btn">
        <a href="portfolio.html" className="btn btn-primary">
          View All Projects
        </a>
      </div>
    </div>
  );
}
