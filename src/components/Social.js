import React, { Component } from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SocialMedia extends Component {
  render() {
    return (
      <div className="socialMedia-container">
        <a className="socialMedia" href="https://fb.me/LuisFerGRomoMX" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="socialMedia" href="https://instagram.com/luisfergromo/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="socialMedia" href="https://linkedin.com/in/LuisFerGRomo/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    );
  }
}
export default SocialMedia;
