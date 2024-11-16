import { getServerSession } from "next-auth";
import { auth as authOptions } from "@/lib/auth-config";

interface User {
  name: string | null
  email: string | null;
  role: string | null;
  codigoJWT?: string
}

interface Session {
  user?: User;
}

export default async function Dashboard() {
  const session = await getServerSession(authOptions) as Session;

  
  return (
    <div>
      <h1 className="text-2xl font-bold">Bem-vindo ao Dashboard, {session?.user?.name || null}!</h1>
      
      <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Resumo</h2>
        <p>Algumas estatísticas e informações do painel...</p>
      </div>
    </div>
  );
}
