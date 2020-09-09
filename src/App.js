import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import SocialMedia from "./components/Social";
import Links from "./components/Links";
import github from "./github.svg";

function App() {
  var name = "LuisFerGRomo";
  return (
    <div className="App">
      <div className="header">
        <a href="https://github.com/luisfergromo/1link-access">
          <img className="github-clone" src={github} alt="" />
        </a>
      </div>

      <h1 className="title">{name}</h1>
      <SocialMedia />
      <br />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
