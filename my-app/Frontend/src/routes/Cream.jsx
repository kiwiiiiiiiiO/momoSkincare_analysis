import React from 'react'
import {useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'

// 乳霜
const Cream = () => {
  const [cream, setCream] = useState([])
  useEffect(() =>{
    const fetchAllCream = async() =>{
      try{
        const res = await axios.get("http://localhost:3000/skincare")
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }
  })
  return (
    <div className='Cream'>
        <h1>Creameee</h1>
    </div>
  )
}

export default Cream
