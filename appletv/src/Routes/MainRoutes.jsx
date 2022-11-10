import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Admin from '../Pages/Admin'
import HomePage from '../Pages/HomePage'
import  { Signup } from '../Pages/Signup'

const MainRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
      
    </div>
  )
}

export default MainRoutes
