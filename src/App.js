import React from 'react';
import './App.css';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { LandingPage } from "./pages/LandingPage/landingpage.component";
import MainPage from "./pages/MainPage/mainpage.component";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/main" component={MainPage} />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;

