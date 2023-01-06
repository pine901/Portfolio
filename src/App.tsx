import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './assets/css/bootstrap.css';
import './assets/css/responsive.css';

import Layout from './component/layout/layout';

import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import PageNotFound from './pages/page_not_found/page_not_found';
// require('dotenv').config();

// import WebContext from './context';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element=<PageNotFound /> />
        <Route path="/" element=<Home /> />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
