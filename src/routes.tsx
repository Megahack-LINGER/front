//---- Packages
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//---- Screens
import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";
import Login from "./pages/auth/login/Login";
import Cadastro from "./pages/auth/cadastro/Cadastro";
import Person from "./pages/person/Person";
import About from "./pages/about/About";
import Busca from "./pages/busca/Busca";

//---- Models
import Footer from "./pages/models/footer/Footer";
import Nav from "./pages/models/nav/Nav";

export default function Routes() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contato} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/person" component={Person} />
          <Route exact path="/about" component={About} />
          <Route exact path="/busca" component={Busca} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
