import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { Banner } from "@/components/home/banner";
import Produtos from "@/components/home/produtos";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Produtos />
      <Footer />
    </div>
  );
}
