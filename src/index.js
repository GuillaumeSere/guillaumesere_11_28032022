import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import "./styles/index.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Header />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


