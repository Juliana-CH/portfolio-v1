import React, { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import Translations from "./components/language/Translations";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Cover from "./views/cover/Cover";
import About from "./views/about/About";
import Skills from "./views/skills/Skills";
import TimeLine from "./views/timeline/TimeLine";
import Projects from "./views/projects/Projects";
//import './App.scss';

i18next.init({
  interpolation: { escapeValue: false },
  pt: { translation: Translations.pt },
  es: { translation: Translations.es },
  en: { translation: Translations.en },
});

function App() {
  return (
    <>
   
      <I18nextProvider i18n={i18next}>
        <div className="App">
          <Menu />
          <Cover />
          <About />
          <Skills />
          <TimeLine />
          <Projects />
          <Footer />
        </div>
      </I18nextProvider>

    </>
  );
}

export default App;

