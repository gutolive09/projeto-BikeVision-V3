import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="/img/bike_banner_2.jpg" alt="" />
        <Carousel.Caption>
          <h3>Eficiência</h3>
          <p>
            Posicione o seu negócio no futuro com processos mais eficientes.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/bike_banner_2.jpg" alt="" />
        <Carousel.Caption>
          <h3>Rápido e Prático</h3>
          <p>
            Praticidade maxima para o cliente e agilidade para a seguradora.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;