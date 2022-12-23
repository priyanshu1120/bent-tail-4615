import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {} from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { UserAuth } from '../Utils/firebase'
import Payments from '../Components/Payment/Payment'


const PrivateRoute = ({children}) => {
  const [auth,setAuth] =useState(false);
  const [userEmail,setUserEmail]=useState('')
  useEffect(()=>{
    onAuthStateChanged(UserAuth, (user) => {
      if (user) {
        setAuth(true)
        setUserEmail(user.email)
      } else {
        setAuth(false)
      }
    });
  },[])
  
    const location =useLocation();
  
    if(!auth){
       return  <Navigate to="/signup" replace state={{data:location.pathname}}/>
    }
  return <Navigate to="/Payment" />
}

export default PrivateRoute