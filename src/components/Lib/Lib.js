import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Display from "./Display";

export default function Lib() {
  return (
    <>
      <Router>
        <Switch>
          {/* ========================================= Students (View Books) ========================================= */}
          <Route path="/library">
            <Navbar></Navbar>
            <Display></Display>
          </Route>

          {/* ========================================= Students (View Books) ========================================= */}
          {/* <Route path="/lib">
            <Navbar></Navbar>
            <DisplayStudent></DisplayStudent>
          </Route> */}
        </Switch>
      </Router>
      {/* <Navbar></Navbar>
      <Display></Display> */}
    </>
  );
}
