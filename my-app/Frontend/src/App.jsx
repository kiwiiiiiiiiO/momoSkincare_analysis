// import React, { useEffect, useState } from 'react'
import './App.css';
import {Space} from 'antd';
import Header from "./components/Header";
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   fetch('localhost:8081/products')
  //   .then (res => res.json())
  //   .then(data => setData(data))
  //   .catch(err => console.log(err));
  // })

  // layout
  return (
    <div className='App'>
      <div className='grid-container'>
      </div>
      
      <Header />
      <Space className='MainPage' direction="horizontal">
        <Sidebar></Sidebar>
        <Content></Content>
      </Space>
  
    </div>
  )
}

export default App


