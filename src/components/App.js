import React from "react";
import Home from "./Home";
import Planets from "./Planets";
import Article from "./Article";
import ContactUs from "./ContactUs";
import Header from "./Header";
import Footer from "./Footer";
import Test1 from "./Test1";
import Test2 from "./Test2";
import {BrowserRouter as Router, Route} from "react-router-dom"



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
      <Route exact path="/article">
        <Article/>
      </Route>
      <Route exact path="/test1">
        <Test1/>
      </Route>
      <Route exact path="/test2">
        <Test2/>
      </Route>
      <Route exact path="/contact-us">
        <ContactUs/>
      </Route>
      <Footer/>
    </Router>
  );
}

export default App;
