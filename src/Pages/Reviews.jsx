import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Navbars from "../Components/Navbars";
import Footer from '../Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([
        {
            name: 'Ruban',
            comment: 'Este site é uma excelente fonte de informações sobre a fome nas escolas. A interface é fácil de usar e fornece dados cruciais sobre a questão.'
        },
        {
            name: 'Monesh',
            comment: 'Fome nas escolas é um problema grave. Esse site facilita a conscientização e ajuda pessoas a se envolverem em ações para ajudar os alunos em situação de vulnerabilidade.'
        },
        {
            name: 'Karthi',
            comment: 'A iniciativa de abordar a fome nas escolas é de extrema importância. Através deste site, encontrei maneiras de colaborar para melhorar a alimentação dos alunos em escolas públicas.'
        }
    ]);

    const [newReview, setNewReview] = useState({
        name: '',
        comment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewReview(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.name.trim() !== '' && newReview.comment.trim() !== '') {
            setReviews([...reviews, newReview]);
            toast.success("Comentário adicionado com sucesso!", { position: "top-center" });
            setNewReview({ name: '', comment: '' });
        } else {
            toast.error("Por favor, preencha todos os campos.", { position: "top-center" });
        }
    };

    return (
        <>
            <Navbars />
            <ToastContainer />
            <Container>
                <h2 className="text-center mt-5 mb-4">Avaliações sobre a Fome nas Escolas</h2>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {reviews.map((review, index) => (
                        <Col key={index}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{review.name}</Card.Title>
                                    <Card.Text>{review.comment}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <h3 className="mt-5 mb-4">Adicione uma Avaliação</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Seu Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite seu nome"
                            name="name"
                            value={newReview.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formComment">
                        <Form.Label>Comentário</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Digite seu comentário"
                            name="comment"
                            value={newReview.comment}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                        Enviar
                    </Button>
                </Form>
            </Container>
            <Footer />
        </>
    );
}

export default Reviews;
