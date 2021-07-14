// React import
import { useState, useEffect } from "react";

// Router-dom import
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";
import { FaHeart } from "react-icons/fa/";

const Accueil = ({ event }) => {
  // const [event, setEvent] = useState(null);
  // let eventDetails;
  // const { id } = useParams();
  // const url =
  //   "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/?search=danse&sort=title&?sort=-date_start&rows=15";
  // const [event, setEvent] = useState(null);
  // const eventDetails = props.event.records[0].record.fields;

  // Récupération des données
  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setEvent(response.data);
  //   });
  // }, [url]);
  // if (event) {
  //   console.log(event.records[0].record);
  // }
  // let eventDetails;
  // eventDetails = event.eventDetails.records[0].record.id;

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
            <div className="text-left">
              <h2>Actualité</h2>
              <p>Le dernier événement publié :</p>
            </div>
          </Col>
          <Col lg={3} md={6} xs={12} className="mt-3">
            <NavLink to={"event/" + event.id}>
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
            </NavLink>
          </Col>
        </Row>
      </>
    );
  }

  return <Spinner animation="border" role="status"></Spinner>;
};

export default Accueil;
