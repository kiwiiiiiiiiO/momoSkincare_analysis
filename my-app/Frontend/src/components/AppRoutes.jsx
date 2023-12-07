import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Introduction from "../routes/Introduction";
import Skincare from  "../routes/Skincare";
import Cream from "../routes/Cream";

import Essence from  "../routes/Essence";
import Eyecream from "../routes/EyeCream";
import FaceMask from "../routes/FaceMask"; 
import Gel from "../routes/Gel";
import Lotion from "../routes/Lotion"; 
import Toner from "../routes/Toner";
import LipBalm from "../routes/LipBalm";
import Sunscreen from "../routes/Sunscreen"
import ToningCream from "../routes/ToningCream";
import NeckCream from "../routes/NeckCream";


function AppRoutes() {
  return (
      <Routes>
        <Route path='/' element={<Introduction/>}></Route>
        <Route path='/skincare' element={<Skincare />}></Route>
        <Route path='/essence' element={<Essence />}></Route>
        <Route path='/eyecream' element={<Eyecream />}></Route>
        <Route path='/lipbalm' element={<LipBalm />}></Route>
        <Route path='/sunscreen' element={<Sunscreen />}></Route>
        <Route path='/facemask' element={<FaceMask />}></Route>
        <Route path='/gel' element={<Gel />}></Route>
        <Route path='/lotion' element={<Lotion />}></Route>
        <Route path='/toner' element={<Toner />}></Route>
        <Route path='/cream' element={<Cream />}></Route>
        <Route path='/neckcream' element={<NeckCream />}></Route>
        <Route path='/toningcream' element={<ToningCream />}></Route>
      </Routes>
  )
}
export default AppRoutes
