// import logo from './logo.svg';
import "./App.css";

import { BrowserRouter, Route, NavLink } from "react-router-dom";

import Accueil from "./views/Accueil";
import Recherche from "./views/Recherche";
import Favoris from "./views/Favoris";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Mon application</h1>
          <NavLink to="/" exact>
            Accueil
          </NavLink>
          <NavLink to="/recherche" exact>
            Recherche
          </NavLink>
          <NavLink to="/favoris" exact>
            Favoris
          </NavLink>
        </header>

        {/* Accueil */}
        <Route path="/" component={Accueil} exact />

        {/* Recherche */}
        <Route path="/recherche" component={Recherche} exact />

        {/* Favoris */}
        <Route path="/favoris" component={Favoris} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
