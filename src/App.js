// React imports
import { useState } from "react";

//CSS imports
import "./App.css";

// Router-dom imports
import {
  BrowserRouter,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";

// LocalStorage imports
import useLocalStorageState from "use-local-storage-state";

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
  const [event, setEvent] = useState(null);
  const [favorites, setFavorites] = useLocalStorageState("favorites", []);

  //Fonction d'ajout en favoris
  function onAddFavorites(id, e) {
    e.preventDefault();
    setFavorites([...favorites, id]);
    setEvent("");
  }

  //Fonction de retrait des favoris
  function onRemoveFavorites(id, e) {
    e.preventDefault();
    const newFavorites = favorites.filter((index) => index !== id);
    setFavorites(newFavorites);
    setEvent("");
  }

  //Fonction de vérification d'événement dans la liste de favoris
  function isFavorited(id) {
    if (favorites.includes(id)) {
      return true;
    } else {
      return false;
    }
  }
  // localStorage.clear();

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
          <Switch>
            <Route path="/" component={Accueil} exact>
              <Accueil
                isFavorited={isFavorited}
                onAddFavorites={onAddFavorites}
                onRemoveFavorites={onRemoveFavorites}
              ></Accueil>
            </Route>

            {/* Event */}
            <Route path="/event/:id" component={Event} exact>
              <Event
                isFavorited={isFavorited}
                onAddFavorites={onAddFavorites}
                onRemoveFavorites={onRemoveFavorites}
              ></Event>
            </Route>

            {/* Recherche */}
            <Route path="/recherche" component={Recherche} exact>
              <Recherche
                favorites={favorites}
                isFavorited={isFavorited}
                onAddFavorites={onAddFavorites}
                onRemoveFavorites={onRemoveFavorites}
              ></Recherche>
            </Route>

            {/* Favoris */}
            <Route path="/favoris" component={Favoris} exact>
              <Favoris
                favorites={favorites}
                isFavorited={isFavorited}
                onAddFavorites={onAddFavorites}
                onRemoveFavorites={onRemoveFavorites}
              ></Favoris>
            </Route>
            <Redirect to="/" />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
