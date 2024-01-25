import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import CursorShadow from './components/CursorShadow/CursorShadow';

function App() {

  return (
    <>
      
      <Navbar />
      <CursorShadow />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
       </Routes>
      <Footer/>
    </>
  )
}

export default App
