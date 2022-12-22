import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import logo from "../../Assets/Img/mytv.jpg";

import swal from "sweetalert";
export default function Payments({ price, label }) {
  const Razorpay = useRazorpay();
  const handlePayment = useCallback(async () => {
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
  }, [Razorpay]);
  return (
    <div className="App">
      <button
        onClick={() => {
          handlePayment();
        }}
      >
        Start Free Trial
      </button>
    </div>
  );
}
