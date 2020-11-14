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
import Admin from "./pages/admin/Admin";

import Dashboard from "./pages/dashboard/Dashboard";
import Registro from "./pages/registro/Registro";
import Checkout from "./pages/checkout/Checkout";
import Devolucao from "./pages/devolucao/Devolucao";
import Termos from "./pages/termos/Termos";
import Politica from "./pages/politica/Politica";

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
          <Route exact path="/admin" component={Admin} />
          
	  <Route exact path="/dashboard" component={Dashboard} />
	  <Route exact path="/registro" component={Registro} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/devolucao" component={Devolucao} />
          <Route exact path="/termos" component={Termos} />
          <Route exact path="/politica" component={Politica} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
