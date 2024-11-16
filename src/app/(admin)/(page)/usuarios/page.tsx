import { getServerSession } from "next-auth";
import { auth as authOptions } from "@/lib/auth-config";

interface Permissao {
    id: number;
    nome: string;
    userId: number;
  }
  
  interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    permissao: Permissao;
    endereco: any[];  
    emailVerified: boolean;
  }

export default async function Usuarios() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !session.user.codigoJWT) {
        return <div>Não autorizado</div>;
    }

    const token = session.user.codigoJWT;

    try {
        const response = await fetch(`${process.env.NEXT_API}/listar-usuarios`, { next: { revalidate: 15 }, 
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        });

        if (!response.ok) {
        throw new Error('Erro ao fazer a requisição para listar os usuários');
        }

        const data = await response.json();
        const users = data.users;

    return (
      <div className="w-full px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Usuários</h2>
        
        <div className="overflow-x-auto w-full bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-700 text-left text-sm font-medium text-white">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Nome</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Cargo</th>
                <th className="px-4 pr-20 py-2 text-end">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: User) => (
                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3">{user.id}</td>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.permissao?.nome || 'Default'}</td>
                  <td className="px-4 py-3 text-end">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      Editar
                    </button>
                    <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    return <div>Erro ao carregar os usuários. Tente novamente.</div>;
  }
}
