import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import Cards from './Components/Cards';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";
import { Character } from './Components/Types';
import Each from './Components/Each';





const App: React.FC<any> = () => {


  return (
    <React.Fragment>
    <Route exact path="/" component={Home} />
    <Route exact path="/characters" component={Cards} />
    <Route exact path="/characters/:id" component={Each} />



</React.Fragment>

    )
}

export default App;
