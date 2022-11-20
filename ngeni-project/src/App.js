
import React from 'react';
import Login from './components/login';
// import SignUp from './components/signUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import SignUp from './components/signup';
import Reset from './components/reset';
import Gallery from './components/gallery';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/reset" element={<Reset />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
