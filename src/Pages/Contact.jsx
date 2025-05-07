import { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import Navbars from "../Components/Navbars";
import Footer from '../Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação simples
        if (!name || !email || !message) {
            toast.error("Todos os campos são obrigatórios!", { position: "top-center" });
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Por favor, insira um e-mail válido", { position: "top-center" });
            return;
        }

        // Aqui você pode lidar com o envio do formulário, como enviar os dados para um back-end ou exibir uma mensagem de sucesso
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Mensagem:', message);

        // Limpar os campos do formulário após o envio
        setName('');
        setEmail('');
        setMessage('');
        toast.success("Mensagem enviada com sucesso!", { position: "top-center" });
    };

    return (
        <>
            <Navbars />
            <ToastContainer />
            <Container style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
                <Card style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
                    <h2 className="text-center mb-4">Fale Conosco</h2>
                    <p className="text-center" style={{ fontSize: '16px', color: '#333' }}>
                        Ajude-nos a combater a fome nas escolas. Entre em contato conosco para mais informações ou para saber como contribuir.
                    </p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Seu Nome</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Endereço de E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Escreva sua mensagem"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" block>
                            Enviar
                        </Button>
                    </Form>
                </Card>
            </Container>
            <Footer />
        </>
    );
}

export default Contact;
