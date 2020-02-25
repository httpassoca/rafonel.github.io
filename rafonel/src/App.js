import React from "react";
import './App.sass'
// import './style/app.sass'


function App() {
  return (
      <>

        <section id="secPerfil">
            <div className="grid-secPerfil">
            <div className="img-about">
                <div className="case">
                <img src="https://raw.githubusercontent.com/Rafonel/rafonel.github.io/master/img/passoca.jpg" alt="" className="pic" />
                <div className="icons-perfil hide-on-900">
                    <a href="https://www.behance.net/rafonel" target="_blank">
                    <i className="fab fa-behance" color="#0057ff"></i>
                    </a>
                    <a href="https://github.com/Rafonel" target="_blank">
                    <i className="fab fa-github" color="#55277e"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/rafonel2511/" target="_blank">
                    <i className="fab fa-linkedin" color="#0077b5"></i>
                    </a>
                    <a href="https://instagram.com/ra_fon_el/" target="_blank">
                    <i className="fab fa-instagram" color="#DD2A7B"></i>
                    </a>
                </div>
                </div>
                <div className="icons-perfil show-on-900">
                <a href="https://www.youtube.com/channel/UCIZoctDhTdSpUwnBAbbHb2w" target="_blank">
                    <i className="fab fa-youtube" color="#cc0000"></i>
                </a>
                <a href="https://github.com/Rafonel" target="_blank">
                    <i className="fab fa-github" color="#55277e"></i>
                </a>
                <a href="https://www.linkedin.com/in/rafonel2511/" target="_blank">
                    <i className="fab fa-linkedin" color="#0077b5"></i>
                </a>
                <a href="https://instagram.com/ra_fon_el/" target="_blank">
                    <i className="fab fa-instagram" color="#DD2A7B"></i>
                </a>
                </div>
            </div>
            <div className="info">
                <p className="title">Rafonel</p>
                <hr />
                <div className="subname">
                <p>Rafael Freitas</p>
                <p className="tag">Full Stack Developer</p>
                </div>
                <div className="description">
                <p>
                    Sou programador desde os 15 anos, comecei pelo curso de TI do
                    Senai, onde desenvolvi habilidades básicas de programação em
                    linguagens focadas em desktop e web. Me interesso mais ao
                    front-end, acredito que aparência e praticidade são as maiores
                    influências para o usuário.
                </p>
                </div>
            </div>
            </div>
        </section>
      </>
  );
}

export default App;
