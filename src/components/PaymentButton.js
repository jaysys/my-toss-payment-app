"use client";

import { loadTossPayments } from "@tosspayments/payment-sdk";

const PaymentButton = ({ amount, orderId, orderName }) => {
  const handlePayment = async () => {
    const tossPayments = await loadTossPayments(
      process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY
    );

    tossPayments.requestPayment("카드", {
      amount: amount,
      orderId: orderId,
      orderName: orderName,
      successUrl: `${window.location.origin}/payment-success`,
      failUrl: `${window.location.origin}/payment-fail`,
    });
  };

  return <button onClick={handlePayment}>결제하기</button>;
};

export default PaymentButton;
