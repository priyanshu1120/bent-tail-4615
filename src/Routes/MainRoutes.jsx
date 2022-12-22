import React, {} from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from '../Components/Navbar'
import HomePage from '../Pages/HomePage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Admin } from '../Pages/Admin'
import { EditCartData } from '../Components/EditAdmindata'
import ResetPassword from '../Pages/ResetPassword'
import SignupPage from '../Pages/SignupPage'
import SigninPage from '../Pages/SigninPage'
import Payments from '../Components/Payment/Payment'
import PrivateRoute from '../Auth/PrivateRoutes'
import SignupAdminPage from '../Pages/SignupAdminPage'
import WrongRoute from '../Components/WrongRoute'
import SigninAdminPage from '../Pages/SignInAdmin.jsx'
import { Nextpage } from '../Pages/Nextpage';

export const MainRoutes = () => {
  return (
    <div>
      <ToastContainer position="top-center" theme="dark" />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<SigninPage/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/adminlogin" element={<SigninAdminPage/>} />
        <Route path="/adminsignup" element={<SignupAdminPage/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route path="/:displayName/:id/:title/edit" element={<EditCartData/>} /> 
        <Route path="/:category/:id/:title/movie" element={<Nextpage/>} />
      <Route path="/payment" element={<PrivateRoute><Payments/></PrivateRoute>} />
      <Route path="*" element={<WrongRoute/>} />
      </Routes>
    </div>
  );
};
