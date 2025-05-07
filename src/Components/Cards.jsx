import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cards() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/100x160" alt="Imagem ilustrativa de alimento" />
        <Card.Body>
          <Card.Title>Combate à Fome</Card.Title>
          <Card.Text>
            Este card descreve como a fome nas escolas está impactando a vida de milhares de crianças e como podemos ajudar.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Atualizado 3 minutos atrás</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/100x160" alt="Imagem ilustrativa de voluntariado" />
        <Card.Body>
          <Card.Title>Voluntariado</Card.Title>
          <Card.Text>
            O papel dos voluntários é essencial para o combate à fome. Descubra como você pode se envolver.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Atualizado 5 minutos atrás</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/100x160" alt="Imagem ilustrativa de doação de alimentos" />
        <Card.Body>
          <Card.Title>Doação de Alimentos</Card.Title>
          <Card.Text>
            Saiba como doar alimentos para as escolas e apoiar as crianças que mais precisam de ajuda.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Atualizado 10 minutos atrás</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cards;
