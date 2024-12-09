"use client"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { EditMarca } from "./editMarca";
//import { ConfirmDeleteMarca } from "./deleteUser";
//import EditMarca from "./editMarca";

interface DadosMarca {
    id: number;
    nome: string;
    descricao: string;
    criadaEm: Date;
}

export function TodasMarcas({ token }: { token: string }) {
    const [marcas, setMarcas] = useState<DadosMarca[]>([]); 
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMarcas = async () => {
            try {
                const response = await fetch("http://localhost:3001/listar-marcas", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Erro ao carregar os marcas");
                }

                const data = await response.json();
                console.log("resultado aqui", data);
                setMarcas(data.listMarcas || []);
            } catch (err) {
                setError("Erro ao carregar os marcas. Tente novamente.");
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchMarcas();
        }
    }, [token]);

    const updateMarcasAfterDelete = (deletedMarcasId: number) => {
        setMarcas((prevMarcas) => prevMarcas.filter(marcas => marcas.id !== deletedMarcasId));
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.trim().toLowerCase();
        setSearchQuery(query);
    };

    const filteredMarcas = marcas.filter(marca =>
        marca.nome.toLowerCase().includes(searchQuery)
    );

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lista de Marcas</h2>
            <div className="flex justify-end items-end mb-6 gap-6">
                <div>
                    <Label htmlFor="endereco" className="text-sm font-medium text-gray-700">
                        Filtro
                    </Label>
                    <Input
                        id="endereco"
                        name="endereco"
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
                            <th className="px-4 py-2">Descrição</th>
                            <th className="px-4 py-2">CriadoEm</th>
                            <th className="px-4 py-2">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMarcas.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-4 py-3 text-center">Nenhuma marca encontrada</td>
                            </tr>
                        ) : (
                            filteredMarcas.map((marca) => (
                                <tr key={marca.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="px-4 py-3">{marca.id}</td>
                                    <td className="px-4 py-3">{marca.nome}</td>
                                    <td className="px-4 py-3">{marca.descricao}</td>
                                    <td className="px-4 py-3">{new Date(marca.criadaEm).toLocaleDateString()}</td>
                                                                        
                                    <td className="px-4 py-3 text-end">
                                        <div className="flex justify-end">
                                            <EditMarca id={marca.id} token={token} />

                                            {/*<ConfirmDeleteMarca id={marca.id} token={token} onDelete={updateMarcasAfterDelete} />/*/}
                                        </div>
                                    </td>
                                    
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}