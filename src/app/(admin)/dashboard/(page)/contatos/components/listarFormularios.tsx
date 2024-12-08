"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import Paginacao from "../../components/paginacao";

export function ListarFormularios({ token }: { token: string }) {
    const [users, setUsers] = useState<any[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const [statusFilter, setStatusFilter] = useState<string>("false");
    const [currentPage, setCurrentPage] = useState<number>(1); 
    const itemsPerPage = 10; 

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

                if (!response.ok) {
                    throw new Error("Erro ao carregar os usuários");
                }

                const data = await response.json();

                if (data && Array.isArray(data.listForm)) {
                    setUsers(data.listForm);
                    setFilteredUsers(
                        data.listForm.filter(
                            (user: { status: boolean }) => user.status === false
                        )
                    );
                } else {
                    console.error("API response is not in the expected format:", data);
                    setUsers([]);
                    setFilteredUsers([]);
                }
            } catch (err) {
                console.error("Erro ao carregar os usuários. Tente novamente.", err);
                setError("Erro ao carregar os usuários. Tente novamente.");
                setUsers([]);
                setFilteredUsers([]);
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchUsers();
        }
    }, [token]);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = users.filter(
            (user) =>
                (user.email.toLowerCase().includes(query) ||
                    user.pedido.toLowerCase().includes(query)) &&
                (statusFilter === "false" ? user.status === false : user.status === true)
        );
        setFilteredUsers(filtered);
    };

    const handleStatusChange = (value: string) => {
        setStatusFilter(value);

        const filtered = users.filter(
            (user) =>
                (user.email.toLowerCase().includes(searchQuery) ||
                    user.pedido.toLowerCase().includes(searchQuery)) &&
                (value === "false" ? user.status === false : user.status === true)
        );
        setFilteredUsers(filtered);
    };

    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const currentUsers = searchQuery.length > 0 ? filteredUsers : filteredUsers.slice(indexOfFirstUser, indexOfLastUser);   

    const totalPages = searchQuery.length > 0
        ? Math.ceil(filteredUsers.length / itemsPerPage) 
        : Math.ceil(filteredUsers.length / itemsPerPage);
    
    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Contatos</h2>
            <div className="flex justify-end items-end mb-6 gap-6">
                <div>
                    <Label htmlFor="filtro" className="text-sm font-medium text-gray-700">
                        Filtro de Status
                    </Label>
                    <Select value={statusFilter} onValueChange={handleStatusChange}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Abertos" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="false">Abertos</SelectItem>
                            <SelectItem value="true">Finalizados</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Input
                        id="filtro"
                        name="filtro"
                        type="text"
                        value={searchQuery}
                        onChange={handleFilterChange}
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
                            <th className="px-4 py-2">Nº Pedido</th>
                            <th className="px-4 py-2">Mensagem</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="px-4 py-3 text-center">
                                    Não é possível encontrar
                                </td>
                            </tr>
                        ) : (
                            currentUsers.map((user) => (
                                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="px-4 py-3">{user.id}</td>
                                    <td className="px-4 py-3">{user.nome}</td>
                                    <td className="px-4 py-3">{user.email}</td>
                                    <td className="px-4 py-3">{user.pedido}</td>
                                    <td className="px-4 py-3 w-52 truncate" title={user.mensagem}>
                                        {user.mensagem.length > 50
                                            ? user.mensagem.slice(0, 50) + "..."
                                            : user.mensagem}
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="text-red-500">
                                            {user.status ? (
                                                <p className="text-green-600 flex items-center gap-1 font-medium">
                                                    <FaCheck className="text-green-600" />
                                                    Finalizado
                                                </p>
                                            ) : (
                                                <p className="font-medium">Aberto</p>
                                            )}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        {!user.status && <Button>Responder</Button>}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <Paginacao
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
}

