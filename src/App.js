// React import
import { useState, useEffect } from "react";

//CSS import
import "./App.css";

// Router-dom import
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";

// Axios import
import axios from "axios";

// Views imports
import Accueil from "./views/Accueil";
import Recherche from "./views/Recherche";
import Favoris from "./views/Favoris";
import Event from "./views/Event";

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

function App() {
  const [setEvents] = useState([]);
  const url =
    "https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/?search=danse&sort=title&?sort=-date_start&rows=15";
  const [event, setEvent] = useState(null);
  // const eventDetails = props.event.records[0].record.fields;
  let eventDetails;

  // Récupération des données
  useEffect(() => {
    axios.get(url).then((response) => {
      setEvent(response.data);
    });
  }, [url]);
  if (event) {
    console.log(event.records[0].record);
    eventDetails = event.records[0].record;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <header className="mb-5">
            <Navbar bg="dark" variant="dark">
              <NavLink
                className="nav-link"
                activeStyle={{ color: "cyan" }}
                to="/"
                exact
              >
                Accueil
              </NavLink>
              <NavLink
                className="nav-link"
                activeStyle={{ color: "cyan" }}
                to="/recherche"
                exact
              >
                Liste des événements
              </NavLink>
              <NavLink
                className="nav-link"
                activeStyle={{ color: "cyan" }}
                to="/favoris"
                exact
              >
                Favoris
              </NavLink>
            </Navbar>
          </header>

          {/* Accueil */}
          <Route path="/" component={Accueil} exact>
            <Accueil event={eventDetails}></Accueil>
          </Route>

          {/* Event */}
          <Route path="/event/:id" component={Event} exact />

          {/* Recherche */}
          <Route path="/recherche" component={Recherche} exact />

          {/* Favoris */}
          <Route path="/favoris" component={Favoris} exact />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
