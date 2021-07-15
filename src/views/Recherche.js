import { useRef, useState } from "react";

// Router-dom import
import { Link } from "react-router-dom";

import { Card, Button, Row, Col, Spinner, Form } from "react-bootstrap";
import { FaHeart } from "react-icons/fa/";

const Recherche = ({ event }) => {
  if (event) {
    console.log(event);
  }

  const inputRef = useRef();
  // const [records, setRecords] = useState(null);

  function onValidateForm(event) {
    event.preventDefault();

    const searchValue = inputRef.current.value;
  }

  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>Lister de futurs événements à Paris</h1>
          {/* <form onSubmit={onValidateForm}>
            <input
              className="input"
              type="search"
              name="q"
              placeholder="Nom d'événement …"
            />
            <button type="submit" className="button is-primary">
              Rechercher
            </button>
          </form> */}
          <Form className="text-left">
            <Form.Group className="mb-3" controlId="formRecherche">
              <Form.Control type="text" placeholder="Nom d'événement..." />
            </Form.Group>
            <Button variant="primary" type="submit">
              Valider
            </Button>
          </Form>
        </Col>
        {event && (
          <>
            <h2>Résultats</h2>
            {event.map((event, index) => (
              <Col key={index} lg={3} md={6} xs={12} className="mt-3">
                <Link
                  to={{
                    pathname: `/event/${event.record.id}`,
                  }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={event.record.fields.cover_url}
                    />
                    <Card.Body>
                      <Card.Title>{event.record.fields.title}</Card.Title>
                      <Card.Text>
                        {event.record.fields.date_start}{" "}
                        {event.record.fields.date_end}
                      </Card.Text>
                      <Card.Text>{event.record.fields.lead_text}</Card.Text>
                      <Button variant="outline-danger">
                        <FaHeart /> Sauvegarder
                      </Button>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </>
        )}
      </Row>
    </>
  );
};

export default Recherche;
