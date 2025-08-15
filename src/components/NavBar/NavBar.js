import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import iconLinkedin from "../../assets/img/icons/icon-linkedin.svg";
import iconGithub from "../../assets/img/icons/icon-github.svg";
import iconMail from "../../assets/img/icons/icon-email.svg";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import "./NavBar.css";
import { useTranslation } from "react-i18next";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [t, i18n] = useTranslation("global");

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

  const handleLanguageChange = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/hugo-mathieu-steinbach/" target="_blank" rel="noreferrer"><img src={iconLinkedin} alt="linkedin" /></a>
                <a href="https://github.com/Amaroke" target="_blank" rel="noreferrer"><img src={iconGithub} alt="github" /></a>
                <a href="mailto:hugo.amaroke@gmail.com"><img src={iconMail} alt="Envoyer mail" /></a>
              </div>
              <div className="button-group">
                <HashLink to='#connect'>
                  <button className="vvd"><span>{t("navbar.contact")}</span></button>
                </HashLink>
                <button onClick={handleLanguageChange} className="language-toggle-button">
                  {i18n.language === "en" ? (
                    <span dangerouslySetInnerHTML={{ __html: "FR / <b>EN</b>" }} />
                  ) : (
                    <span dangerouslySetInnerHTML={{ __html: "<b>FR</b> / EN" }} />
                  )}</button>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavBar;