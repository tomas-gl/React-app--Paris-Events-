import { recordExpression } from "@babel/types";
import { useRef, useState } from "react";

import { Card, Button, Row, Col, Spinner, Form } from "react-bootstrap";
import { FaHeart } from "react-icons/fa/";

const Recherche = ({ event }) => {
  if (event) {
    console.log(event);
  }

  const inputRef = useRef();
  const [record, setRecords] = useState(null);

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
        {/* {record && (
          <>
            <h2>Résultats</h2>
            {recordExpression.map((record) => (
              <p>{record.fields.title}</p>
            ))}
          </>
        )} */}
        {/* <Col lg={3} md={6} xs={12} className="mt-3">
          <Link
            to={{
              pathname: `/event/${event.id}`,
              state: { eventRecent: event },
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
        </Col> */}
      </Row>
    </>
  );
};

export default Recherche;
