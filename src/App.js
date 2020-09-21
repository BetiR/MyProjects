import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Scrolltotop from "./components/Scrolltotop.js";
import './App.css';
import Navbar from "./components/Navbar.js";
import Banner from './components/Banner';
import Deck from './components/Deck';
import CardDetails from './components/CardDetails';


export default function App() {
  return (
    <Router>
      <Scrolltotop>
        <div className="App">
          <Navbar/>
          <Banner/>
            <Switch>
              <Route path='/' exact component={Deck} />
//            <Route path='/CardDetails/:id' component={CardDetails} />
          </Switch>
        </div>
      </Scrolltotop>
    </Router>
  );
}