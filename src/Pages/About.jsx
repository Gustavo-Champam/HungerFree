import { Container, Row, Col } from 'react-bootstrap';
import Navbars from "../Components/Navbars";
import Footer from '../Components/Footer';

const About = () => {
  return (
    <>
      <Navbars />
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="text-center mb-4" style={{ color:'#FF914D'}}>Sobre Nós</h2>
            <p style={{ fontSize:'18px'}}>
              No Hunger Free, nossa dedicação para erradicar a fome nas escolas é o que nos move. De acordo com dados de 2025, a fome nas escolas brasileiras afeta mais de 20 milhões de crianças, o que compromete seu desempenho acadêmico e bem-estar. Através de nossa plataforma inovadora, buscamos conectar doadores de alimentos com escolas e organizações que atendem a essas comunidades em situação de insegurança alimentar. 
            </p>
            <p style={{ fontSize:'18px'}}>
              Em 2025, a situação é alarmante, com muitos alunos indo para a escola sem uma refeição adequada. A falta de alimentação impacta diretamente na capacidade de aprendizagem das crianças, exacerbando o ciclo de pobreza. Nossa missão é combater esse problema criando um processo simples e eficiente de doação de alimentos, permitindo que escolas, empresas e indivíduos se envolvam facilmente na causa. Voluntários, que são o coração da nossa operação, têm a responsabilidade de coletar e distribuir alimentos para as escolas mais necessitadas.
            </p>
            <p style={{ fontSize:'18px'}}>
              Além das histórias individuais, nossa plataforma oferece benefícios significativos. Em primeiro lugar, garantimos que os alimentos cheguem rapidamente às crianças, minimizando os atrasos e maximizando o impacto. Nossa abordagem comunitária também fortalece o senso de pertencimento e empoderamento, tanto para doadores quanto para voluntários, ampliando o alcance de nossas ações. E, talvez o mais importante, ao combater o desperdício de alimentos e a fome simultaneamente, contribuímos para um futuro mais sustentável para as próximas gerações.
            </p>
            <p style={{ fontSize:'18px'}}>
              Mas o nosso trabalho está longe de acabar. De acordo com dados de 2025, os desafios aumentam a cada dia, com um número crescente de crianças caindo no ciclo da fome. Convidamos você a se juntar a nós nessa missão. Juntos, podemos ser a mudança que queremos ver no mundo. Juntos, podemos construir um futuro onde nenhuma criança vá para a cama com fome. Juntos, podemos fazer a diferença que vai muito além das telas e atingir a vida daqueles que mais precisam.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>    
  )
}

export default About;
