import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bem-vindo ao meu Portfólio</span>
                <h1>{`Oi! Eu sou Wesleson Souza`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p style={{ textAlign: 'justify' }}>
                  Olá e bem-vindo ao meu portfólio! Sou um desenvolvedor júnior apaixonado por tecnologia e estou entusiasmado em compartilhar meu trabalho e experiência com você. Meu nome é Wesleson Souza Silva e estou dedicado a aprender e crescer no campo do desenvolvimento de software.
                  Ao longo dos meus estudos e projetos, tenho adquirido conhecimento em diversas tecnologias e frameworks, como, como React, React-Native, Java Web, HTML, CSS, JavaScript, React, Python, etc. Estou constantemente expandindo meus horizontes e me mantendo atualizado com as tendências mais recentes do setor.
                  Meu objetivo é contribuir com meu talento e habilidades para projetos desafiadores, onde possa trabalhar em equipe, aprender com colegas mais experientes e aprimorar minhas competências técnicas. Sou uma pessoa pró-ativa, com habilidades de resolução de problemas e estou sempre em busca de soluções inovadoras e eficientes.
                  Além das minhas habilidades técnicas, também valorizo a comunicação clara e efetiva. Acredito que a colaboração e o trabalho em equipe são fundamentais para o sucesso de qualquer projeto. Estou animado para trabalhar em um ambiente dinâmico, onde possa aprender e crescer profissionalmente.
                  
                  Obrigado por visitar meu portfólio e espero que você possa ter uma ideia do meu potencial como desenvolvedor júnior. Estou animado com as possibilidades futuras e ansioso para fazer parte de uma equipe talentosa e desafiadora. Sinta-se à vontade para entrar em contato comigo para discutir qualquer oportunidade de colaboração.
                  Atenciosamente, Wesleson Souza Silva

                  </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
