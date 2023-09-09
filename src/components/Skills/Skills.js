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
import { useLanguage } from "../LanguageProvider";

export const Skills = () => {

  const { currentLanguage } = useLanguage();

  const skillsList = [
    {
      id: 1,
      name: "Java",
      image: logoJava,
      alt: "Java",
    },
    {
      id: 2,
      name: "Python",
      image: logoPython,
      alt: "Python",
    },
    {
      id: 3,
      name: "JavaScript",
      image: logoJS,
      alt: "JavaScript",
    },
    {
      id: 4,
      name: "HTML/CSS",
      image: logoHtmlCss,
      alt: "HTML/CSS",
    },
    {
      id: 5,
      name: "VS Code",
      image: logoVSCode,
      alt: "VS Code",
    },
    {
      id: 6,
      name: "ReactJS",
      image: logoReact,
      alt: "ReactJS",
    },
    {
      id: 7,
      name: "Git",
      image: logoGit,
      alt: "Git",
    },
    {
      id: 8,
      name: "MySQL",
      image: logoMySql,
      alt: "MySQL",
    },
    {
      id: 9,
      name: "IDE Jetbrains",
      image: logoJetbrains,
      alt: "IDE Jetbrains",
    },
  ];


  function generateSkillItems() {
    return skillsList.map((skill) => (
      <div className="item" key={skill.id}>
        <img src={skill.image} alt={skill.name} />
        <h5>{currentLanguage === "en" ? skill.name : skill.name}</h5>
      </div>
    ));
  }

  const skillsTitle =
    currentLanguage === "en" ? "Skills" : "Compétences";

  const skillsDescription =
    currentLanguage === "en"
      ? "I have expertise in various programming languages and development tools, including the following:"
      : "Je maîtrise plusieurs langages de programmation et outils de développement, dont voici les principaux :";

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>{skillsTitle}</h2>
              <p>{skillsDescription}<br /></p>
              <div className="image-banner-container">
                <div className="image-banner">
                  {generateSkillItems()}
                  {window.innerWidth > 768 ? generateSkillItems() : null}
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
