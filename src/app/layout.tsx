import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className="bg-green-200">
          <nav className="flex gap-x-8">
            <Link href={"/"}>トップページ</Link>
            <Link href={"/about"}>アバウトページ</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
