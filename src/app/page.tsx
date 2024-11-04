import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/cadastro">Cadastro</Link>
      <Link href="/login">Login</Link>
    </div>
  );
}
