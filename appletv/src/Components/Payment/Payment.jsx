import { useCallback, useState, useEffect } from "react";
import useRazorpay from "react-razorpay";
import logo from "../../Img/mytv.jpg";
import SuccessAlert from "./SuccessAlert";

export default function Payment({ price, label }) {
  const Razorpay = useRazorpay();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    handlePayment();
  }, []);

  const handlePayment = useCallback(async () => {
    const order = {
      //   amount: 500,
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
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
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
  }, [Razorpay]);
  console.log(success);
  return <div className="App">{success ? <SuccessAlert /> : null}</div>;
}
