import './index.scss'

import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Cardinfo from './pages/cardinfo';
import Perguntas from './pages/perguntas'
import Respostas from './pages/respostas';
import Login from './pages/login';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/info' element={<Cardinfo/>} />
        <Route path='/perguntas' element={<Perguntas/>} />
        <Route path='/respostas' element={<Respostas/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


