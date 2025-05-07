import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbars from "../Components/Navbars";
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip } from 'chart.js';

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
          content="Informações reais e atualizadas sobre a fome infantil no Brasil e a atuação da HungerFree no combate à insegurança alimentar."
        />
      </Helmet>

      <Navbars />
      <Container className="mt-5 mb-5">
        <h2 className="text-center mb-4" style={{ color: '#FF914D' }}>
          Sobre o Projeto HungerFree
        </h2>

        <Row>
          <Col>
            <h4>📊 A Realidade da Fome Infantil no Brasil</h4>
            <p style={{ fontSize: '18px' }}>
              Segundo a UNICEF, em 2023 cerca de <strong>28,8 milhões de crianças e adolescentes</strong> viviam em situação de pobreza multidimensional.
              <br /><br />
              A Rede Penssan também revelou que <strong>37,4% das crianças até 4 anos</strong> viviam em lares com insegurança alimentar, sendo 4,5% em situação grave.
              <br /><br />
              Na região Norte, <strong>4,7% das crianças</strong> com menos de 5 anos estavam desnutridas em 2023.
            </p>
          </Col>
        </Row>

        {/* Gráfico */}
        <div className="my-5">
          <Line data={dataFome} options={optionsFome} />
        </div>

        {/* Cards com impacto */}
        <h3 className="text-center my-5" style={{ color: '#FF914D' }}>Dados de Impacto e Futuro</h3>

        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Card.Title>🌱 Resultados Alcançados</Card.Title>
            <Card.Text style={{ fontSize: '17px' }}>
              Desde o lançamento, já redirecionamos <strong>3 toneladas de alimentos</strong> para escolas e ONGs, beneficiando centenas de crianças.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-4 shadow-sm bg-light">
          <Card.Body>
            <Card.Title>🚀 Metas para os Próximos Meses</Card.Title>
            <Card.Text style={{ fontSize: '17px' }}>
              <ul>
                <li>Expandir para 20+ cidades</li>
                <li>Parcerias com supermercados</li>
                <li>App com rastreamento em tempo real</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-4 shadow-sm bg-warning text-dark">
          <Card.Body>
            <Card.Title>💛 Como Você Pode Ajudar</Card.Title>
            <Card.Text style={{ fontSize: '17px' }}>
              <ul>
                <li><strong>Doe</strong> alimentos excedentes</li>
                <li><strong>Seja voluntário</strong> na sua cidade</li>
                <li><strong>Divulgue</strong> para sua rede</li>
              </ul>
              <em>Juntos, nenhuma criança precisa estudar com fome.</em>
            </Card.Text>
          </Card.Body>
        </Card>

        <p className="text-muted text-center mt-5" style={{ fontSize: '14px' }}>
          Fontes: UNICEF, Rede Penssan, O Globo (2023–2024)
        </p>
      </Container>
      <Footer />
    </>
  );
};

export default Sobre;
