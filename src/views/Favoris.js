import { useRef, useState, useEffect } from "react";

// Router-dom import
import { Link } from "react-router-dom";

// Axios import
import axios from "axios";

import { Card, Button, Row, Col, Spinner, Form } from "react-bootstrap";
import { FaHeart } from "react-icons/fa/";
import Parser from "html-react-parser";
import DayJS from "react-dayjs";

const Favoris = ({
  favorites,
  onAddFavorites,
  onRemoveFavorites,
  isFavorited,
}) => {
  if (favorites.length > 0) {
    return (
      <>
        <Row>
          <Col xs={12}>
            <h1>Événements sauvegardés</h1>
            <hr />
          </Col>
          {favorites && (
            <>
              {favorites.map((favorites, index) => (
                <Col key={index} lg={3} md={6} xs={12} className="mt-3">
                  <Link
                    to={{
                      pathname: `/event/${favorites.id}`,
                    }}
                    className="event-link"
                  >
                    <Card>
                      <Card.Img
                        variant="top"
                        src={favorites.fields.cover_url}
                      />
                      <Card.Body>
                        <Card.Title>
                          {Parser(favorites.fields.title)}
                        </Card.Title>
                        <Card.Text>
                          <DayJS
                            format="DD-MM-YYYY, HH:mm:ss"
                            className="d-block"
                          >
                            {Parser(favorites.fields.date_start)}
                          </DayJS>
                          <DayJS
                            format="DD-MM-YYYY, HH:mm:ss"
                            className="d-block"
                          >
                            {Parser(favorites.fields.date_end)}
                          </DayJS>
                        </Card.Text>
                        <Card.Text>
                          {Parser(favorites.fields.lead_text)}
                        </Card.Text>
                        {!isFavorited(favorites) ? (
                          <Button
                            variant="outline-danger"
                            onClick={(e) => onAddFavorites(favorites, e)}
                          >
                            <FaHeart variant="outline-danger" /> Ajouter
                          </Button>
                        ) : (
                          <></>
                        )}
                        {isFavorited(favorites) ? (
                          <Button
                            variant="danger"
                            onClick={(e) => onRemoveFavorites(favorites, e)}
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
        </Row>
      </>
    );
  }
  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>Événements sauvegardés</h1>
          <hr />
          <span className="text-start" style={{ fontStyle: "italic" }}>
            Aucun événement sauvegardé.
          </span>
        </Col>
      </Row>
    </>
  );
};

export default Favoris;
