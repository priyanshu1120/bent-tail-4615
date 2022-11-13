import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Nextpage } from '../component/nextpage'
import Navbar from '../Components/Navbar'
import Payment from '../Components/Payment'
import { Admin } from '../Pages/Admin'
import HomePage from '../Pages/HomePage'
import { Signin } from '../Pages/Signin'
import  { Signup } from '../Pages/Signup'

export const MainRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path ="/payment" element={<Payment />} />
        
      <Route path="/:category/:id" element={<Nextpage/>} />
      </Routes>
      
    </div>
  )
}

