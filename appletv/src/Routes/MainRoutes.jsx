import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import HomePage from '../Pages/HomePage'
import Signin from '../Pages/Signin'

const MainRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
      
    </div>
  )
}

export default MainRoutes
