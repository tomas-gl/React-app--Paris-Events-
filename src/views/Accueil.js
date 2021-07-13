// React import
import { useState, useEffect } from "react";

// Router-dom import
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

const Accueil = (props) => {
  const { id } = useParams();
  const url =
    "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/?search=danse&sort=title&?sort=-date_start&rows=15";
  const [event, setEvent] = useState(null);
  // const eventDetails = props.event.records[0].record.fields;

  // Récupération des données
  useEffect(() => {
    axios.get(url).then((response) => {
      setEvent(response.data);
    });
  }, [url]);
  if (event) {
    console.log(event.records[0].record);
  }

  if (event) {
    return (
      <>
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
        <Row>
          <Col lg={3} md={6} xs={12} className="mt-3">
            <NavLink to={'event/' + event.records[0].record.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={event.records[0].record.fields.cover_url}
                />
                <Card.Body>
                  <Card.Title>
                    {event.records[0].record.fields.title}
                  </Card.Title>
                  <Card.Text>
                    {event.records[0].record.fields.date_start}{" "}
                    {event.records[0].record.fields.date_end}
                  </Card.Text>
                  <Card.Text>
                    {event.records[0].record.fields.description}
                  </Card.Text>
                  <Button variant="info">Info</Button>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>
        </Row>
      </>
    );
  }

  return <div></div>;
};

export default Accueil;
