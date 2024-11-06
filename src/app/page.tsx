import Header from "@/components/header";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Header />
      <Link href="/cadastro">Cadastro</Link>
      <Link href="/login">Login</Link>
    </div>
  );
}
