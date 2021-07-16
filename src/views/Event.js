// React imports
import { useState, useEffect } from "react";

// Axios imports
import axios from "axios";

import { useParams } from "react-router-dom";

// Bootstrap/Icons imports
import { Button, Row, Col, Spinner } from "react-bootstrap";
import { FaHeart, FaPhone, FaFacebook } from "react-icons/fa/";

//Data formatting imports
import Parser from "html-react-parser";

const Event = ({ onAddFavorites, onRemoveFavorites, isFavorited }) => {
  const { id } = useParams();
  const url = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${id}`;
  const [event, setEvent] = useState(null);

  let eventDetails = null;

  // Récupération des données
  useEffect(() => {
    axios.get(url).then((response) => {
      setEvent(response.data);
    });
  }, [url]);
  if (event) {
    eventDetails = event.record;
    console.log(eventDetails);
  }

  if (event) {
    return (
      <>
        <Row>
          <Col lg={8} xs={12}>
            <div
              className="event-header"
              style={{
                backgroundImage: 'url("' + eventDetails.fields.cover_url + '"',
              }}
            ></div>
            <p>{Parser(eventDetails.fields.lead_text)}</p>
            <p>{Parser(eventDetails.fields.description)}</p>
          </Col>
          <Col lg={4} xs={12} className="mt-3 p-4 right-block text-left">
            {!isFavorited(eventDetails) ? (
              <Button
                className="d-block"
                variant="outline-danger"
                onClick={(e) => onAddFavorites(eventDetails, e)}
              >
                <FaHeart variant="outline-danger" /> Ajouter
              </Button>
            ) : (
              <></>
            )}
            {isFavorited(eventDetails) ? (
              <Button
                className="d-block"
                variant="danger"
                onClick={(e) => onRemoveFavorites(eventDetails, e)}
              >
                <FaHeart /> Retirer
              </Button>
            ) : (
              <></>
            )}
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Dates :
            </span>
            <p>{Parser(eventDetails.fields.date_description)}</p>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              S'y rendre :
            </span>
            <p>
              <span className="d-block" style={{ fontStyle: "italic" }}>
                {Parser(eventDetails.fields.address_name)}
              </span>
              <span className="d-block" style={{ fontStyle: "italic" }}>
                {Parser(eventDetails.fields.address_street)}
              </span>
              <span className="d-block " style={{ fontStyle: "italic" }}>
                {Parser(eventDetails.fields.address_zipcode)}
              </span>
            </p>
            <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              En transports :
            </span>
            <p>
              <span className="d-block" style={{ fontStyle: "italic" }}>
                {Parser(eventDetails.fields.transport)}
              </span>
            </p>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Plus d'infos :
            </span>
            <p>
              {event.record.fields.contact_phone ? (
                <span className="d-block">
                  <FaPhone /> : {eventDetails.fields.contact_phone}
                </span>
              ) : (
                ""
              )}
              {eventDetails.fields.contact_facebook ? (
                <span className="d-block">
                  <FaFacebook /> :{" "}
                  <a href={eventDetails.fields.contact_facebook}>
                    Page Facebook
                  </a>
                </span>
              ) : (
                ""
              )}
            </p>
          </Col>
        </Row>
      </>
    );
  }

  return <Spinner animation="border" role="status"></Spinner>;
};

export default Event;
