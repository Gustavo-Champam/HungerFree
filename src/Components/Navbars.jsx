import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'animate.css/animate.min.css';

function Navbars() {
  return (
    <Navbar bg="primary" sticky="top" expand="lg" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/" className="animate_animated animate_fadeInLeft"><h2 className='text-light'>Hunger <span>Free</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link className='text-light animated-link animate_animated animate_fadeInRight' href="/"><b>Home</b></Nav.Link>
            <Nav.Link className='text-light animated-link animate_animated animate_fadeInRight' href="/about"><b>Dados e Impactos e Sobre Nós</b></Nav.Link>
            <Nav.Link className='text-light animated-link animate_animated animate_fadeInRight' href="/reviews"><b>Reviews</b></Nav.Link>
            <Nav.Link className='text-light animated-link animate_animated animate_fadeInRight' href="/contact"><b>Contate-nos</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
