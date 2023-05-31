import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Component2.svg";
import navIcon from "../assets/img/nav-icon.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/whatsapp.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://api.whatsapp.com/send?phone=5598984971547"><img src={navIcon4} alt="" /></a>
                <a href="https://github.com/weslleson22"><img src={navIcon} alt="" /></a>
                <a href="https://www.linkedin.com/in/wesleson-souza-silva-a598b8152/"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/weslleson.santos/"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/eng_weslleson9/?igshid=MzNlNGNkZWQ4Mg%3D%3D"><img src={navIcon3} alt="" /></a>
              </div>
            <p >Copyright 2023. Todos os direitos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
