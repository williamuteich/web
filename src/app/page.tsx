import { Banner } from "@/components/home/banner";
import Produtos from "./(pages)/produtos";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

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
