import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DOMPurify from 'dompurify';
import { Modal, Button } from "react-bootstrap";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css'
import './Modal.css'
import { useLanguage } from "../LanguageProvider";
import { projects, perso_projects } from './ProjectsDatas';

export const Projects = () => {

  const [showDialog, setShowDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { currentLanguage } = useLanguage();

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <h2>
                {currentLanguage === "en"
                  ? "Projects"
                  : "Projets"
                }
              </h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      {currentLanguage === "en"
                        ? "Personal"
                        : "Personnels"
                      }
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      {currentLanguage === "en"
                        ? "Academic"
                        : "Universitaires"
                      }
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <p>
                      {currentLanguage === "en"
                        ? "Here are the various projects I'm involved in during my free time:"
                        : "Voici les différents projets dans lesquels je suis investi sur mon temps libre :"
                      }
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        perso_projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              setSelectedProject={setSelectedProject}
                              setShowDialog={setShowDialog}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <p>
                      {currentLanguage === "en"
                        ? "Here are some of the projects I have completed during my studies:"
                        : "Voici certains des projets que j'ai pu réaliser au cours de ma formation :"
                      }
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              setSelectedProject={setSelectedProject}
                              setShowDialog={setShowDialog}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </TrackVisibility>
          </Col>
        </Row>
        <Modal show={showDialog} onHide={handleCloseDialog}>
          <Modal.Header closeButton className="custom-close-button">
            <Modal.Title>{selectedProject?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col size={14} sm={7}>
                <div className="image-container">
                  <Slider {...settings} style={{ width: '50vw', dotStyle: { backgroundColor: 'white' }, activeDotStyle: { backgroundColor: 'white' } }}>
                    <img src={selectedProject?.imgUrl1} alt={selectedProject?.title} />
                    {selectedProject?.imgUrl2 && <img src={selectedProject?.imgUrl2} alt={selectedProject?.title} />}
                    {selectedProject?.imgUrl3 && <img src={selectedProject?.imgUrl3} alt={selectedProject?.title} />}
                    {selectedProject?.imgUrl4 && <img src={selectedProject?.imgUrl4} alt={selectedProject?.title} />}
                    {selectedProject?.imgUrl5 && <img src={selectedProject?.imgUrl5} alt={selectedProject?.title} />}
                  </Slider>
                </div>
              </Col>
              <Col size={10} sm={5}>
                <div className="text-container">
                  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedProject?.description) }}></div>
                </div>
                <div className="technos">
                  {currentLanguage === "en"
                    ? "Technologies used:"
                    : "Technologies utilisées :"
                  }
                </div>
                <div className="icons-container">
                  <div className="languages">
                    <Row>
                      <Col>
                        <div class="language-container">
                          <img src={selectedProject?.imglang1} alt={selectedProject?.lang1} />
                          <p>{selectedProject?.lang1}</p>
                        </div>
                      </Col>
                      <Col>
                        <div class="language-container">
                          {selectedProject?.lang2 && <img src={selectedProject?.imglang2} alt={selectedProject?.lang2} />}
                          {selectedProject?.lang2 && <p>{selectedProject?.lang2}</p>}
                        </div>
                      </Col>
                      <Col>
                        <div class="language-container">
                          {selectedProject?.lang3 && <img src={selectedProject?.imglang3} alt={selectedProject?.lang3} />}
                          {selectedProject?.lang3 && <p>{selectedProject?.lang3}</p>}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDialog}>
              {currentLanguage === "en"
                ? "Close"
                : "Fermer"
              }
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section >
  )
}