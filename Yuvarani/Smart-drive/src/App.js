import React from 'react';
import './App.css';
import Login from './Login';
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/home' Component={Home} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
