import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/img1.png";
import img2 from "../assets/hunger-2.png";
import img3 from "../assets/hunger-3.png";

function Carousels() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img1}
            alt="First slide"
            height={450}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img2}
            alt="Second slide"
            height={450}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={img3}
            alt="Third slide"
            height={450}
          />
        </Carousel.Item>
      </Carousel>
      <div className="text-center">
        <h2 className="display-5 mt-3">Vamos dizer não à fome!</h2>
        <p className="lead text-muted">Nós salvamos pessoas que precisam de comida</p>
      </div>
    </>
  );
}

export default Carousels;
