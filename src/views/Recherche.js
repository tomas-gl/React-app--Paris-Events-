import { useRef, useState, useEffect } from "react";

// Router-dom import
import { Link } from "react-router-dom";

// Axios import
import axios from "axios";

import { Card, Button, Row, Col, Spinner, Form } from "react-bootstrap";
import { FaHeart } from "react-icons/fa/";

const Recherche = () => {
  let search = "";
  let url;
  const inputRef = useRef();
  const [records, setRecords] = useState(null);

  //Fonction de recherche
  function onValidateForm(event) {
    search = inputRef.current.value;
    event.preventDefault();
    url = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/?search=${search}`;
    console.log(url);
    axios.get(url).then((response) => {
      setRecords(response.data);
    });
  }

  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>Lister de futurs événements à Paris</h1>

          <Form className="text-start" onSubmit={onValidateForm}>
            <Form.Group className="mb-3" controlId="formRecherche">
              <Form.Control
                type="text"
                placeholder="Nom d'événement..."
                ref={inputRef}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Valider
            </Button>
          </Form>
        </Col>
        {records && (
          <>
            <h2>Résultats</h2>
            {records.records.map((records, index) => (
              <Col key={index} lg={3} md={6} xs={12} className="mt-3">
                <Link
                  to={{
                    pathname: `/event/${records.record.id}`,
                  }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={records.record.fields.cover_url}
                    />
                    <Card.Body>
                      <Card.Title>{records.record.fields.title}</Card.Title>
                      <Card.Text>
                        {records.record.fields.date_start}{" "}
                        {records.record.fields.date_end}
                      </Card.Text>
                      <Card.Text>{records.record.fields.lead_text}</Card.Text>
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
