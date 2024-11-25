import { getServerSession } from "next-auth";
import { auth as authOptions } from "@/lib/auth-config";
import { ListarFormularios } from "./components/listarFormularios";

export default async function Contatos() {

    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.codigoJWT) {
      return <div>Não autorizado</div>;
    }
  
    const token = session.user.codigoJWT;

    return (
        <div className="w-full px-4 py-6">
            <ListarFormularios token={token} />
        </div>
    );
}
