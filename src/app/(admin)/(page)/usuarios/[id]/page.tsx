import { getServerSession } from "next-auth";
import { auth as authOptions } from "@/lib/auth-config";
import { DadosUsuario, Endereco } from "../../../../../../types/typeUserSession";
import { Input } from "@/components/ui/input"; // Supondo que você tenha um componente customizado para Input

export default async function ListaUsuario({
  params
}: {
  params: Promise<{ id: number }> ;
}) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.codigoJWT) {
    return <div>Não autorizado</div>;
  }

  let data: { message: string; user: DadosUsuario } | null = null;
  const userID = (await params).id;
  const token = session.user.codigoJWT;

  try {
    const response = await fetch(`http://localhost:3001/lista-usuario?id=${userID}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (response.ok) {
      data = await response.json();
    }
  } catch (err) {
    console.log(err);
  }

  const usuario = data?.user;
  if (!usuario) {
    return <div>Usuário não encontrado.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6 bg-white shadow-sm rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Atualizar Dados do Usuário</h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
            <Input 
              id="name" 
              type="text" 
              placeholder="Nome Completo" 
              defaultValue={usuario.name} 
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="E-mail" 
              defaultValue={usuario.email} 
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div>
            <label htmlFor="permissao" className="block text-sm font-medium text-gray-700">Permissão</label>
            <select 
              id="permissao" 
              defaultValue={usuario.permissao?.id.toString()} 
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="1">Administrador</option>
              <option value="2">Usuário</option>
              <option value="3">Visitante</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">Endereço</label>
            <Input 
              id="endereco" 
              type="text" 
              placeholder="Endereço Completo" 
              defaultValue={usuario.endereco.length > 0 ? usuario.endereco[0]?.logradouro : ''} 
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">Cidade</label>
            <Input 
              id="cidade" 
              type="text" 
              placeholder="Cidade" 
              defaultValue={usuario.endereco.length > 0 ? usuario.endereco[0]?.cidade : ''} 
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="estado" className="block text-sm font-medium text-gray-700">Estado</label>
            <Input 
              id="estado" 
              type="text" 
              placeholder="Estado" 
              defaultValue={usuario.endereco.length > 0 ? usuario.endereco[0]?.estado : ''} 
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="cep" className="block text-sm font-medium text-gray-700">CEP</label>
            <Input 
              id="cep" 
              type="text" 
              placeholder="CEP" 
              defaultValue={usuario.endereco.length > 0 ? usuario.endereco[0]?.cep : ''} 
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
        <button 
            type="submit" 
            className="px-4 py-1 bg-blue-600 text-white rounded-md 
                        border border-transparent 
                        hover:bg-white hover:text-slate-900 hover:border-slate-900 
                        focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 
                        focus:bg-white focus:text-slate-900 focus:border-slate-900 
                        transition duration-300 ease-in-out"
            >
            Atualizar
        </button>
        </div>
      </form>
    </div>
  );
}
