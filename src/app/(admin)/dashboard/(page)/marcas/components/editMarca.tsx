"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditMarcaProps {
    id: number; // ID da marca a ser editada
    token: string; // Token de autorização
}

export function EditMarca({ id, token }: EditMarcaProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Função para atualizar a marca
    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null); // Limpar o erro ao tentar salvar

        try {
            const formData = new FormData(e.currentTarget); // Usando FormData para pegar os dados

            const data = {
                id, // ID da marca
                nome: formData.get("nome"),
                descricao: formData.get("descricao"),
            };

            console.log("Dados que estão sendo enviados para o backend:", JSON.stringify(data, null, 2));

            const response = await fetch("http://localhost:3001/atualizar-marca", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(data), // Enviando os dados como JSON
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Erro ao atualizar a marca.");
            }

            alert("Marca atualizada com sucesso!");
            // Optional: Redirecionar ou recarregar a página
            location.reload();
        } catch (err) {
            setError("Erro ao atualizar a marca. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Editar</Button>
            </DialogTrigger>

            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Editar Marca</DialogTitle>
                </DialogHeader>

                {error && <div className="text-red-600 mb-4">{error}</div>}

                <form onSubmit={handleUpdate} className="grid gap-4 py-4">
                    <div className="mb-4">
                        <Label htmlFor="nome" className="text-sm font-medium text-gray-700">
                            Nome
                        </Label>
                        <Input
                            id="nome"
                            name="nome"
                            type="text"
                            placeholder="Nome da Marca"
                            className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="descricao" className="text-sm font-medium text-gray-700">
                            Descrição
                        </Label>
                        <Input
                            id="descricao"
                            name="descricao"
                            type="text"
                            placeholder="Descrição da Marca"
                            className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="text-end">
                        <Button type="submit" disabled={loading} className="bg-blue-500 text-white">
                            {loading ? "Atualizando..." : "Salvar"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
