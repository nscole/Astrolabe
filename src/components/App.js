import React from "react";
import Home from "./Home";
import Planets from "./Planets";
import Articles from "./Articles";
import Header from "./Header";
import Footer from "./Footer";
import BlogPage from "./BlogPage";
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
      <Route exact path="/articles">
        <Articles/>
      </Route>
      <Route exact path="/blogpage">
        <BlogPage/>
      </Route>
      <Footer/>
    </Router>
  );
}

export default App;
