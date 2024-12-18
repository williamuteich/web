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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DadosUsuario } from "../../../../../../../types/typeUserSession";

interface EditUserProps {
    user: DadosUsuario;
    token: string;
}

export default function EditUser({ user, token }: EditUserProps) {
    const [avatarFile, setAvatarFile] = useState<File | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setAvatarFile(file);
        }
    };

    const getAvatarUrl = () => {
        if (avatarFile) {
            return URL.createObjectURL(avatarFile);
        }
        return "https://github.com/shadcn.png";
    };


    async function changeDataUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);

            const data = {
                id: user?.id || '',
                name: formData.get("name"),
                active: formData.get("active") === "true",
                email: formData.get("email"),
                permissao: {
                    nome: formData.get("permissao"),
                },
                endereco: {
                    id: user?.endereco?.[0]?.id || null,
                    estado: formData.get("estado"),
                    cidade: formData.get("cidade"),
                    logradouro: formData.get("endereco"),
                    numero: formData.get("numero"),
                    complemento: formData.get("complemento"),
                    cep: formData.get("cep"),
                },
            };

            const response = await fetch("http://localhost:3001/atualizar-usuario", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                console.log(result)
                location.reload();
            } else {
                console.error("Erro ao atualizar o usuário:", result);
            }
        } catch (err) {
            console.error("Erro ao enviar dados:", err);
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Editar</Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl" aria-describedby="dialog-description">
                <DialogHeader>
                    <DialogTitle className="text-2xl underline">Atualizar Dados do Usuário</DialogTitle>
                </DialogHeader>
                
                
                {/*<div className="flex items-center gap-4" id="dialog-description">
                    <Avatar className="mt-6 w-32 h-auto">
                        <AvatarImage src={getAvatarUrl()} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-slate-900 font-semibold text-2xl">{user.name}</h2>
                        <Button
                            onClick={() => document.getElementById("image-input")?.click()}
                            className="mt-4"
                        >
                            Trocar Imagem
                        </Button>
                    </div>
                    <input
                        type="file"
                        id="image-input"
                        onChange={handleImageChange}
                        accept="image/*"
                        className="hidden"
                    />
                </div>*/}
                <form onSubmit={changeDataUser} className="grid gap-4 py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                                Nome
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                defaultValue={user.name}
                                placeholder="Nome Completo"
                                className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                E-mail
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                defaultValue={user.email}
                                placeholder="E-mail"
                                className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="permissao" className="text-sm font-medium text-gray-700">
                                Permissão
                            </Label>
                            <Select name="permissao" defaultValue={user.permissao ? user.permissao.nome : "user"}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione a permissão" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="admin">Administrador</SelectItem>
                                    <SelectItem value="user">Usuário</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label className="text-sm font-medium text-gray-700">Ativo</Label>
                            <Select name="active" defaultValue={user.active ? "true" : "false"}>
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
                            <Label htmlFor="endereco" className="text-sm font-medium text-gray-700">
                                Endereço
                            </Label>
                            <Input
                                id="endereco"
                                name="endereco"
                                type="text"
                                defaultValue={user.endereco?.[0]?.logradouro || ""}
                                placeholder="Logradouro"
                                className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <Label htmlFor="numero" className="text-sm font-medium text-gray-700">
                                Número
                            </Label>
                            <Input
                                id="numero"
                                name="numero"
                                type="text"
                                defaultValue={user.endereco?.[0]?.numero || ""}
                                placeholder="Número do Endereço"
                                className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="cidade" className="text-sm font-medium text-gray-700">
                                Cidade
                            </Label>
                            <Input
                                id="cidade"
                                name="cidade"
                                type="text"
                                defaultValue={user.endereco?.[0]?.cidade || ""}
                                placeholder="Cidade"
                                className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <Label htmlFor="estado" className="text-sm font-medium text-gray-700">
                                Estado
                            </Label>
                            <Input
                                id="estado"
                                name="estado"
                                type="text"
                                defaultValue={user.endereco?.[0]?.estado || ""}
                                placeholder="Estado"
                                className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="cep" className="text-sm font-medium text-gray-700">
                                CEP
                            </Label>
                            <Input
                                id="cep"
                                name="cep"
                                type="text"
                                defaultValue={user.endereco?.[0]?.cep || ""}
                                placeholder="CEP"
                                className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <Label htmlFor="complemento" className="text-sm font-medium text-gray-700">
                                Complemento
                            </Label>
                            <Input
                                id="complemento"
                                name="complemento"
                                type="text"
                                defaultValue={user.endereco?.[0]?.complemento || ""}
                                placeholder="Complemento"
                                className="mt-1 block w-full border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="text-end mt-2">
                        <Button>Salvar</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
