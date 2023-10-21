import React,{useState} from 'react'
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import { SidebarData } from './SidebarData';
import {Menu} from 'antd';
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const navigate = useNavigate()
  // the opposite of 
  return (
    <div className='Sidebar'>
      <IconContext.Provider value={{size:'15px'}}>
          <Menu mode='inline' className='SidebarMenu' onClick={(Item)=>{
            navigate(Item.key)}}>
            <Menu.Item key='/' className='SidebarItem' icon={<AiIcons.AiFillHome />} >網頁介紹</Menu.Item>
            <Menu.Item key='/skincare' className='SidebarItem' icon={<BiIcons.BiHappyHeartEyes/>} >臉部保養</Menu.Item>
            <Menu.SubMenu className='SidebarItem' icon={<BiIcons.BiBookContent />}title='各類別'>
              {
                SidebarData.map((item,index)=>{
                  return(
                    <Menu.Item key={item.key} icon={item.icon} className={item.classname} > {item.label} </Menu.Item>
                  )
                })
              }
            </Menu.SubMenu>
          </Menu>
        </IconContext.Provider>
    </div>
  )
}

export default Sidebar
