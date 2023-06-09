import { useState } from "react";
import Menu from "../components/menu/Menu";
import Cover from "../views/cover/Cover";
import About from "../views/about/About";
import Skills from "../views/skills/Skills";
import TimeLine from "../views/timeline/TimeLine";
import SideImage from "../components/sideimage/SideImage";
import Contact from "../views/contact/Contact";
import Projects from "../views/projects/Projects";
import './App.scss';

function App() {

  return (
    <>
      <Menu />
      <Cover />
      <About />
      <Skills />
      <TimeLine />
      <Projects />
      <SideImage imgSrc="" imgAlt="" />
      <Contact />
    </>
  );
}

export default App;
