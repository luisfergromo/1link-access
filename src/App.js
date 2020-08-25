import React from "react";
import "./App.css";
import Footer from "./components/Footer";

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <h1 className="title">LuisFerGRomo</h1>
      {/* <image src=""></image> */}
      <div className="socialMedia-container">
        <a className="socialMedia" href="https://fb.me/LuisFerGRomoMX">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="socialMedia" href="https://instagram.com/luisfergromo/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="socialMedia" href="https://linkedin.com/in/LuisFerGRomo/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <br />
      <div className="links">
        <a
          aria-hidden="true"
          className="btn btn-link"
          href="https://luisfergromo.web.app/"
          rel="noopener"
        >
          <FontAwesomeIcon icon={faGlobe} /> Personal Web Page
        </a>
        <a
          aria-hidden="true"
          className="btn btn-link"
          rel="noopener"
          href="https://github.com/luisfergromo"
        >
          <FontAwesomeIcon icon={faGithub} />
          Github
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
