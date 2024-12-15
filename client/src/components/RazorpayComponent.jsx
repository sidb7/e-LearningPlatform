import { Button } from "flowbite-react";
import React from "react";

const RazorpayPayment = ({totalBill}) => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (totalBill) => {
    const isScriptLoaded = await loadRazorpayScript();

    if (!isScriptLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // Call your backend to create an order
    const response = await fetch("https://localhost:3001/order/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: totalBill,
        currency: "INR"
      }),
    });

    const data = await response.json();

    if (!data.success) {
      alert("Failed to create Razorpay order. Please try again.");
      return;
    }

    const { order } = data;

    // Razorpay options
    const options = {
      key: "rzp_test_9HcXDx2Xhm2RyU", // Replace with your Razorpay key_id
      amount: order.amount, // Amount in paise
      currency: order.currency,
      name: "Your Company Name",
      description: "Test Transaction",
      image: "https://your-logo-url.com/logo.png", // Optional company logo
      order_id: order.id, // Pass the order_id returned by the backend
      handler: async (response) => {
        // Send the payment response to your backend for verification
        const verifyResponse = await fetch(
          "https://localhost:3001/order/verify-payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          }
        );

        const verifyData = await verifyResponse.json();

        if (verifyData.success) {
          alert("Payment successful!");
        } else {
          alert("Payment verification failed. Please try again.");
        }
      },
      prefill: {
        name: "Your Name", // Customer name
        email: "customer@example.com", // Customer email
        contact: "9999999999", // Customer phone
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();

    razorpayInstance.on("payment.failed", (response) => {
      alert(`Payment failed: ${response.error.description}`);
    });
  };

  return (
    <div className="flex w-full">
      <button
        onClick={()=>handlePayment(totalBill)}
        className="bg-violet-500 hover:bg-violet-600 rounded-none w-full  font-semibold p-1.5 text-white"
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default RazorpayPayment;
