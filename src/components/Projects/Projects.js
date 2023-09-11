import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./components/project_card/ProjectCard";
import ModalComponent from "./components/modal/ModalComponent";
import 'animate.css';
import './projects.css'
import './components/modal/modal.css'
import { projects, perso_projects } from './datas/ProjectsDatas';

function Projects() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>
              {"en" === "en"
                ? "Projects"
                : "Projets"}
            </h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    {"en" === "en"
                      ? "Personal"
                      : "Personnels"}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    {"en" === "en"
                      ? "Academic"
                      : "Universitaires"}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <p>
                    {"en" === "en"
                      ? "Here are the various projects I'm involved in during my free time:"
                      : "Voici les différents projets dans lesquels je suis investi sur mon temps libre :"}
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="first">
                  <Row>
                    {perso_projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                        setSelectedProject={setSelectedProject}
                        setShowDialog={setShowDialog}
                      />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>
                    {"en" === "en"
                      ? "Here are some of the projects I have completed during my studies:"
                      : "Voici certains des projets que j'ai pu réaliser au cours de ma formation :"}
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                        setSelectedProject={setSelectedProject}
                        setShowDialog={setShowDialog}
                      />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
        <ModalComponent
          showDialog={showDialog}
          selectedProject={selectedProject}
          setShowDialog={setShowDialog}
          setSelectedProject={setSelectedProject}
        />
      </Container>
    </section >
  );
};

export default Projects;