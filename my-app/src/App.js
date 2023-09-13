import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className='maincontainer'>
      <Header />
        <h1> In 專題介紹頁(主頁)</h1>
      <Footer />
    </div>
  ); 
}

export default App;
