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
import logotypescript from "../../assets/img/logo-typescript.png";
import logoReact from "../../assets/img/logo-react.png";
import logonodejs from "../../assets/img/logo-nodejs.png";
import logojavascript from "../../assets/img/logo-js.png";
import logojava from "../../assets/img/logo-java.png";
import logolibgdx from "../../assets/img/logo-libgdx.png";
import logoPHP from "../../assets/img/logo-php.png";
import logocomposer from "../../assets/img/logo-composer.png";
import logohtmlcss from "../../assets/img/logo-html-css.png";
import logoAndroidStudio from "../../assets/img/logo-android-studio.png";
import logoKotlin from "../../assets/img/logo-kotlin.png";
import projImg from "../../assets/img/project.jpg";
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
      imgUrl: projImg,
      imgUrl1: projImg,
      imgUrl2: projImg,
      imgUrl3: projImg,
      imglang1: logoPython,
      imglang2: logonumpy,
      lang1: "Python",
      lang2: "NumPy"
    },
    {
      title: "ProjetDPiscine",
      resume: "Site de gestion d'agenda",
      description: "ProjetDPiscine est un projet de site web développé durant mon master. Il inclut une gestion côté serveur avec Node.js et propose un site de gestion d'agenda. L'objectif est de permettre aux utilisateurs de créer des comptes et de planifier des évènements avec plusieurs autres utilisateurs via un calendrier partagé.",
      imgUrl: projImg,
      imgUrl1: projImg,
      imgUrl2: projImg,
      imgUrl3: projImg,
      imgUrl4: projImg,
      imgUrl5: projImg,
      imglang1: logonodejs,
      imglang2: logojavascript,
      imglang3: logohtmlcss,
      lang1: "NodeJS",
      lang2: "Javascript",
      lang3: "Html/Css"
    },
    {
      title: "ObstACL-Tower",
      resume: "Jeu de type roguelike",
      description: "ObstACL-Tower est un jeu de type rogue-like qui offre une progression à travers plusieurs niveaux, permettant aux joueurs d'affronter divers monstres. Des collectibles sont également présents, ainsi qu'une gestion du score, des sons et des musiques. Ce projet a été développé en appliquant la méthode Scrum et en utilisant libGDX.",
      imgUrl: projImg,
      imgUrl1: projImg,
      imgUrl2: projImg,
      imgUrl3: projImg,
      imgUrl4: projImg,
      imgUrl5: projImg,
      imglang1: logojava,
      imglang2: logolibgdx,
      lang1: "Java",
      lang2: "LibGDX"
    },
    {
      title: "Golden-PPIT",
      resume: "Site web d'organisation d'évènements",
      description: "Golden-PPIT est un site web d'organisation d'événements qui permet à plusieurs utilisateurs de s'inviter et de planifier leurs activités via la plateforme. Il a été développé en utilisant la méthode Scrum, et comprend une base de données complète pour assurer son bon fonctionnement.",
      imgUrl: projImg,
      imgUrl1: projImg,
      imgUrl2: projImg,
      imgUrl3: projImg,
      imgUrl4: projImg,
      imgUrl5: projImg,
      imglang1: logoPHP,
      imglang2: logohtmlcss,
      imglang3: logocomposer,
      lang1: "PHP",
      lang2: "Html/Css",
      lang3: "Composer"
    },
    {
      title: "PlatVenture",
      resume: "Jeu de plateforme",
      description: "Platventure est un jeu de plateforme offrant une expérience de jeu à travers plusieurs niveaux. Il est disponible sur PC ainsi que sur mobile, grâce à l'utilisation de libGDX. Le jeu propose des collectibles, un système de score et des effets sonores.",
      imgUrl: projImg,
      imgUrl1: projImg,
      imgUrl2: projImg,
      imgUrl3: projImg,
      imgUrl4: projImg,
      imgUrl5: projImg,
      imglang1: logojava,
      imglang2: logolibgdx,
      imglang3: logoAndroidStudio,
      lang1: "Java",
      lang2: "LibGDX",
      lang3: "Android Studio"
    },
    {
      title: "PuissanceQuatre",
      resume: "IA d'un jeu de puissance 4",
      description: "PuissanceQuatre est un jeu de puissance 4 avec une IA développée en utilisant l'algorithme Alpha-Beta. Cette IA offre plusieurs niveaux de difficulté, avec des degrés de profondeur différents pour simuler ses coups. Elle devient ainsi pratiquement imbattable pour l'humain une fois qu'elle atteint un certain seuil de prédictions.",
      imgUrl: projImg,
      imgUrl1: projImg,
      imgUrl2: projImg,
      imgUrl3: projImg,
      imgUrl4: projImg,
      imgUrl5: projImg,
      imglang1: logojava,
      lang1: "Java"
    },
  ];

  const perso_projects = [
    {
      title: "Charadle",
      resume: "Jeu web de devinettes de personnages",
      description: "Charadle est un site web développé en React, inspiré de Wordle, qui propose un jeu où le joueur doit deviner un personnage issu d'un manga/anime à partir d'une image, ou deviner le titre de l'œuvre associée. Le site inclut une gestion de base de données pour les utilisateurs, ainsi qu'un lien vers l'API de MyAnimeList pour accéder aux informations nécessaires.",
      imgUrl: projImg,
      imgUrl1: projImg,
      imgUrl2: projImg,
      imgUrl3: projImg,
      imgUrl4: projImg,
      imgUrl5: projImg,
      imglang1: logoReact,
      imglang2: logohtmlcss,
      imglang3: logojavascript,
      lang1: "ReactJS",
      lang2: "Html/Css",
      lang3: "Javascript"
    },
    {
      title: "MakeMoreMeat",
      resume: "Jeu incrémental sous Android",
      description: "MakeMoreMeat est un jeu de type incrémental en cours de développement, réalisé en Kotlin spécialement pour Android. L'objectif de ce projet est de découvrir les différentes facettes du développement mobile et d'explorer les aspects liés à la création d'applications pour cette plateforme.",
      imgUrl: projImg,
      imgUrl1: projImg,
      imgUrl2: projImg,
      imgUrl3: projImg,
      imgUrl4: projImg,
      imgUrl5: projImg,
      imglang1: logoKotlin,
      imglang2: logoAndroidStudio,
      lang1: "Kotlin",
      lang2: "Android Studio"
    },
    {
      title: "Yurei Esports",
      resume: "Site web d'une équipe d'esport",
      description: "Yurei Esport est un site web développé en React pour une équipe d'esport allemande. Le site agit comme une vitrine de l'équipe, présentant des informations et des détails pertinents sur eux.",
      imgUrl: projImg,
      imgUrl1: projImg,
      imgUrl2: projImg,
      imgUrl3: projImg,
      imgUrl4: projImg,
      imgUrl5: projImg,
      imglang1: logotypescript,
      imglang2: logohtmlcss,
      imglang3: logoReact,
      lang1: "TypeScript",
      lang2: "Html/Css",
      lang3: "ReactJS"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <h2>Projets</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Personnels</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Universitaires</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <p>Voici les différents projets dans lesquels je suis investis sur mon temps libre :</p>
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
                    <p>Voici certains des projets que j'ai pu réaliser au cours de ma formation :</p>
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
                  Technologies utilisées :
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
            <Button variant="secondary" onClick={handleCloseDialog}>Fermer</Button>
          </Modal.Footer>
        </Modal>

      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section >
  )
}
