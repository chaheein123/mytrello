import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { LandingPage } from "./pages/LandingPage/landingpage.component";
import MainPage from "./pages/MainPage/mainpage.component";

function App() {

  // console.log(useState(10));
  const [yoyo, mama] = useState(10);
  console.log(yoyo, "this is the yoyo");
  console.log(mama, "This is the mama");


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

