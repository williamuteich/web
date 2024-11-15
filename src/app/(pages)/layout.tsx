import type { Metadata } from "next";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "QuickShare",
  description: "Loja virtual Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <div>
        <Header />
        {children}
        <Footer />
    </div>
      
  );
}
