import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import App from "./App";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './pages/Movies'
import Series from './pages/Series'
import About from './pages/About'
import Contact from './pages/Contact'
import Details from './pages/Details'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header/>
      <Routes>
        <Route path='/' Component={App} />
        <Route path="/movies" Component={Movies} />
        <Route path="/series" Component={Series} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/details/:movieid" Component={Details} />
      </Routes>
      <Footer />
    </React.StrictMode>
  </BrowserRouter>
);



