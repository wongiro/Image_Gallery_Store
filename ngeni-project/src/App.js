import React from 'react';
import Login from './components/login';
// import SignUp from './components/signUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignUp from './components/signup';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <header className="App-header">
        <Login />
      </header> */}
    </div>
    
  );
}

export default App;
