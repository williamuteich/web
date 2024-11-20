"use client";

import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { DadosUsuario } from "../../../../../../types/typeUserSession";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ListaUsuario({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const [usuario, setUsuario] = useState<DadosUsuario | null>(null);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await getSession();
        setSession(session);

        if (!session || !session.user || !session.user.codigoJWT) {
          setError("Não autorizado");
          return;
        }

        const userID = (await params).id;
        const token = session.user.codigoJWT;

        const response = await fetch(`http://localhost:3001/lista-usuario?id=${userID}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUsuario(data?.user || null);
        } else {
          setError("Usuário não encontrado");
        }
      } catch (err) {
        setError("Erro ao buscar dados do usuário");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (loading) {
    return (
      <div className="flex items-center space-x-2">
        <div className="border-4 border-t-4 border-blue-500 border-solid w-4 h-4 rounded-full animate-spin"></div>
        <span>Carregando Dados...</span>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!usuario) {
    return <div>Usuário não encontrado.</div>;
  }

  async function changeData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!session) {
      setError("Sessão não encontrada");
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);

      const endereco = [];

      const data = {
        id: usuario?.id || '',
        name: formData.get("name"),
        active: formData.get("active") === "true",
        email: formData.get("email"),
        permissao: {
          nome: formData.get("permissao"),
        },
        endereco: {
          id: usuario?.endereco?.[0]?.id || null,
          estado: formData.get("estado"),
          cidade: formData.get("cidade"),
          logradouro: formData.get("endereco"),
          numero: formData.get("numero"),
          complemento: formData.get("complemento"),
          cep: formData.get("cep"),
        },
      };

      console.log("Dados que estão sendo enviados para o backend:", JSON.stringify(data, null, 2));

      const response = await fetch("http://localhost:3001/atualizar-usuario", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session.user.codigoJWT}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Usuário atualizado com sucesso!", result);
      } else {
        console.error("Erro ao atualizar o usuário:", result);
      }
    } catch (err) {
      console.error("Erro ao enviar dados:", err);
    }
  }

  return (
    <form onSubmit={changeData} className="mx-auto p-6 bg-white shadow-sm rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Atualizar Dados do Usuário</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
            <Input
              id="name"
              name="name"
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
              name="email"
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
            <Select name="permissao" defaultValue={usuario.permissao ? usuario.permissao.nome : "user"}>
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
            <label className="block text-sm font-medium text-gray-700">
              Ativo
            </label>
            <Select name="active" defaultValue={usuario.active ? "true" : "false"}>
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
              name="endereco"
              type="text"
              placeholder="Logradouro"
              defaultValue={usuario.endereco.length > 0 ? usuario.endereco[0]?.logradouro : ''}
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="numero" className="block text-sm font-medium text-gray-700">Número</label>
            <Input
              id="numero"
              name="numero"
              type="text"
              placeholder="Número do Endereço"
              defaultValue={usuario.endereco.length > 0 ? usuario.endereco[0]?.numero : ''}
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">Cidade</label>
            <Input
              id="cidade"
              name="cidade"
              type="text"
              placeholder="Cidade"
              defaultValue={usuario.endereco.length > 0 ? usuario.endereco[0]?.cidade : ''}
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="estado" className="block text-sm font-medium text-gray-700">Estado</label>
            <Input
              id="estado"
              name="estado"
              type="text"
              placeholder="Estado"
              defaultValue={usuario.endereco.length > 0 ? usuario.endereco[0]?.estado : ''}
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="cep" className="block text-sm font-medium text-gray-700">CEP</label>
            <Input
              id="cep"
              name="cep"
              type="text"
              placeholder="CEP"
              defaultValue={usuario.endereco.length > 0 ? usuario.endereco[0]?.cep : ''}
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="complemento" className="block text-sm font-medium text-gray-700">Complemento</label>
            <Input
              id="complemento"
              name="complemento"
              type="text"
              placeholder="Complemento"
              defaultValue={usuario.endereco.length > 0 ? usuario.endereco[0]?.complemento : ''}
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-600"
        >
          Atualizar
        </button>
      </div>
    </form>
  );
}
