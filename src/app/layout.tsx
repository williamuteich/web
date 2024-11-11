import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Loja virtual Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
      className="bg-gray-100"
      >
         <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
