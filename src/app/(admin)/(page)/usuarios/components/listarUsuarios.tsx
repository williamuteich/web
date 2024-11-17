"use client"

import { useState, useEffect } from "react";
import { ConfirmDeleteUser } from "./deleteUser";
import { EditarUsuarios } from "./editarUsuarios";
import { AlertDialog, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";

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



export function TodosUsuarios({ token }: { token: string }) {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showEdit, setShowEdit] = useState<boolean>(false);

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
    }, [token]);

    const updateUsersAfterDelete = (deletedUserId: number) => {
        setUsers((prevUsers) => prevUsers.filter(user => user.id !== deletedUserId));
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const handleEdit = (): void => {
        setShowEdit(!showEdit);
    }



    return (
        <div className="overflow-x-auto w-full bg-white shadow-md rounded-lg mainDivToModal">
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
                            {showEdit && (
                                    
                                        <EditarUsuarios id={user.id} token={token} />

                                )}
                                
                                <ConfirmDeleteUser id={user.id} token={token} onDelete={updateUsersAfterDelete} />
                                <button onClick={handleEdit} className="ml-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                                    Editar
                                </button>
                            </td>
                            

                        </tr>
                        
                    ))}
                </tbody>
            </table>
            
        </div>
    );
}
