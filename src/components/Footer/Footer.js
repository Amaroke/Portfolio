import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import "./Footer.css";
import { useLanguage } from "../LanguageProvider";

function Footer() {

  const { currentLanguage } = useLanguage();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p className="copyright">
              {currentLanguage === "en"
                ? "© 2023 Amaroke, all rights reserved."
                : "© 2023 Amaroke, tous droits réservés."}
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hugo-mathieu-steinbach/" target="_blank" rel="noreferrer">
                <img src={navIcon1} alt={currentLanguage === "en" ? "linkedin" : "LinkedIn"} />
              </a>
              <a href="https://github.com/Amaroke" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="github" />
              </a>
              <a href="mailto:hugo.amaroke@gmail.com">
                <img src={navIcon3} alt={currentLanguage === "en" ? "Send Email" : "Envoyer mail"} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
