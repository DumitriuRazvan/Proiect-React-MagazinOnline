import { Image, Card, Button, Row, Col } from "react-bootstrap";

// https://i.ibb.co/L8Nrb7p/1.jpg

function ProductCard() {
    return (
        <>
            <Row xs={1} md={4} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card style={{border: "none"}}>
        <a className="stretched-link text-decoration-none text-dark" href="#">
        <Card.Img variant="top" src="https://i.ibb.co/L8Nrb7p/1.jpg" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            49.99$
          </Card.Text>
        </Card.Body>
        </a>
      </Card>
    </Col>
  ))}
</Row>
        </>
    );
}

export default ProductCard;
