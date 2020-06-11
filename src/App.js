import React from "react";
import TrianglesCanvas from './components/AnimatedWallpaper'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import Switch from 'react-switch'
import Transition from './utils/switchTransitionConfig';

import "./App.sass";

import Perfil from "./views/PerfilPage";
import Blog from "./views/BlogPage";
import Experience from './views/ExperiencePage'
import { useState } from "react";


export default function App() {
  const [animateBackground, setAnimateBackground] = useState(true)
  return (
    <>
      <BrowserRouter>
        <div className="switch-area">
          <div className="switch-field">
            <Switch
              checked={animateBackground}
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => {setAnimateBackground(!animateBackground);}}
              onColor="#00AA00" onHandleColor="#00FF00"
              activeBoxShadow="0px 0px 0px 0px"
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              handleDiameter={20} height={15} width={30}
              className="switchHome"
            />
            <i className="gg-shape-triangle"></i>
          </div>
        </div>
        <section id="section" className="section">
          <TrianglesCanvas active={animateBackground}/>
          <AnimatedSwitch
            atEnter={Transition.bounceTransition.atEnter}
            atActive={Transition.bounceTransition.atActive}
            mapStyles={Transition.mapStyles}
            className="route-wrapper">
            <Route exact path="/">
              <Perfil />
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