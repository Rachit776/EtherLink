import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// ================================================== Home & Navbar
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// ================================================== Food
import Food from "./components/Food/Food";
// ================================================== PG
// =================================================== Library
import Lib from "./components/Lib/Lib";
import Applib from "./components/Lib/Applib";
import AppFood from "./components/Food/AppFood";

class App extends React.Component {
  render() {
    return (
        <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Navbar></Navbar>
                <Home></Home>
              </Route>
              <Route path="/library">
                <Lib></Lib>
              </Route>
              <Route path="/food">
                <Food></Food>
              </Route>
              {/* <Route path="/foodiegenie-admin"> */}
                {/* <Navbar></Navbar> */}
                {/* <AppFood></AppFood>
              </Route> */}
              <Route path="/foodiegenie-owner">
                {/* <Navbar></Navbar> */}
                <AppFood></AppFood>
              </Route>
              <Route path="/foodiegenie">
                {/* <Navbar></Navbar> */}
                <AppFood></AppFood>
              </Route>
              <Route path="/foodiegenie-orders">
                {/* <Navbar></Navbar> */}
                <AppFood></AppFood>
              </Route>
              <Route path="/lib-ebook">
                <Applib></Applib>
              </Route>
              <Route path="/lib-notes">
                <Applib></Applib>
              </Route>
              {/* <Route path="/lib">
                <Lib></Lib>
              </Route> */}
              {/* <Route path="/lib-admin">
                <Applib></Applib>
              </Route> */}
              <Route path="/lib-librarian">
                {/* <Navbar></Navbar>
                <Adminl></Adminl> */}
                <Applib></Applib>
              </Route>
              {/* ===================== */}
              <Route path="/admin">
                <Applib></Applib>
                <AppFood></AppFood>
              </Route>
              {/* ==================== */}
            </Switch>
          </Router>
        </div>
    );
  }
}
export default App;
