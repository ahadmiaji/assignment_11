// import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Service from "./components/Service";
import "./assets/css/global.css";

function App() {
  let socialMedias = ["FaceBook", "Twitter", "LinedIn", "Pinterest", "YouTube"];
  return (
    <>
      <Header />
      <hr />
      <Hero />
      <hr />
      <About />
      <hr />
      <Service />
      <hr />
      <Project />
      <hr />
      <Footer socialMedias={socialMedias} />
    </>
  );
}

export default App;
