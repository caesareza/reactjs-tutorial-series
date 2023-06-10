import { Carousel, Container, Button, Stack, Row, Col } from "react-bootstrap";
import SepatuSatu from "./assets/1.webp";
import SepatuDua from "./assets/2.webp";
import SepatuTiga from "./assets/3.webp";

function ImageGallery() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={SepatuSatu} alt="1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SepatuDua} alt="1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={SepatuTiga} alt="1" />
      </Carousel.Item>
    </Carousel>
  );
}

function ProductDescription() {
  return (
    <>
      <div className="header">
        <div>Men&apos;s Shoes</div>
        <Stack direction="horizontal" gap={3}>
          <h1 className="title">Nike Dunk Low Retro Premium</h1>
          <div className="ms-auto price">Rp. 1.000.000</div>
        </Stack>
      </div>
      <p>
        Textured leather. Premium canvas. Cool colours. This Dunk Low makes a
        subdued statement, adding the perfect polish to your outfit. With its
        throwback hoops style and comfy, low-cut collar, we kept everything you
        love about this modern style staple. The finishing touch? Colour-matched
        laces bring the bliss with every step.
      </p>
      <Button>Beli Sekarang</Button>
    </>
  );
}

function App() {
  return (
    <Container className="product">
      <Row>
        <Col sm={12} md={6} lg={8}>
          <ImageGallery />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <ProductDescription />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
