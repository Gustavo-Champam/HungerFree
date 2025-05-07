import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/grandpa.jpg';
import img3 from '../assets/vol.jpg';
import img2 from '../assets/needy.jpg';

function WhatWeDo() {
  const [animateImages, setAnimateImages] = useState([false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animation-element');
      elements.forEach((element, index) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.75) {
          setAnimateImages(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="text-center">
        <h2 className="display-5 mt-3" style={{ color: '#cc743e' }}>
          O que fazemos?
        </h2>
      </div>
      <p className="text-center">
        Ajudamos a levar comida para quem realmente precisa e garantimos que nenhum alimento seja desperdiçado!
      </p>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col xs={12} md={6} className="animation-element" style={{ opacity: animateImages[0] ? 1 : 0, transform: `translateY(${animateImages[0] ? '0' : '20px'})`, transition: 'opacity 1s ease, transform 1s ease' }}>
            <img src={img1} alt="Idoso recebendo ajuda" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="animation-element" style={{ opacity: animateImages[1] ? 1 : 0, transform: `translateY(${animateImages[1] ? '0' : '20px'})`, transition: 'opacity 1s ease, transform 1s ease' }}>
            <h2 style={{ color: '#FF914D' }}>1. Contribuidores</h2>
            <p style={{ fontSize: '18px' }}>
              Na Hunger Free, nossa missão é transformar o excedente de alimentos em esperança para aqueles que precisam, e você pode fazer parte disso. Como contribuidor, você tem o poder de fazer um impacto real em sua comunidade, compartilhando detalhes sobre alimentos excedentes na nossa plataforma. Se você é um indivíduo, uma empresa ou um organizador de eventos, sua contribuição importa. Ao se juntar a nós, você não apenas reduz o desperdício de alimentos, mas também ajuda a combater a insegurança alimentar em sua comunidade. Cadastre-se agora e comece a fazer a diferença!
            </p>
          </Col>
        </Row>

        <br />
        <br />
        <Row>
          <Col xs={12} md={6} className="animation-element" style={{ opacity: animateImages[1] ? 1 : 0, transform: `translateY(${animateImages[1] ? '0' : '20px'})`, transition: 'opacity 1s ease, transform 1s ease' }}>
            <h2 style={{ color: '#FF914D' }}>2. Voluntários</h2>
            <p style={{ fontSize: '18px' }}>
              Esta iniciativa visa mobilizar esforços para coletar alimentos não utilizados ou sobras de diversas fontes, como restaurantes, supermercados e eventos. Ao coletar alimentos excedentes, a iniciativa busca prevenir o desperdício e redistribuí-los para indivíduos ou comunidades carentes. Os voluntários desempenham um papel crucial na coleta e distribuição dos alimentos excedentes, garantindo que cheguem às pessoas que mais precisam de ajuda.
            </p>
          </Col>
          <Col xs={12} md={6} className="animation-element" style={{ opacity: animateImages[2] ? 1 : 0, transform: `translateY(${animateImages[2] ? '0' : '20px'})`, transition: 'opacity 1s ease, transform 1s ease' }}>
            <img src={img3} alt="Voluntário ajudando na distribuição de alimentos" className="img-fluid" />
          </Col>
        </Row>

        <br />
        <br />
        <Row>
          <Col xs={12} md={6} className="animation-element" style={{ opacity: animateImages[2] ? 1 : 0, transform: `translateY(${animateImages[2] ? '0' : '20px'})`, transition: 'opacity 1s ease, transform 1s ease' }}>
            <img src={img2} alt="Pessoas carentes recebendo alimentos" className="img-fluid" />
          </Col>
          <Col xs={12} md={6} className="animation-element" style={{ opacity: animateImages[2] ? 1 : 0, transform: `translateY(${animateImages[2] ? '0' : '20px'})`, transition: 'opacity 1s ease, transform 1s ease' }}>
            <h2 style={{ color: '#FF914D' }}>3. Pessoas Carentes</h2>
            <p style={{ fontSize: '18px' }}>
              Através da nossa plataforma inovadora, conectamos generosos doadores de alimentos de hotéis, cantinas e restaurantes com as comunidades locais necessitadas. Ao redistribuir alimentos excedentes que seriam desperdiçados, não apenas combatemos a fome, mas também promovemos a sustentabilidade e a responsabilidade ambiental.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WhatWeDo;
