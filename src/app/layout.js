// src/app/layout.js
import "./globals.css"; // 전역 스타일을 불러옵니다.
import Link from "next/link";

export const metadata = {
  title: "My Toss Payment App",
  description: "A Next.js app with Toss Payment integration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/payment">Payment</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 My Toss Payment App</p>
        </footer>
      </body>
    </html>
  );
}
