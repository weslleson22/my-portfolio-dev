import bootstrap from "../assets/tecnologiasImg/bootstrap.svg";
import docker from "../assets/tecnologiasImg/docker.svg";
import github from "../assets/tecnologiasImg/github.svg";
import html from "../assets/tecnologiasImg/html.svg";
import java from "../assets/tecnologiasImg/java.svg";
import javascript from "../assets/tecnologiasImg/javascript.svg";
import mongodb from "../assets/tecnologiasImg/mongodb.svg";
import mysql from "../assets/tecnologiasImg/mysql.svg";
import postgresql from "../assets/tecnologiasImg/postgresql.svg";
import nagios from "../assets/tecnologiasImg/nagios.svg";
import nodejs from "../assets/tecnologiasImg/nodejs.svg";
import react from "../assets/tecnologiasImg/react.svg";
import css from "../assets/tecnologiasImg/css.svg";
import Ja from "../assets/tecnologiasImg/java.svg";
import python1 from "../assets/tecnologiasImg/python.svg";


import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import TpScript from "../assets/img/TpSript.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter4 from "../assets/img/meter4.svg";

import meter5 from "../assets/img/meter5.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p style={{ textAlign: 'justify' }}>Este portfólio é uma representação dos projetos em que trabalhei até agora, demonstrando meu envolvimento em diferentes etapas de desenvolvimento, desde o planejamento e design até a implementação e testes. 
                  .<br></br>Estou sempre em busca de feedback e oportunidades para melhorar e expandir meu conjunto de habilidades..</p>
                        <div>
                          <h2>_</h2>
                        </div>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Frontend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Backend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Mobile</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Solid</h5>
                            </div>
                          
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>TDD</h5>
                            </div>
                        </Carousel>
                        <div>
                          <h2>_</h2>
                        </div>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                            <div className="item">
                                <img src={docker} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={github} alt="Image" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                          
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>JavaSript</h5>
                            </div>
                            <div className="item">
                                <img src={TpScript} alt="Image" />
                                <h5>TypeSript</h5>
                            </div>
                            
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>     
                            <div className="item">
                                <img src={Ja} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            
                            <div className="item">
                                <img src={postgresql} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                                                        
                            <div className="item">
                                <img src={nodejs} alt="Image" />
                                <h5>NodeJs</h5>
                            </div>

                      
                            
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>

                            <div className="item">
                                <img src={python1} alt="Image" />
                                <h5>Python</h5>
                            </div>
             
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
