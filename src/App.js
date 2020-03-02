import React from "react";
import TrianglesCanvas from './components/canvas'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { AnimatedSwitch,spring } from 'react-router-transition';
import "./App.sass";
import SecPerfil from "./components/secPerfil";
import Blog from "./components/blog";
import Experience from './components/experience'

function mapStyles(styles) {
  return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
  };
}
function bounce(val) {
  return spring(val, {
      stiffness: 330,
      damping: 22,
  });
}
const bounceTransition = {
// start in a transparent, upscaled state
  atEnter: {
      opacity: 0,
      scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
      opacity: bounce(1),
      scale: bounce(1),
  },
};

function App() {
  return (
    <>
      <BrowserRouter>
        <section id="section" className="section">
          <TrianglesCanvas/>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper">
            <Route exact path="/">
              <SecPerfil />
            </Route>
            <Route exact path="/blog">
              <Blog/>
            </Route>
            <Route exact path="/exp">
              <Experience/>
            </Route>
          </AnimatedSwitch>
          <div className="bottomCenter">
            <ul id="menu" className="menu">
              <li>
                <Link to="/">Sobre mim</Link>
              </li>
              <li>
                <Link to="/blog">Meu Blog</Link>
              </li>
              <li>
                <Link to="/exp">Experiências</Link>
              </li>
            </ul>
          </div>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
