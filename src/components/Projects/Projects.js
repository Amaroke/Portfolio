import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg from "../../assets/img/project.jpg";
import ProjetDPiscine from "../../assets/img/projetDPiscine.png";
import obstACL_tower from "../../assets/img/obstACL_tower.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css'

export const Projects = () => {

  const projects = [
    {
      title: "Georges",
      description: "Nettoyage d'archives",
      imgUrl: projImg,
    },
    {
      title: "ProjetDPiscine",
      description: "Site de gestion d'agenda",
      imgUrl: ProjetDPiscine,
    },
    {
      title: "ObstACL-Tower",
      description: "Jeu de roguelike",
      imgUrl: obstACL_tower,
    },
    {
      title: "Golden-PPIT",
      description: "Site web d'organisation d'évènements",
      imgUrl: projImg,
    },
    {
      title: "PlatVenture",
      description: "Jeu de plateforme",
      imgUrl: projImg,
    },
    {
      title: "PuissanceQuatre",  
      description: "IA de jeu de puissance 4",
      imgUrl: projImg,
    },
  ];

  const perso_projects = [
    {
      title: "Charadle",
      description: "Jeu de devinette de personnages",
      imgUrl: projImg,
    },
    {
      title: "MakeMoreMeat",
      description: "Jeu incrémental sous Android",
      imgUrl: projImg,
    },
    {
      title: "ReactChess",
      description: "Site d'échecs",
      imgUrl: projImg,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projets</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Universitaires</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Personnels</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p>Voici certains des projets que j'ai pu réaliser au cours de ma formation :</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <p>Voici les différents projets dans lesquels je suis investis sur mon temps libre :</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {
                            perso_projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
