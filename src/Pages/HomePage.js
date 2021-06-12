import React from "react";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import { Link } from "react-router-dom";
import Typewriter from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.css";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="header">
        <h1 className="hero-text">
          Hi, I am
          <span>
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[
                " Ausaf Hussain",
                " Developer",
                " Freelancer",
                " Programmer",
                " Gym Athlete",
              ]}
            />
          </span>
        </h1>
        <p className="h-sub-text">
          I am a Full Stack React Web Developer. Besides Developing simple to
          complex React web apps, I am also creative problem solver. To know
          about me, please move to About section.
          <Link to="/about" className="linkAboutHome">
            <p>Head towards About Section</p>
            <KeyboardArrowRightRoundedIcon className="arrowRight" />
          </Link>
        </p>

        <div className="icons">
          <Link
            className="icon-holder"
            onClick={() =>
              (window.location.href =
                "https://www.facebook.com/ausafhussain.dev/")
            }
          >
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link
            className="icon-holder"
            onClick={() =>
              (window.location.href = "https://github.com/Ausaf-pro")
            }
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link
            className="icon-holder"
            onClick={() =>
              (window.location.href = "https://twitter.com/iAmAusafHussain")
            }
          >
            <FontAwesomeIcon icon={faTwitter} className="icon tw" />
          </Link>
          <Link
            className="icon-holder"
            onClick={() =>
              (window.location.href = "https://www.instagram.com/fake.nawab_/")
            }
          >
            <FontAwesomeIcon icon={faInstagram} className="icon in" />
          </Link>
          <Link
            className="icon-holder"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/ausaf-hussain-4425b2195/")
            }
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
