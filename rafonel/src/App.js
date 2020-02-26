import React from "react";
import './App.sass'
import TrianglesCanvas from './components/canvas'
import AboutImg from './components/about-img'
import AboutInfo from './components/about-info'
// import './style/app.sass'

function App() {
    
  return (
      <>
        <TrianglesCanvas/>
        <section id="secPerfil">
            <div className="grid-secPerfil">
                <AboutImg/>
                <AboutInfo/>
            </div>
        </section>
      </>
  );
}

export default App;
