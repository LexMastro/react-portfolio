import React from "react";
// import Link  from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import beautyboard from "../../../src/img/Projects/beautyboard.png";
import weather from "../../../src/img/Projects/weather.png";
import lettuceEat from "../../../src/img/Projects/LettuceEat.png";
import noteTaker from "../../../src/img/Projects/notetaker.jpg";

export default function project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 900,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading title={"Projects"} />
      <section className="project-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="project-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-info">
                    <img src={beautyboard} alt="no internet connection"></img>
                  </div>
                </div>
                <div className="project-name">
                  <p>Beauty Board</p>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-info">
                    <img src={weather} alt="no internet connection"></img>
                  </div>
                </div>
                <div className="project-name">
                  <p>Weather Dashboard</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-info">
                    <img src={noteTaker} alt="no internet connection"></img>
                  </div>
                </div>
                <div className="project-name">
                  <p>Note Taker</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-info">
                    <img src={lettuceEat} alt="no internet connection"></img>
                  </div>
                </div>
                <div className="project-name">
                  <a href="https://www.google.com"> Lettuce Eat </a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
