import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import logo from "../Img/mytv.jpg";

export default function Payment({ price, label }) {
  const Razorpay = useRazorpay();

  const handlePayment = useCallback(async () => {
    const order = {
      //   amount: 500,
      currency: "INR",
      receipt: "qwsaq1",
    };

    const options = {
      key: "rzp_test_qho4K1vu3eyRqY",
      amount: price * 100,
      currency: "INR",
      name: "MY TV+ Subscription",
      description: "Test Transaction",
      image: logo,
      order_id: order.id,
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "John Doe",
        email: "youremail@example.com",
        contact: "912345678",
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

  return (
    <div className="App">
      <button
        style={{
          width: "200px",
          height: "50px",
          padding: "10px",
          textAlign: "center",
          border: "1px solid blue",
          backgroundColor: "skyblue",
          fontSize: "17px",
          color: "white",
        }}
        onClick={handlePayment}
      >
        {label}
      </button>
    </div>
  );
}
