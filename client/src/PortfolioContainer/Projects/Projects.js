import React from "react";
import { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import beautyboard from "../../../src/img/Projects/beautyboard.png";
import weather from "../../../src/img/Projects/weather.png";
import lettuceEat from "../../../src/img/Projects/LettuceEat.png";
import textEditor from "../../../src/img/Projects/text-editor.png";
import workday from "../../../src/img/Projects/workday.png";
import noteTaker from "../../../src/img/Projects/notetaker.jpg";
import password from "../../../src/img/Projects/password.png";
import quiz from "../../../src/img/Projects/quiz.png";

export default function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  // const [index, setIndex] = useState(0);

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <div
      className="projects screen-container fade-in"
      id={props.id || ""}
      // activeIndex={index}
      // onSelect={handleSelect}
    >
      <ScreenHeading title={"Projects"} />;
      <div className="card">
        <img src={lettuceEat} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">(1) Lettuce Eat</h5>

          <a href="https://eat.watsonised.com/" className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
      <div className="card">
        <img src={beautyboard} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">(2) Beauty Board</h5>

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

          <a
            href="https://lexmastro.github.io/weather-dashboard/"
            className="btn btn-primary"
          >
            View Project
          </a>
        </div>
      </div>
      <div className="card">
        <img src={textEditor} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">(4) PWA Text Editor</h5>

          <a
            href="https://lexmastro.github.io/PWA-text-editor/"
            className="btn btn-primary"
          >
            View Project
          </a>
        </div>
      </div>
      <div className="card">
        <img src={noteTaker} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">(5) Note Taker</h5>

          <a
            href="https://alexis-note-taker.herokuapp.com/"
            className="btn btn-primary"
          >
            View Project
          </a>
        </div>
      </div>
      <div className="card">
        <img src={password} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">(6) Password Generator</h5>

          <a
            href="https://lexmastro.github.io/password-generator/Develop/"
            className="btn btn-primary"
          >
            View Project
          </a>
        </div>
      </div>
      <div className="card">
        <img src={workday} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">(7) Workday Scheduler</h5>

          <a
            href="https://lexmastro.github.io/workday-scheduler/"
            className="btn btn-primary"
          >
            View Project
          </a>
        </div>
      </div>
      <div className="card">
        <img src={quiz} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">(8) Coding Quiz</h5>

          <a
            href="https://lexmastro.github.io/coding-quiz/"
            className="btn btn-primary"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
