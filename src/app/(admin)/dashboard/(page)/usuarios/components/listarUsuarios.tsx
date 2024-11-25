"use client"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { ConfirmDeleteUser } from "./deleteUser";
import EditUser from "./editUser";
import { DadosUsuario } from "../../../../../../../types/typeUserSession";

export function TodosUsuarios({ token }: { token: string }) {
    const [users, setUsers] = useState<DadosUsuario[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:3001/listar-usuarios", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Erro ao carregar os usuários");
                }

                const data = await response.json();
                setUsers(data.users);
            } catch (err) {
                setError("Erro ao carregar os usuários. Tente novamente.");
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchUsers();
        }
    }, [users, token]);


    const updateUsersAfterDelete = (deletedUserId: number) => {
        setUsers((prevUsers) => prevUsers.filter(user => user.id !== deletedUserId));
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Usuários</h2>
            <div className="flex justify-end items-end mb-6 gap-6">
                <div>
                    <Label htmlFor="endereco" className="text-sm font-medium text-gray-700">
                        Filtro
                    </Label>
                    <Input
                        id="endereco"
                        name="endereco"
                        type="text"
                        placeholder="Procurar"
                        className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

            </div>
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
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="px-4 py-3">{user.id}</td>
                                <td className="px-4 py-3">{user.name}</td>
                                <td className="px-4 py-3">{user.email}</td>
                                <td className="px-4 py-3">{user.permissao?.nome || 'Default'}</td>
                                <td className="px-4 py-3 text-end">

                                    <div className="flex justify-end">
                                        <EditUser user={user} token={token} />
                                        <ConfirmDeleteUser id={user.id} token={token} onDelete={updateUsersAfterDelete} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
