import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Food from "./components/Food/Food";
import Lib from "./components/Lib/Lib";
import Applib from "./components/Lib/Applib";
import AppFood from "./components/Food/AppFood";

const App = () => {
  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>

          <Route path="/library" component={Lib} />
          <Route path="/food" component={Food} />

          <Route path="/foodiegenie-owner" component={AppFood} />
          <Route path="/foodiegenie" component={AppFood} />
          <Route path="/foodiegenie-orders" component={AppFood} />

          <Route path="/lib-ebook" component={Applib} />
          <Route path="/lib-notes" component={Applib} />
          <Route path="/lib-librarian" component={Applib} />

          <Route path="/admin">
            <Applib />
            <AppFood />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
