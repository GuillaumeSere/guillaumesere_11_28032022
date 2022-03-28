import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import "./styles/index.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/Home';


ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Header />
      <Routes>
            <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />   
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


