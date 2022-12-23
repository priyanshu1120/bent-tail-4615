import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import logo from "../../Assets/Img/mytv.jpg";

import swal from "sweetalert";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { UserAuth } from "../../Utils/firebase";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate()
  const [auth,setAuth] =useState(false);
  useEffect(()=>{
    onAuthStateChanged(UserAuth, (user) => {
      if (user) {
        setAuth(true)
  
      } else {
        setAuth(false)
      }
    });
  },[])

  const handleNavigate = ()=>{
       navigate("/login")
  }

  const Razorpay = useRazorpay();
  const handlePayment = async () => {
    const order = {
      currency: "INR",
      receipt: "qwsaq1",
    };

    const options = {
      key: "rzp_test_qho4K1vu3eyRqY",
      amount: 560 * 100,
      currency: "INR",
      name: "MY TV+ Subscription",
      description: "Test Transaction",
      image: logo,
      order_id: order.id,
      handler: (res) => {
        swal({
          title: "Payment Successful",
          text: "Enjoy MY TV+ for 30 days",
          icon: "success",
        });
      },
      prefill: {
        name: "John Doe",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#0D0D0D",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  };
 return  (
     <>
     {
      auth?<button onClick= {()=>handlePayment()}>Start Free Trial</button>
      :<button onClick= {handleNavigate}>Start Free Trial</button>
     }
     </>
 )
}
