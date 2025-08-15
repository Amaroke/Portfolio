import logoJava from "../../assets/img/logos/logo-java.png";
import logoJavaScript from "../../assets/img/logos/logo-javascript.png";
import logoTypeScript from "../../assets/img/logos/logo-typescript.png";
import logoSpringBoot from "../../assets/img/logos/logo-springboot.png";
import logoNode from "../../assets/img/logos/logo-node.png";
import logoReact from "../../assets/img/logos/logo-react.png";
import logoTailwind from "../../assets/img/logos/logo-tailwind.png";
import logoIntelliJ from "../../assets/img/logos/logo-intellij.png";
import logoVSCode from "../../assets/img/logos/logo-vscode.png";
import logoGit from "../../assets/img/logos/logo-git.png";
import logoJenkins from "../../assets/img/logos/logo-jenkins.png";
import logoXLDeploy from "../../assets/img/logos/logo-xldeploy.png";
import logoHTMLCSS from "../../assets/img/logos/logo-htmlcss.png";
import logoAtlassian from "../../assets/img/logos/logo-atlassian.png";
import logoPostman from "../../assets/img/logos/logo-postman.png";
import colorSharp from "../../assets/img/backgrounds-images/color-sharp.png";
import "./Skills.css";
import { useTranslation } from "react-i18next";

function Skills() {

  const [t] = useTranslation("global");

  const skillsList = [
    { id: 1, name: "Java", image: logoJava },
    { id: 2, name: "JavaScript", image: logoJavaScript },
    { id: 3, name: "TypeScript", image: logoTypeScript },
    { id: 4, name: "Spring Boot", image: logoSpringBoot },
    { id: 5, name: "Node.js", image: logoNode },
    { id: 6, name: "ReactJS", image: logoReact },
    { id: 7, name: "Tailwind", image: logoTailwind },
    { id: 8, name: "IntelliJ", image: logoIntelliJ },
    { id: 9, name: "VS Code", image: logoVSCode },
    { id: 10, name: "Git", image: logoGit },
    { id: 11, name: "Jenkins", image: logoJenkins },
    { id: 12, name: "XLDeploy", image: logoXLDeploy },
    { id: 13, name: "HTML/CSS", image: logoHTMLCSS },
    { id: 14, name: "Atlassian", image: logoAtlassian },
    { id: 15, name: "Postman", image: logoPostman }
  ];

  const shuffledSkills = [...skillsList].sort(() => Math.random() - 0.5);

  function generateSkillItems(visible) {
    return shuffledSkills.map((skill) => (
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