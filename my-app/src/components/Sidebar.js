import React,{useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom'
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons/lib';


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)
  //
  // const[trydata, settrydata] = useState([
  //   {
  //       // 介紹網站
  //       title : '網頁介紹', 
  //       path: '/',
  //       icon: <AiIcons.AiFillHome />,
  //       classname: 'nav-text'
  //   },])
  
  const showSideBar = () => setSidebar(! sidebar)
  // the opposite of 
  return (
    <IconContext.Provider value={{ color: "undifind" }}>
      <div className='sidebar'>
          <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={ showSideBar }/>
          </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active':'nav-menu'} >
        <ul className='navbar-items'>
          <li className='navbar-toggle'>
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
            {SidebarData.map((item, index) => {
              return (
                <li key ={index} className={item.classname}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
        </ul>
      </nav>
    </IconContext.Provider>
  )
}

export default Sidebar
