import React from 'react'
import * as GiIcons from 'react-icons/gi'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io5'
import * as BiIcons from 'react-icons/bi'
import * as PiIcons from 'react-icons/pi'
import * as BsIcons from "react-icons/bs";
export const SidebarData = [
    {
        // 介紹網站
        title : '網頁介紹', 
        path: '/',
        icon: <AiIcons.AiFillHome />,
        classname: 'nav-text'
    },
    {
        // Skincare
        title : '臉部保養', 
        path: '/skincare',
        icon: < BiIcons.BiHappyHeartEyes/>,
        classname: 'nav-text'
    },
    {
        // 化妝水 
        title : '化妝水', 
        path: '/toner',
        icon: <IoIcons.IoWaterSharp />,
        classname: 'nav-text'
    },
    {
        // 精華液 
        title : '精華液', 
        path: '/essence',
        icon: <AiIcons.AiFillExperiment />,
        classname: 'nav-text'
    },
    {
        // 凝膠 
        title : '凝膠', 
        path: '/gel',
        icon: <BsIcons.BsFlower3 />,
        classname: 'nav-text'
    },
    {
        // 乳液 
        title : '乳液', 
        path: '/lotion',
        icon: <BsIcons.BsFlower2 />,
        classname: 'nav-text'
    },
    {
        // 乳霜 
        title : '乳霜', 
        path: '/cream',
        icon: <BsIcons.BsFlower1 />,
        classname: 'nav-text'
    },
    {
        // 面膜
        title : '面膜', 
        path: '/faceMask',
        icon: <PiIcons.PiMaskHappyLight />,
        classname: 'nav-text'
    },
    {
        // 眼霜
        title : '眼霜', 
        path: '/eyeCream',
        icon: <AiIcons.AiFillEye />,
        classname: 'nav-text'
    },
    {
        // 護唇膏
        title : '護唇膏', 
        path: '/lipBalm',
        icon: <GiIcons.GiLips />,
        classname: 'nav-text'
    },
    {
        // 防曬
        title : '防曬', 
        path: '/sunscreen',
        icon: <AiIcons.AiFillHome />,
        classname: 'nav-text'
    },
    {
        //  素顏霜
        title : '素顏霜', 
        path: '/toningcream',
        icon: <AiIcons.AiFillHome />,
        classname: 'nav-text'
    },
    {
        // 美頸霜
        title : '美頸霜', 
        path: '/ ',
        icon: <AiIcons.AiFillHome />,
        classname: 'nav-text'
    },
]
