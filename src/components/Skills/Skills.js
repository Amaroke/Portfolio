import React from 'react';
import logoJava from "../../assets/img/logo-java.png";
import logoPython from "../../assets/img/logo-python.png";
import logoJS from "../../assets/img/logo-js.png";
import logoHtmlCss from "../../assets/img/logo-html-css.png";
import logoVSCode from "../../assets/img/logo-vs-code.png";
import logoGit from "../../assets/img/logo-git.png";
import logoMySql from "../../assets/img/logo-mysql.png";
import logoJetbrains from "../../assets/img/logo-jetbrains.png";
import logoReact from "../../assets/img/logo-react.png";
import colorSharp from "../../assets/img/color-sharp.png";
import "./Skills.css";

export const Skills = () => {

  const duplicat = (
    <>
      <div className="item">
        <img src={logoJava} alt="Java" />
        <h5>Java</h5>
      </div>
      <div className="item">
        <img src={logoPython} alt="Python" />
        <h5>Python</h5>
      </div>
      <div className="item">
        <img src={logoJS} alt="JavaScript" />
        <h5>JavaScript</h5>
      </div>
      <div className="item">
        <img src={logoHtmlCss} alt="HTML/CSS" />
        <h5>HTML/CSS</h5>
      </div>
      <div className="item">
        <img src={logoVSCode} alt="VS Code" />
        <h5>VS Code</h5>
      </div>
      <div className="item">
        <img src={logoReact} alt="ReactJS" />
        <h5>ReactJS</h5>
      </div>
      <div className="item">
        <img src={logoGit} alt="Git" />
        <h5>Git</h5>
      </div>
      <div className="item">
        <img src={logoMySql} alt="MySQL" />
        <h5>MySQL</h5>
      </div>
      <div className="item">
        <img src={logoJetbrains} alt="IDE Jetbrains" />
        <h5>IDE Jetbrains</h5>
      </div>
    </>
  );

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Compétences</h2>
              <p>
                Je maîtrise plusieurs langages de programmation et outils de développement, dont voici les principaux :
                <br />
              </p>
              <div className="image-banner-container">
                <div className="image-banner">
                  <div className="item">
                    <img src={logoJava} alt="Java" />
                    <h5>Java</h5>
                  </div>
                  <div className="item">
                    <img src={logoPython} alt="Python" />
                    <h5>Python</h5>
                  </div>
                  <div className="item">
                    <img src={logoJS} alt="JavaScript" />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <img src={logoHtmlCss} alt="HTML/CSS" />
                    <h5>HTML/CSS</h5>
                  </div>
                  <div className="item">
                    <img src={logoVSCode} alt="VS Code" />
                    <h5>VS Code</h5>
                  </div>
                  <div className="item">
                    <img src={logoReact} alt="ReactJS" />
                    <h5>ReactJS</h5>
                  </div>
                  <div className="item">
                    <img src={logoGit} alt="Git" />
                    <h5>Git</h5>
                  </div>
                  <div className="item">
                    <img src={logoMySql} alt="MySQL" />
                    <h5>MySQL</h5>
                  </div>
                  <div className="item">
                    <img src={logoJetbrains} alt="IDE Jetbrains" />
                    <h5>IDE Jetbrains</h5>
                  </div>
                  {window.innerWidth > 768 ? duplicat : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="background" />
    </section>
  );
}
