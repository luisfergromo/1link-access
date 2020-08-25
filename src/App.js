import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import SocialMedia from "./components/Social";
import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <h1 className="title">LuisFerGRomo</h1>
      <SocialMedia />
      <br />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
