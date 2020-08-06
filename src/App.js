import React from 'react';
import './App.css';
import CardDeck from "./components/CardDeck.js";
import CardDetails from "./components/CardDetails.js";
import ErrorPage from "./components/ErrorPage.js";
import {Switch } from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">FE Test: Modern Website</header>
      <h2><b>Plans & Prices</b></h2>
      <Router>
      <Switch>
      <Route exact path="/" component={CardDeck} />
      <Route path="/CardDetails/:id" component={CardDetails} />
      <Route component={ErrorPage} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
