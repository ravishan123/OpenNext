import React from "react";

const btn = () => {
  const payment_object = {
    sandbox: true,
    preapprove: false,
    merchant_id: "1226086", // Replace your Merchant ID
    merchantSecret: "MjQ3MTc1MDQ2OTMxNzAyMDA1MjAzNTE4MTkyODk5OTgyNzg1MDQy",
    return_url: "https://open-next.netlify.app/", // Important
    cancel_url: "https://open-next.netlify.app/", // Important
    notify_url: "https://open-next.netlify.app/",
    order_id: "as12345",
    items: "Door bell wireles",
    amount: "1000.00",
    currency: "LKR",
    first_name: "Saman",
    last_name: "Perera",
    email: "samanp@gmail.com",
    phone: "0771234567",
    address: "No.1, Galle Road",
    city: "Colombo",
    country: "Sri Lanka",
    delivery_address: "No. 46, Galle road, Kalutara South",
    delivery_city: "Kalutara",
    delivery_country: "Sri Lanka",
    custom_1: "",
    custom_2: "",
    // hash: Pay.hash,
  };

  window.payhere.startPayment(payment_object);

  window.payhere.onCompleted = function onCompleted(orderId) {
    console.log("Payment completed. OrderID:" + orderId);
    alert("New Payhere payment: OrderID: " + orderId);
    //Note: validate the payment and show success or failure page to the customer
  };

  // Called when user closes the payment without completing
  window.payhere.onDismissed = function onDismissed() {
    //Note: Prompt user to pay again or show an error page
    console.log("Payment dismissed");
  };

  // Called when error happens when initializing payment such as invalid parameters
  window.payhere.onError = function onError(error) {
    // Note: show an error page
    console.log("Error:" + error);
  };
};

const Button = ({ styles, onClick }) => (
  <button
    type="button"
    onClick={() => {
      // window.payhere.startPayment(payment_object);
      btn();
    }}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
