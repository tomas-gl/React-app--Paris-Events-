import { useRef, useState, useEffect } from "react";

// Router-dom import
import { Link } from "react-router-dom";

// Axios import
import axios from "axios";

import { Card, Button, Row, Col, Spinner, Form } from "react-bootstrap";
import { FaHeart } from "react-icons/fa/";
import Parser from 'html-react-parser';

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
    console.log(records);
  }
  console.log(records);

  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>Lister de futurs événements à Paris</h1>

          <Form className="text-start mb-3" onSubmit={onValidateForm}>
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
            <h2 className="text-start">Résultats de la recherche</h2>
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
                      <Card.Title>{Parser(records.record.fields.title)}</Card.Title>
                      <Card.Text>
                        {Parser(records.record.fields.date_start)}{" "}
                        {Parser(records.record.fields.date_end)}
                      </Card.Text>
                      <Card.Text>{Parser(records.record.fields.lead_text)}</Card.Text>
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
        {
          <span className="text-start" style={{ fontStyle: "italic" }}>
            aucun résultat...
          </span>
        }
      </Row>
    </>
  );
};

export default Recherche;
