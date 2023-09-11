import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import "./Footer.css";
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
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/Amaroke" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="github" />
              </a>
              <a href="mailto:hugo.amaroke@gmail.com">
                <img src={navIcon3} alt="mail" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
