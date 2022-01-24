import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import beautyboard from "../../../src/img/Projects/beautyboard.png";
import weather from "../../../src/img/Projects/weather.png";
import lettuceEat from "../../../src/img/Projects/LettuceEat.png";
import noteTaker from "../../../src/img/Projects/notetaker.jpg";

// function clickme(event) {
//   console.log(event.target, "aaa");
// }

export default function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel screen-container fade-in" id={props.id || ""}>
      <ScreenHeading title={"Projects"} />;
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-item">
          <img className="d-block" src={beautyboard} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={lettuceEat} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={weather} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
