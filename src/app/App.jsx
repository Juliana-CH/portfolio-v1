import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import Cover from "../views/cover/Cover";
import About from "../views/about/About";
import Skills from "../views/skills/Skills";
import TimeLine from "../views/timeline/TimeLine";
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
      <Footer />
    </>
  );
}

export default App;

