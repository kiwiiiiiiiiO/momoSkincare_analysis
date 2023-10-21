import React from 'react'
import { Image } from 'antd';
import MomoIcon from '../image/momoIcon.png'
import { Typography } from "antd";
const { Title } = Typography;
const ImageStyle={
  width:'40px',
  height:'40px'
}
const TitleStyle ={
  marginLeft:'15px'
}
const Header = () => {
  return (
    <div className='Header'>
      <Image  preview="false"  style={ImageStyle}  src={MomoIcon}></Image>
      <Title level={2} style={TitleStyle}> MomoSkincare </Title>
    </div>
  )
   
}

export default Header
