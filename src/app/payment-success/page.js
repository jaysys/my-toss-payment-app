"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const paymentKey = searchParams.get("paymentKey");
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");

  useEffect(() => {
    if (paymentKey && orderId && amount) {
      fetch("/api/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentKey, orderId, amount }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            alert("결제 검증 실패: " + data.message);
          } else {
            alert("결제 검증 성공");
          }
        });
    }
  }, [paymentKey, orderId, amount]);

  return (
    <div>
      <h1>결제가 성공적으로 완료되었습니다.</h1>
    </div>
  );
};

export default PaymentSuccess;
