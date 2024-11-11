import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
