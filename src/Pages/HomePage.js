import React from "react";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="header">
        <h1 className="hero-text">
          Hi, I am
          <span> Ausaf Hussain</span>
        </h1>
        <p className="h-sub-text">
          I am a web developer in React and I do awesome programming stuffs.
          Check out more about me in here, get connected for more such infos.
        </p>
        <div className="icons">
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faTwitter} className="icon tw" />
          </Link>
          <Link className="icon-holder">
            <FontAwesomeIcon icon={faSlack} className="icon sl" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
