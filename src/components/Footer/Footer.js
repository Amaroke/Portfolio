import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/Amaroke.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href="/Portfolio"> <img src={logo} alt="Logo" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hugo-mathieu-steinbach/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://github.com/Amaroke" target="_blank" rel="noreferrer"><img src={navIcon2} alt="github" /></a>
              <a href="mailto:hugo.amaroke@gmail.com"><img src={navIcon3} alt="Envoyer mail" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
