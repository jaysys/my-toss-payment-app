import Link from "next/link";
import products from "@/data/products";

const ProductsPage = () => {
  return (
    <div>
      <h1>상품 목록</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}원
            <Link href={`/products/${product.id}`}>
              <button>결제하기</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
