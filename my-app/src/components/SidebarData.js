import React from 'react'
import * as GiIcons from 'react-icons/gi'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io5'
import * as BiIcons from 'react-icons/bi'
import * as PiIcons from 'react-icons/pi'
import * as BsIcons from "react-icons/bs";
export const SidebarData = [
    {
        // 化妝水 
        label : '化妝水', 
        key: '/toner',
        icon: <IoIcons.IoWaterSharp />,
        classname: 'SidebarItem'
    },
    {
        // 精華液 
        label : '精華液', 
        key: '/essence',
        icon: <AiIcons.AiFillExperiment />,
        classname: 'SidebarItem'
    },
    {
        // 凝膠 
        label : '凝膠', 
        key: '/gel',
        icon: <BsIcons.BsFlower3 />,
        classname: 'SidebarItem'
    },
    {
        // 乳液 
        label : '乳液', 
        key: '/lotion',
        icon: <BsIcons.BsFlower2 />,
        classname: 'SidebarItem'
    },
    {
        // 乳霜 
        label : '乳霜', 
        key: '/cream',
        icon: <BsIcons.BsFlower1 />,
        classname: 'SidebarItem'
    },
    {
        // 面膜
        label : '面膜', 
        key: '/faceMask',
        icon: <PiIcons.PiMaskHappyLight />,
        classname: 'SidebarItem'
    },
    {
        // 眼霜
        label : '眼霜', 
        key: '/eyeCream',
        icon: <AiIcons.AiFillEye />,
        classname: 'SidebarItem'
    },
    {
        // 護唇膏
        label : '護唇膏', 
        key: '/lipBalm',
        icon: <GiIcons.GiLips />,
        classname: 'SidebarItem'
    },
    {
        // 防曬
        label : '防曬', 
        key: '/sunscreen',
        icon: <AiIcons.AiFillHome />,
        classname: 'SidebarItem'
    },
    {
        //  素顏霜
        label : '素顏霜', 
        key: '/toningcream',
        icon: <AiIcons.AiFillHome />,
        classname: 'SidebarItem'
    },
    {
        // 美頸霜
        label : '美頸霜', 
        key: '/neckcream',
        icon: <AiIcons.AiFillHome />,
        classname: 'SidebarItem'
    },
]
