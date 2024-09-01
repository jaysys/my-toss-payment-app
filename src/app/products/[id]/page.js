import { notFound } from "next/navigation";
import PaymentButton from "@/components/PaymentButton";
import products from "@/data/products";

const ProductPaymentPage = ({ params }) => {
  const productId = parseInt(params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>가격: {product.price}원</p>
      <PaymentButton
        amount={product.price}
        orderId={`order_id_${product.id}`}
        orderName={product.name}
      />
    </div>
  );
};

export default ProductPaymentPage;
