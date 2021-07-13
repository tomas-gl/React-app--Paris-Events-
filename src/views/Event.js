// React import
import { useState, useEffect } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col, Spinner, Image } from "react-bootstrap";
import { FaHeart, FaPhone, FaFacebook } from "react-icons/fa/";

function Event() {
  const { id } = useParams();
  const url = `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${id}`;
  const [event, setEvent] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setEvent(response.data);
    });
  }, [url]);
  if (event) {
    console.log(event.record.fields);
  }

  if (event) {
    return (
      <>
        <Row>
          <Col lg={8} xs={12}>
            <div
              className="event-header"
              style={{
                backgroundImage: 'url("' + event.record.fields.cover_url + '"',
              }}
            ></div>
            <p>{event.record.fields.lead_text}</p>
            <p>{event.record.fields.description}</p>
          </Col>
          <Col lg={4} xs={12} className="mt-3 p-4 right-block text-left">
            <Button className="d-block mb-4" variant="outline-danger">
              <FaHeart /> Sauvegarder
            </Button>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Dates :
            </span>
            <p>{event.record.fields.date_description}</p>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              S'y rendre :
            </span>
            <p>
              <span className="d-block" style={{ fontStyle: "italic" }}>
                {event.record.fields.address_name}
              </span>
              <span className="d-block" style={{ fontStyle: "italic" }}>
                {event.record.fields.address_street}
              </span>
              <span className="d-block " style={{ fontStyle: "italic" }}>
                {event.record.fields.address_zipcode}
              </span>
            </p>
            <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              En transports :
            </span>
            <p>
              <span className="d-block" style={{ fontStyle: "italic" }}>
                {event.record.fields.transport}
              </span>
            </p>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Plus d'infos :
            </span>
            <p>
              {event.record.fields.contact_phone ? (
                <span className="d-block">
                  <FaPhone /> : {event.record.fields.contact_phone}
                </span>
              ) : (
                ""
              )}
              {event.record.fields.contact_facebook ? (
                <span className="d-block">
                  <FaFacebook /> :{" "}
                  <a href={event.record.fields.contact_facebook}>
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

  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}

export default Event;
