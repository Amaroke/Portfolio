import { Container, Row, Col } from "react-bootstrap";
import iconLinkedin from "../../assets/img/icons/icon-linkedin.svg";
import iconGithub from "../../assets/img/icons/icon-github.svg";
import iconMail from "../../assets/img/icons/icon-email.svg";
import "./footer.css";
import { useTranslation } from "react-i18next";

function Footer() {

  const [t] = useTranslation("global")

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p className="copyright">
              {t("footer.copyright")}
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hugo-mathieu-steinbach/" target="_blank" rel="noreferrer">
                <img src={iconLinkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/Amaroke" target="_blank" rel="noreferrer">
                <img src={iconGithub} alt="github" />
              </a>
              <a href="mailto:hugo.amaroke@gmail.com">
                <img src={iconMail} alt="mail" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
