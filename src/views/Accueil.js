// Router-dom import
import { Link } from "react-router-dom";

import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import { FaHeart } from "react-icons/fa/";

const Accueil = ({ event }) => {
  if (event) {
    console.log(event);
  }

  if (event) {
    return (
      <>
        <Row>
          <Col xs={12}>
            <h1>Bienvenue sur Paris Events</h1>
            <p>
              L'application qui permet de rechercher en direct les prochains
              événements Parisiens
            </p>
            <hr />
            <div className="text-start">
              <h2>Actualité</h2>
              <p>Le dernier événement publié :</p>
            </div>
          </Col>
          <Col lg={3} md={6} xs={12} className="mt-3">
            <Link
              to={{
                pathname: `/event/${event.id}`,
              }}
            >
              <Card>
                <Card.Img variant="top" src={event.fields.cover_url} />
                <Card.Body>
                  <Card.Title>{event.fields.title}</Card.Title>
                  <Card.Text>
                    {event.fields.date_start} {event.fields.date_end}
                  </Card.Text>
                  <Card.Text>{event.fields.lead_text}</Card.Text>
                  <Button variant="outline-danger">
                    <FaHeart /> Sauvegarder
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </>
    );
  }

  return <Spinner animation="border" role="status"></Spinner>;
};

export default Accueil;
