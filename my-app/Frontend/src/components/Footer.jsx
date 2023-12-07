import React from 'react'
import { Typography } from "antd";
import { GithubOutlined } from '@ant-design/icons';
const { Text, Link } = Typography;

const IconStyle ={
  fontSize:'20px', 
  marginLeft:'10px',
}
function Footer () {
  return (
    <div className='Footer'>
        <Text> Created by Jennifer Ou</Text>
        <Link href='https://github.com/kiwiiiiiiiiO/momoSkincare_analysis'>  <GithubOutlined style={IconStyle}/> </Link>
    </div>
  )
}

export default Footer
