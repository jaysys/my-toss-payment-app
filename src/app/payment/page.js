import PaymentButton from "@/components/PaymentButton";

const PaymentPage = () => {
  const amount = 9000; // 결제 금액
  const orderId = "order_id_12345"; // 주문 ID
  const orderName = "바지검정하의"; // 주문 이름

  return (
    <div>
      <h1>결제 페이지</h1>
      <PaymentButton amount={amount} orderId={orderId} orderName={orderName} />
    </div>
  );
};

export default PaymentPage;
