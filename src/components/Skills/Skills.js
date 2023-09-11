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
import logoAngular from "../../assets/img/logo-angular.png";
import logoSpringBoot from "../../assets/img/logo-spring-boot.png";
import logoNode from "../../assets/img/logo-nodejs.png";
import logoTS from "../../assets/img/logo-typescript.png";
import logoPHP from "../../assets/img/logo-php.png";
import colorSharp from "../../assets/img/color-sharp.png";
import "./skills.css";
import { useTranslation } from "react-i18next";

function Skills() {

  const [t] = useTranslation("global");

  const skillsList = [
    {
      id: 1,
      name: "Java",
      image: logoJava,
      alt: "Java",
    },
    {
      id: 2,
      name: "JavaScript",
      image: logoJS,
      alt: "JavaScript",
    },
    {
      id: 3,
      name: "Node.js",
      image: logoNode,
      alt: "Node.js",
    },
    {
      id: 4,
      name: "ReactJS",
      image: logoReact,
      alt: "ReactJS",
    },
    {
      id: 5,
      name: "Angular",
      image: logoAngular,
      alt: "Angular",
    },
    {
      id: 6,
      name: "Spring Boot",
      image: logoSpringBoot,
      alt: "Spring Boot",
    },
    {
      id: 7,
      name: "VS Code",
      image: logoVSCode,
      alt: "VS Code",
    },
    {
      id: 8,
      name: "Git",
      image: logoGit,
      alt: "Git",
    },
    {
      id: 9,
      name: "TypeScript",
      image: logoTS,
      alt: "TypeScript",
    },
    {
      id: 10,
      name: "HTML/CSS",
      image: logoHtmlCss,
      alt: "HTML/CSS",
    },
    {
      id: 11,
      name: "MySQL",
      image: logoMySql,
      alt: "MySQL",
    },
    {
      id: 12,
      name: "Python",
      image: logoPython,
      alt: "Python",
    },
    {
      id: 13,
      name: "PHP",
      image: logoPHP,
      alt: "PHP"
    },
    {
      id: 14,
      name: "IDE Jetbrains",
      image: logoJetbrains,
      alt: "IDE Jetbrains",
    }
  ];


  function generateSkillItems(visible) {
    return skillsList.map((skill) => (
      <div className={"item " + (visible ? "" : "responsive")} key={skill.id}>
        <img src={skill.image} alt={skill.name} />
        <h5>{skill.name} </h5>
      </div>
    ));
  }

  const skillsTitle = t("skills.skills")

  const skillsDescription = t("skills.description")

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
                  {generateSkillItems(true)}
                  {generateSkillItems(false)}
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

export default Skills;