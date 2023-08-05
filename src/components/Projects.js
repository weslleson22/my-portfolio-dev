import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";

import projImg9 from "../assets/img/project-imgsw9.png";

import projImg10 from "../assets/img/project-imgsw10.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Site Beauty Salon Startup",
      description: "Feito com as tecnologias HTML, JavaScript e CSS.",
      imgUrl: projImg6,
    },

    {
      title: "Site Ecoleta",
      description: "Website (React + TypeScript), React Router Dom, React Icons, Axios, Leaflet, React Dropzone",
      imgUrl: projImg7,
    },
    {
      title: "Site Statup Sw System",
      description: "Website (React + TypeScript), React Router Dom, React Icons, Axios",
      imgUrl: projImg9,
    },

    {
      title: "Site App MeAzheimer",
      description: "Website (React + TypeScript), React Router Dom,",
      imgUrl: projImg10,
    },


  ];

  const projects_backend = [
    {
      title: "API em NodeJs",
      description: "Foram usados conceitos de SOLID para a construção desse CRUD",
      imgUrl: projImg4,
    },
  ];

  const projects_mobile = [
    {
      title: "Plant Manager",
      description: "Aplicativo para lembrar as pessoas de regar suas plantas 🌱 com as tecnologias Node.js, Expo, React Native, TypeScript, ESlint ,Prettier, EditorConfig",
      imgUrl: projImg5,
      
      
    },

    {
      title: "MeAlzheimer",
      description: "Aplicativo para lembrar as pessoas com Alzheimer em estagio inicial construido com tecnologias Node.js, Expo, React Native, TypeScript, ESlint ,Prettier, EditorConfig",
      imgUrl: projImg8,
      
      
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p style={{ textAlign: 'justify' }}>Obrigado por visitar meu portfólio e espero que você possa ter uma ideia do meu potencial como desenvolvedor júnior. Estou animado com as possibilidades futuras e ansioso para fazer parte de uma equipe talentosa e desafiadora. Sinta-se à vontade para entrar em contato comigo para discutir qualquer oportunidade de colaboração.
                  Atenciosamente, Wesleson Souza Silva.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1 Frontend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2 Backend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3 Mobile</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      
                    <Row>
                        {
                          projects_backend.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                                          
                    <Row>
                        {
                          projects_mobile.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
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
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}