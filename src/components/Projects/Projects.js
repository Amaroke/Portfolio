import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./components/project_card/ProjectCard";
import ModalComponent from "./components/modal/ModalComponent";
import 'animate.css';
import './projects.css'
import './components/modal/modal.css'
import { projects, perso_projects } from './datas/ProjectsDatas';
import { useTranslation } from "react-i18next";

function Projects() {
  const [t] = useTranslation("global")
  const [showDialog, setShowDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>
              {t("projects.projects.project")}
            </h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    {t("projects.projects.personal")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    {t("projects.projects.academic")}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <p>
                    {t("projects.projects.explanation")}
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
                        isLastRow={index >= 2 && (index - 2) % 3 === 0}
                      />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>
                    {t("projects.projects.explanationacademic")}
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
                        isLastRow={index >= 3 && (index - 3) % 4 === 0}
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