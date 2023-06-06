import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DOMPurify from 'dompurify';
import { Modal, Button } from "react-bootstrap";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import logoPython from "../../assets/img/logo-python.png";
import logonumpy from "../../assets/img/logo-numpy.png";
import projImg from "../../assets/img/project.jpg";
import georges from "../../assets/img/georges.png";
import ProjetDPiscine from "../../assets/img/projetDPiscine.png";
import obstACL_tower from "../../assets/img/obstACL_tower.png";
import goldenppit from "../../assets/img/goldenppit.png";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css'
import './Modal.css'

export const Projects = () => {

  const [showDialog, setShowDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const projects = [
    {
      title: "Georges",
      resume: "Nettoyage d'archives",
      description: "\"Georges\" permet grâce au raisonnement à partir de cas de nettoyer des archives. Ce projet a été réalisé, dans le cadre de l'UE Initiation à la Recherche de mon Master Informatique à l'Université de Lorraine. Il a été réalisé en collaboration avec Persée, une Unité de Support et de Recherche de l'ENS de Lyon et du CNRS. Entièrement écris en Python l'outil développé à permis d'obtenir des résultats très satisfaisants sur l'ensemble des documents fournis. Ces travaux ont menés à la publication d'un article à l'occasion de l'International Conference on Case-Based Reasoning de 2023.<br>Pour plus d'informations, vous pouvez consulter le <a href=\"github.com/Amaroke/Georges\">dépôt GitHub</a> du projet.",
      imgUrl: georges,
      imgUrl1: georges,
      imgUrl2: georges,
      imgUrl3: georges,
      imglang1: logoPython,
      imglang2: logonumpy,
      lang1: "Python",
      lang2: "NumPy"
    },
    {
      title: "ProjetDPiscine",
      resume: "Site de gestion d'agenda",
      imgUrl: ProjetDPiscine,
    },
    {
      title: "ObstACL-Tower",
      resume: "Jeu de roguelike",
      imgUrl: obstACL_tower,
    },
    {
      title: "Golden-PPIT",
      resume: "Site web d'organisation d'évènements",
      imgUrl: goldenppit,
    },
    {
      title: "PlatVenture",
      resume: "Jeu de plateforme",
      imgUrl: projImg,
    },
    {
      title: "PuissanceQuatre",
      resume: "IA de jeu de puissance 4",
      imgUrl: projImg,
    },
  ];

  const perso_projects = [
    {
      title: "Charadle",
      resume: "Jeu de devinette de personnages",
      imgUrl: projImg,
    },
    {
      title: "MakeMoreMeat",
      resume: "Jeu incrémental sous Android",
      imgUrl: projImg,
    },
    {
      title: "ReactChess",
      resume: "Site d'échecs",
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
                                  setSelectedProject={setSelectedProject}
                                  setShowDialog={setShowDialog}
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
                </div>}
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
                  Technologies utilisées :
                </div>
                <div className="icons-container">
                  <div className="languages">
                    <Row>
                      <Col>
                        <img src={selectedProject?.imglang1} alt={selectedProject?.lang1} />
                        <p>{selectedProject?.lang1}</p>
                      </Col>
                      <Col>
                        {selectedProject?.lang2 && <img src={selectedProject?.imglang2} alt={selectedProject?.lang2} />}
                        {selectedProject?.lang2 && <p>{selectedProject?.lang2}</p>}
                      </Col>
                      <Col>
                        {selectedProject?.lang3 && <img src={selectedProject?.imglang2} alt={selectedProject?.lang3} />}
                        {selectedProject?.lang2 && <p>{selectedProject?.lang3}</p>}
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDialog}>Fermer</Button>
          </Modal.Footer>
        </Modal>

      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section >
  )
}
