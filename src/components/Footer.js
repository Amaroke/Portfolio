import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Amaroke.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/hugo-mathieu-steinbach/"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://github.com/Amaroke"><img src={navIcon2} alt="github" /></a>
              <a onClick={() => navigator.clipboard.writeText("Amaroke#8643")}><img src={navIcon3} alt="discord" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
