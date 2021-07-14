import { useLocation, useParams } from "react-router-dom";
import { Card, Button, Row, Col, Spinner, Image } from "react-bootstrap";
import { FaHeart, FaPhone, FaFacebook } from "react-icons/fa/";

const Event = ({ event }) => {
  const { state } = useLocation();
  console.log(state.eventDetails.fields);

  if (event) {
    return (
      <>
        <Row>
          <Col lg={8} xs={12}>
            <div
              className="event-header"
              style={{
                backgroundImage:
                  'url("' + state.eventDetails.fields.cover_url + '"',
              }}
            ></div>
            <p>{state.eventDetails.fields.lead_text}</p>
            <p>{state.eventDetails.fields.description}</p>
          </Col>
          <Col
            lg={4}
            xs={12}
            className="mt-3 mt-lg-0 p-4 right-block text-left"
          >
            <Button className="d-block mb-4" variant="outline-danger">
              <FaHeart /> Sauvegarder
            </Button>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Dates :
            </span>
            <p>{state.eventDetails.fields.date_description}</p>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              S'y rendre :
            </span>
            <p>
              <span className="d-block" style={{ fontStyle: "italic" }}>
                {state.eventDetails.fields.address_name}
              </span>
              <span className="d-block" style={{ fontStyle: "italic" }}>
                {state.eventDetails.fields.address_street}
              </span>
              <span className="d-block " style={{ fontStyle: "italic" }}>
                {state.eventDetails.fields.address_zipcode}
              </span>
            </p>
            <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              En transports :
            </span>
            <p>
              <span className="d-block" style={{ fontStyle: "italic" }}>
                {state.eventDetails.fields.transport}
              </span>
            </p>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              Plus d'infos :
            </span>
            <p>
              {state.eventDetails.fields.contact_phone ? (
                <span className="d-block">
                  <FaPhone /> : {state.eventDetails.fields.contact_phone}
                </span>
              ) : (
                ""
              )}
              {state.eventDetails.fields.contact_facebook ? (
                <span className="d-block">
                  <FaFacebook /> :{" "}
                  <a href={state.eventDetails.fields.contact_facebook}>
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
