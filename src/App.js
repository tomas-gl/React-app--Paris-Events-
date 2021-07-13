// import logo from './logo.svg';
import "./App.css";

// Router-dom import
import { BrowserRouter, Route, NavLink } from "react-router-dom";

// Views imports
import Accueil from "./views/Accueil";
import Recherche from "./views/Recherche";
import Favoris from "./views/Favoris";

// Bootstrap imports
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <header className="mb-5">
            <Navbar bg="dark" variant="dark">
              <NavLink className="nav-link" activeStyle={{ color: 'cyan' }} to="/" exact>
                Accueil
              </NavLink>
              <NavLink className="nav-link" activeStyle={{ color: 'cyan' }} to="/recherche" exact>
                Recherche
              </NavLink>
              <NavLink className="nav-link" activeStyle={{ color: 'cyan' }} to="/favoris" exact>
                Favoris
              </NavLink>
            </Navbar>
          </header>

          {/* Accueil */}
          <Route path="/" component={Accueil} exact />

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
