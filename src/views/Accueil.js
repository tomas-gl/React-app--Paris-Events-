import { Card, Button, Container, Row, Col } from "react-bootstrap";

function Accueil() {
  return (
    <div>
      <h1>Bienvenue sur Paris Events</h1>
      <p>L'application qui permet de rechercher en direct les prochains événements Parisiens</p>
      <hr/>
      <h2>Actualité</h2>
      <p>Le dernier événement publié :</p>
      <Row>
        <Col lg={3} md={6} xs={12} className="mt-3">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="info">Info</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Accueil;
