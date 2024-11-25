import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Contatos Não Respondidos</h2>
            <div className="flex justify-end items-end mb-6 gap-6">
                <div>
                    <Label htmlFor="filtro" className="text-sm font-medium text-gray-700">
                        Filtro
                    </Label>
                    <Input
                        id="filtro"
                        name="filtro"
                        type="text"
                        placeholder="Procurar"
                        className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>
            <ListarFormularios token={token} />
        </div>
    );
}
