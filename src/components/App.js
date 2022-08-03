import React from "react";
import Home from "./Home";
import Planets from "./Planets";
import ContactUs from "./ContactUs";
import Header from "./Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"



function App() {
  return (
    <Router>
    <Header/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/planets">
        <Planets/>
      </Route>
      <Route exact path="/contact-us">
        <ContactUs/>
      </Route>
    </Router>
  );
}

export default App;
