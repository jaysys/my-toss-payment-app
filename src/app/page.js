import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>홈 페이지</h1>
      <Link href="/payment">결제 페이지로 이동</Link>
      <br />
      <Link href="/products">상품 목록으로 이동</Link>
    </div>
  );
}
