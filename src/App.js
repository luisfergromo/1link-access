import React from "react";
import "./App.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <h1 className="title">LuisFerGRomo</h1>
      {/* <image src=""></image> */}
      <div className="socialMedia-container">
        <a className="socialMedia" href="https://fb.me/LuisFerGRomoMx">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="socialMedia" href="https://instagram.com/luisfergromo/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="socialMedia" href="https://linkedin.com/in/LuisFerGRomo/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <a
        aria-hidden="true"
        className="btn btn-link"
        href="https://luisfergromo.web.app/"
        rel="noopener"
      >
        Personal Web Page
      </a>
    </div>
  );
}

export default App;
