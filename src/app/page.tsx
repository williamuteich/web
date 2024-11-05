import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Link href="/cadastro">Cadastro</Link>
      <Link href="/login">Login</Link>
    </div>
  );
}
