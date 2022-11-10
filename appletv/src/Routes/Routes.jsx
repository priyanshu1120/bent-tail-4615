import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Carausel } from '../component/carausel'
import { Future } from '../component/furure'
import { Nextpage } from '../component/nextpage'

export const Routing = () => {
  return (


    <div>
        <Routes>
            <Route path="/" element={<Future/>} ></Route>
         <Route path="/:id" element={<Nextpage/>} ></Route>

        </Routes>
    </div>
  )
}
