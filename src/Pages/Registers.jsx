import { useState } from 'react';
import Navbars from "../Components/Navbars";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registers = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (!email || !password || !name || !address || !city || !district || !zip) {
      toast.error("Todos os campos são obrigatórios", { position: "top-center" });
      return;
    }

    // Simula um registro bem-sucedido (Você pode substituir isso por lógica real de backend)
    toast.success("Registro bem-sucedido!", { position: "top-center" });

    // Limpa os campos do formulário após o envio
    setEmail('');
    setPassword('');
    setName('');
    setAddress('');
    setCity('');
    setDistrict('');
    setZip('');
  };

  return (
    <>
      <Navbars />
      <ToastContainer />
      <Container className="mt-5">
        <Card style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
          <Card.Body>
            <h3 className="text-center mb-4">Registro de Colaborador</h3>
            <p className="text-center" style={{ fontSize: '16px', color: '#333' }}>
              Faça parte da nossa missão de combater a fome nas escolas. Preencha o formulário abaixo para se cadastrar.
            </p>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Nova Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  placeholder="Nome da organização ou instituição"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress">
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  placeholder="Rua, número, bairro"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDistrict">
                  <Form.Label>Distrito</Form.Label>
                  <Form.Select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    required
                  >
                    <option>Escolha...</option>
                    <option>Chennai</option>
                    <option>Thiruvallur</option>
                    <option>Madurai</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Eu concordo com os termos e condições"
                />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Enviar
              </Button>
              <br />
              <br />
              <p className="text-center">
                Já tem uma conta? <a href="/logins" style={{ textDecoration: 'none' }}><span>Faça login</span></a>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Registers;
