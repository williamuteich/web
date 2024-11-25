"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

export function ListarFormularios({ token }: { token: string }) {
    const [users, setUsers] = useState<any[]>([]);  
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:3001/listar-formularios", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
    
                console.log("Full API Response:", response); 
    
                if (!response.ok) {
                    throw new Error("Erro ao carregar os usuários");
                }
    
                const data = await response.json();
                console.log("API Response Data:", data); 
    
                // Adjust this to check for listForm instead of users
                if (data && Array.isArray(data.listForm)) {
                    setUsers(data.listForm);  // Now setting data.listForm to users
                } else {
                    console.error("API response is not in the expected format:", data);
                    setUsers([]); 
                }
            } catch (err) {
                console.error("Erro ao carregar os usuários. Tente novamente.", err);
                setError("Erro ao carregar os usuários. Tente novamente.");
                setUsers([]);  
            } finally {
                setLoading(false);  
            }
        };
    
        if (token) {
            fetchUsers();
        }
    }, [token]); 
    

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    console.log("Users data:", users);  

    return (
        <div className="overflow-x-auto w-full bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-700 text-left text-sm font-medium text-white">
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Nome</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Nº Pedido</th>
                        <th className="px-4 py-2">Mensagem</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-3">{user.id}</td>
                            <td className="px-4 py-3">{user.name}</td>
                            <td className="px-4 py-3">{user.email}</td>
                            <td className="px-4 py-3">{user.pedido}</td>
                            <td className="px-4 py-3">{user.mensagem}</td>
                            <td className="px-4 py-3">
                                <span className="text-red-500">{user.status ? (<p className="text-green-600 flex items-center gap-1 font-medium"><FaCheck className="text-green-600" />Respondido</p>) : (<p>Não Respondido</p>)}</span>
                            </td>
                            <td className="px-4 py-3 text-center">
                                {!user.status && (
                                    <Button>
                                        Responder
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
