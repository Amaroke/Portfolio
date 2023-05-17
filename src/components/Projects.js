import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg from "../assets/img/project.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {

      description: "Design & Development",
      imgUrl: projImg,
    },
    {
      description: "Design & Development",
      imgUrl: projImg,
    },
    {
      description: "Design & Development",
      imgUrl: projImg,
    },
    {
      description: "Design & Development",
      imgUrl: projImg,
    },
    {
      description: "Design & Development",
      imgUrl: projImg,
    },
    {
      description: "Design & Development",
      imgUrl: projImg,
    },
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
                        <Nav.Link eventKey="second">MakeMoreMeat</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">ReactChessAI</Nav.Link>
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
                        <p>Je suis actuellement engagé dans un projet personnel appelé MakeMoreMeat, où je me lance dans la création d'une application Android à partir de zéro en utilisant Kotlin.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>

                          <ProjectCard
                            key={6}
                          />

                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Un de mes projets actuels est ReactChessAI, où je me lance dans la création d'un site web permettant de jouer aux échecs avec ReactJS.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>

                          <ProjectCard
                            key={7}
                          />

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
