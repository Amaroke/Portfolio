import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/Amaroke.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import frFlag from '../../assets/img/fr_flag.png';
import enFlag from '../../assets/img/en_flag.png';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import "./NavBar.css";
import { useLanguage } from "../LanguageProvider";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const handleLanguageChange = () => {
    changeLanguage();
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/Portfolio">
            <img className="navbar-img" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <HashLink id="homenav" smooth to='#home' className={`nav-link navbar-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('home')}>{currentLanguage === "en" ? "Home" : "Accueil"}</HashLink>
              <HashLink id="skillsnav" smooth to='#skills' className={`nav-link navbar-link ${activeLink === 'skills' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('skills')}>{currentLanguage === "en" ? "Skills" : "Compétences"}</HashLink>
              <HashLink id="projectnav" smooth to='#project' className={`nav-link navbar-link ${activeLink === 'project' ? 'active' : ''}`} onClick={() => onUpdateActiveLink('project')}>{currentLanguage === "en" ? "Projects" : "Projets"}</HashLink>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/hugo-mathieu-steinbach/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://github.com/Amaroke" target="_blank" rel="noreferrer"><img src={navIcon2} alt="github" /></a>
                <a href="mailto:hugo.amaroke@gmail.com"><img src={navIcon3} alt="Envoyer mail" /></a>
              </div>
              <div className="button-group">
                <HashLink to='#connect'>
                  <button className="vvd"><span>{currentLanguage === "en" ? "Let's Connect" : "Me contacter"}</span></button>
                </HashLink>
                <button onClick={handleLanguageChange} className="language-toggle-button">
                  {currentLanguage === "en" ? (
                    <img src={frFlag} alt="French Flag" style={{ width: "75px", height: "auto" }} />
                  ) : (
                    <img src={enFlag} alt="English Flag" style={{ width: "75px", height: "auto" }} />
                  )}
                </button>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
