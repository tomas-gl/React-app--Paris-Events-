// React imports
import { useRef, useState } from "react";

// Router-dom imports
import { Link } from "react-router-dom";

// Axios imports
import axios from "axios";

import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { FaHeart } from "react-icons/fa/";

//Data formatting imports
import Parser from "html-react-parser";
import DayJS from "react-dayjs";

const Recherche = ({
  favorites,
  onAddFavorites,
  onRemoveFavorites,
  isFavorited,
}) => {
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

  console.log("Liste des événements favoris:", favorites);

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
                  className="event-link"
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={records.record.fields.cover_url}
                    />
                    <Card.Body>
                      <Card.Title>
                        {Parser(records.record.fields.title)}
                      </Card.Title>
                      <Card.Text>
                        <DayJS
                          format="DD-MM-YYYY, HH:mm:ss"
                          className="d-block"
                        >
                          {Parser(records.record.fields.date_start)}
                        </DayJS>
                        <DayJS
                          format="DD-MM-YYYY, HH:mm:ss"
                          className="d-block"
                        >
                          {Parser(records.record.fields.date_end)}
                        </DayJS>
                      </Card.Text>
                      <Card.Text>
                        {Parser(records.record.fields.lead_text)}
                      </Card.Text>
                      {!isFavorited(records.record) ? (
                        <Button
                          variant="outline-danger"
                          onClick={(e) => onAddFavorites(records.record, e)}
                        >
                          <FaHeart variant="outline-danger" /> Ajouter
                        </Button>
                      ) : (
                        <></>
                      )}
                      {isFavorited(records.record) ? (
                        <Button
                          variant="danger"
                          onClick={(e) => onRemoveFavorites(records.record, e)}
                        >
                          <FaHeart /> Retirer
                        </Button>
                      ) : (
                        <></>
                      )}
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
