import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbars from "../Components/Navbars";
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip);

const dataFome = {
  labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'Milhões de pessoas com fome',
      data: [10.3, 12.5, 19.1, 24.4, 28.5, 33.1],
      borderColor: '#FF914D',
      backgroundColor: 'rgba(255, 145, 77, 0.2)',
      tension: 0.3,
      fill: true,
    },
  ],
};

const optionsFome = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Evolução da Fome no Brasil (2018–2023)',
    },
  },
};

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre | HungerFree</title>
        <meta
          name="description"
          content="Informações reais e ações da HungerFree contra a fome escolar no Brasil, com dados atualizados, gráficos e formas de ajudar."
        />
      </Helmet>

      <Navbars />
      <Container className="mt-5 mb-5">
        {/* Título */}
        <h2 className="text-center mb-4" style={{ color: '#FF914D' }}>
          Conheça o HungerFree e nossa missão contra a fome nas escolas
        </h2>

        {/* Seção: Fome nas Escolas */}
        <Row>
          <Col>
            <h4>📚 Fome nas Escolas Públicas do Brasil</h4>
            <p style={{ fontSize: '18px' }}>
              A fome afeta profundamente o desempenho escolar de milhões de crianças brasileiras. Para muitas, a merenda é a única refeição do dia. Segundo a <a href="https://www.unicef.org/brazil" target="_blank" rel="noreferrer">UNICEF</a>, em 2023 mais de <strong>28,8 milhões</strong> de crianças viviam em pobreza multidimensional.
              <br /><br />
              A <a href="https://olheparaafome.com.br" target="_blank" rel="noreferrer">Rede Penssan</a> destaca que <strong>37,4% das crianças até 4 anos</strong> enfrentam insegurança alimentar, e 4,5% convivem com fome severa. A região Norte concentra os maiores índices de desnutrição infantil (4,7%).
            </p>
          </Col>
        </Row>

        {/* Gráfico */}
        <div className="my-5">
          <Line data={dataFome} options={optionsFome} />
        </div>

        {/* Seção: Sobre o HungerFree */}
        <Row>
          <Col>
            <h4>🤝 Sobre o HungerFree</h4>
            <p style={{ fontSize: '18px' }}>
              O HungerFree é uma iniciativa tecnológica e social criada para combater a fome nas escolas. Atuamos conectando:
            </p>
            <ul style={{ fontSize: '18px' }}>
              <li><strong>Doadores:</strong> comércios, supermercados, restaurantes e cidadãos</li>
              <li><strong>Voluntários:</strong> que realizam coletas e entregas</li>
              <li><strong>Escolas públicas e ONGs:</strong> que recebem os alimentos</li>
            </ul>
            <p style={{ fontSize: '18px' }}>
              Nossa plataforma garante que o alimento chegue de forma rápida e segura onde mais é necessário.
            </p>
          </Col>
        </Row>

        {/* Cards com Impacto */}
        <h3 className="text-center my-5" style={{ color: '#FF914D' }}>Impacto e Caminhos para o Futuro</h3>

        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Card.Title>🌱 Resultados Alcançados</Card.Title>
            <Card.Text style={{ fontSize: '17px' }}>
              Desde 2024, já redirecionamos <strong>mais de 3 toneladas</strong> de alimentos a escolas públicas e instituições sociais. Além disso, promovemos ações educativas em comunidades sobre alimentação segura.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-4 shadow-sm bg-light">
          <Card.Body>
            <Card.Title>🚀 Metas para os Próximos Meses</Card.Title>
            <Card.Text style={{ fontSize: '17px' }}>
              <ul>
                <li>Expandir para 20 novas cidades até o fim de 2025</li>
                <li>Firmar parcerias com 50 redes de supermercados</li>
                <li>Lançar um aplicativo com rastreamento em tempo real</li>
                <li>Atuar junto a políticas públicas de combate à fome</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Chamada para ação */}
        <Card className="mb-4 shadow-sm bg-warning text-dark">
          <Card.Body>
            <Card.Title>💛 Como Você Pode Ajudar</Card.Title>
            <Card.Text style={{ fontSize: '17px' }}>
              Participe dessa transformação:
              <ul>
                <li><strong>Doe</strong> alimentos excedentes ou dentro do prazo</li>
                <li><strong>Cadastre-se</strong> como voluntário em nossa plataforma</li>
                <li><strong>Divulgue</strong> nossa missão para amigos e empresas</li>
              </ul>
              <div className="text-center mt-3">
                <Button variant="primary" href="/Contact">
                  Quero ser voluntário
                </Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Fontes */}
        <p className="text-muted text-center mt-5" style={{ fontSize: '14px' }}>
          Fontes: <a href="https://www.unicef.org/brazil" target="_blank" rel="noreferrer">UNICEF Brasil</a>, <a href="https://olheparaafome.com.br" target="_blank" rel="noreferrer">Rede Penssan</a>, O Globo (2023–2024)
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default Sobre;
