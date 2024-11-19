import { getServerSession } from "next-auth";
import { auth as authOptions } from "@/lib/auth-config";
import { DadosUsuario, Endereco } from "../../../../../../types/typeUserSession";
import { Input } from "@/components/ui/input"; // Supondo que você tenha um componente customizado para Input
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default async function ListaUsuario({
    params
}: {
    params: Promise<{ id: number }>;
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
        <form className="max-w-screen-xl mx-auto p-6 bg-white shadow-sm rounded-lg">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Atualizar Dados do Usuário</h2>
            <div className="space-y-6">
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
                        <label htmlFor="permissao" className="block text-sm font-medium text-gray-700">
                            Permissão
                        </label>
                        <Select defaultValue={usuario.permissao ? usuario.permissao.nome : "user"}>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione a permissão" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="admin">Administrador</SelectItem>
                                <SelectItem value="user">Usuário</SelectItem>
                                <SelectItem value="visitor">Visitante</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label htmlFor="active" className="block text-sm font-medium text-gray-700">
                            Ativo
                        </label>
                        <Select defaultValue={usuario.active ? "true" : "false"}>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione se está ativo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="true">Ativo</SelectItem>
                                <SelectItem value="false">Inativo</SelectItem>
                            </SelectContent>
                        </Select>
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
            </div>
        </form>
    );
}
