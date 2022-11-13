import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Nextpage } from '../component/nextpage'
import Navbar from '../Components/Navbar'
import Payment from '../Components/Payment'
import HomePage from '../Pages/HomePage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Admin } from '../Pages/Admin'
import { EditCartData } from '../Components/EditAdmindata'
import ResetPassword from '../Pages/ResetPassword'
import SignupPage from '../Pages/SignupPage'
import SigninPage from '../Pages/SigninPage'
import PrivateRoute from '../Auth/PrivateRoutes'
import SignupAdminPage from '../Pages/SigninAdminPage'
import { SigninAdmin } from '../Components/SigninAdmin'
export const MainRoutes = () => {
  return (
    <div>
      <ToastContainer position="top-center" theme="dark"/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<SigninPage/>} />
        <Route path="/adminsignup" element={<SignupAdminPage/>} />
        <Route path="/adminlogin" element={<SigninAdmin/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route path="/editdata/:title" element={<EditCartData/>} /> 
      <Route path="/:category/:id" element={<Nextpage/>} />
      <Route path="/payment" element={<PrivateRoute><Payment/></PrivateRoute>} />
      </Routes>
      
    </div>
  )
}

