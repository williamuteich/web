import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/providers/auth-provider";

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
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
