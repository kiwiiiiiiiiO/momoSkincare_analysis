import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='maincontainer'>
      <Header />
      <Sidebar />
      <Home />
      <Footer />
    </div>
  ); 
}

export default App;
