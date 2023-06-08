import { useState } from "react";
import Menu from "../components/menu/Menu";
import About from "../views/about/About";
import Contact from "../views/contact/Contact";
import Cover from "../views/cover/Cover";
import Skills from "../views/skills/Skills";
import TimeLine from "../views/timeline/TimeLine";
import SideImage from "../components/sideimage/SideImage";
import './App.scss';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <SideImage />
      <About />
      <Contact />
      <Cover />
      <Skills />
      <TimeLine />
    </>
  );
}

export default App;
