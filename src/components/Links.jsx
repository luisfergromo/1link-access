import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
class Links extends Component {
  render() {
    return (
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
    );
  }
}
export default Links;
