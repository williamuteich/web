"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditarUsuariosProps {
  id: number;
  token: string;
}

export function EditarUsuarios({ id, token }: EditarUsuariosProps) {
  const [name, setName] = useState("111111 teste");
  const [email, setEmail] = useState("testeeee@example.com");
  const [permissao, setPermissao] = useState("user");

  const [endereco, setEndereco] = useState({
    estado: "Rio Grande Do Sul",
    cidade: "Porto Alegre",
    logradouro: "Rua das Flores",
    numero: "123",
    complemento: "Apto 45",
    cep: "01234-567",
    pais: "Brasil",
    tipo: "Residencial",
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePermissaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPermissao(event.target.value);
  };

  const handleEnderecoChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndereco((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-slate-800 text-white" variant="outline">
          Editar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-screen-[500px]">
        <DialogHeader>
          <DialogTitle>Editar informações</DialogTitle>
          <DialogDescription>
            Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Nome */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              value={name}
              onChange={handleNameChange}
              className="col-span-3"
            />
          </div>

          {/* Email */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="col-span-3"
            />
          </div>

          {/* Permissão */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="permissao" className="text-right">
              Permissão
            </Label>
            <Input
              id="permissao"
              value={permissao}
              onChange={handlePermissaoChange}
              className="col-span-3"
            />
          </div>

          {/* Endereço */}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="estado" className="text-right">
                Estado
              </Label>
              <Input
                id="estado"
                value={endereco.estado}
                onChange={handleEnderecoChange("estado")}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cidade" className="text-right">
                Cidade
              </Label>
              <Input
                id="cidade"
                value={endereco.cidade}
                onChange={handleEnderecoChange("cidade")}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="logradouro" className="text-right">
                Logradouro
              </Label>
              <Input
                id="logradouro"
                value={endereco.logradouro}
                onChange={handleEnderecoChange("logradouro")}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="numero" className="text-right">
                Número
              </Label>
              <Input
                id="numero"
                value={endereco.numero}
                onChange={handleEnderecoChange("numero")}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="complemento" className="text-right">
                Complemento
              </Label>
              <Input
                id="complemento"
                value={endereco.complemento}
                onChange={handleEnderecoChange("complemento")}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cep" className="text-right">
                CEP
              </Label>
              <Input
                id="cep"
                value={endereco.cep}
                onChange={handleEnderecoChange("cep")}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="pais" className="text-right">
                País
              </Label>
              <Input
                id="pais"
                value={endereco.pais}
                onChange={handleEnderecoChange("pais")}
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tipo" className="text-right">
                Tipo
              </Label>
              <Input
                id="tipo"
                value={endereco.tipo}
                onChange={handleEnderecoChange("tipo")}
                className="col-span-3"
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Salvar alterações</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
