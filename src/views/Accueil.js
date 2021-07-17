// React imports
import { useState, useEffect } from "react";

// Axios imports
import axios from "axios";

// Router-dom imports
import { Link } from "react-router-dom";

// Bootstrap/Icons imports
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import { FaHeart } from "react-icons/fa/";

//Data formatting imports
import Parser from "html-react-parser";
import DayJS from "react-dayjs";

const Accueil = ({ onAddFavorites, onRemoveFavorites, isFavorited }) => {
  const url =
    "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/?sort=-date_start&rows=15";
  const [event, setEvent] = useState(null);
  let eventRecent;

  // Récupération des données
  useEffect(() => {
    let isMounted = true;
    axios.get(url).then((response) => {
      if (isMounted) setEvent(response.data);
    });
    return () => {
      isMounted = false;
    };
  });
  if (event) {
    eventRecent = event.records[0].record;
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
                pathname: `/event/${eventRecent.id}`,
              }}
              className="event-link"
            >
              <Card>
                <Card.Img variant="top" src={eventRecent.fields.cover_url} />
                <Card.Body>
                  <Card.Title>{Parser(eventRecent.fields.title)}</Card.Title>
                  <Card.Text>
                    <DayJS format="DD-MM-YYYY, HH:mm:ss" className="d-block">
                      {Parser(eventRecent.fields.date_start)}
                    </DayJS>
                    <DayJS format="DD-MM-YYYY, HH:mm:ss" className="d-block">
                      {Parser(eventRecent.fields.date_end)}
                    </DayJS>
                  </Card.Text>
                  <Card.Text>{Parser(eventRecent.fields.lead_text)}</Card.Text>
                  {!isFavorited(eventRecent) ? (
                    <Button
                      variant="outline-danger"
                      onClick={(e) => onAddFavorites(eventRecent, e)}
                    >
                      <FaHeart variant="outline-danger" /> Ajouter
                    </Button>
                  ) : (
                    <></>
                  )}
                  {isFavorited(eventRecent) ? (
                    <Button
                      variant="danger"
                      onClick={(e) => onRemoveFavorites(eventRecent, e)}
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
        </Row>
      </>
    );
  }

  return <Spinner animation="border" role="status"></Spinner>;
};

export default Accueil;
