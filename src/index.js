import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import "./styles/index.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import House from './pages/House';
import About from "./pages/About";


ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Header />
      <Routes>
            <Route path="/guillaumesere_11_28032022/" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="*" element={<Error/>} />
            <Route path="housing/:id/*" element={<House/>} />
      </Routes>
      <Footer />   
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


