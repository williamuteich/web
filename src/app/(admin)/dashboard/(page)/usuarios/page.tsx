import { getServerSession } from "next-auth";
import { auth as authOptions } from "@/lib/auth-config";
import { TodosUsuarios } from "./components/listarUsuarios";

export default async function Usuarios() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.codigoJWT) {
    return <div>Não autorizado</div>;
  }

  const token = session.user.codigoJWT;

  return (
    <div className="w-full px-4 py-4">
      <TodosUsuarios token={token} />
    </div>
  );
}
