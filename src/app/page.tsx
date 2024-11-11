import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { Banner } from "@/components/home/banner";
import Produtos from "./produtos";


export default function Home() {
  return (
    <div>
      <Banner />
      <Produtos />
    </div>
  );
}
