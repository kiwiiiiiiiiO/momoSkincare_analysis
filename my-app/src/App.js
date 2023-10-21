import './App.css';
import React from 'react';
import {Space} from 'antd'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from './components/Content';
import Sidebar from './components/Sidebar'
//  layout 
function App() {
  return (
    <div className='App'>
      <Header />
      <Space className='MainPage' direction="horizontal">
        <Sidebar></Sidebar>
        <Content></Content>
      </Space>
      <Footer />
    </div>
  ); 
}

export default App;
