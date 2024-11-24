"use client"

import { useState } from "react"; // Importando useState
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FaPaperPlane } from "react-icons/fa";
import { Toaster, toast } from 'react-hot-toast';

export default function ButtonFormulario() {
    const [open, setOpen] = useState(false); // Estado para controlar o modal

    async function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const dados = {
            nome: formData.get("nome"), 
            email: formData.get("email"), 
            pedido: formData.get("pedido"), 
            mensagem: formData.get("messagem"), 
        };

        if (!dados.nome || !dados.email || !dados.mensagem) {
            toast.error('Preencha os campos!', {
                position: 'top-center',
                duration: 3000,
                style: {
                    marginTop: '60px',
                },
            });
            return;
        }

        const res = await fetch(`http://localhost:3001/enviar-formulario`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dados),
        });

        console.log("resposta do servidor", res);

        if (res.ok) {
            toast.success('Mensagem enviada com sucesso!', {
                position: 'top-center',
                duration: 3000,
                style: {
                    marginTop: '60px',
                },
            });

            setTimeout(() => {
                setOpen(false); 
            }, 3000);
        } else {
            toast.error('Erro ao enviar mensagem. Tente novamente.', {
                position: 'top-center',
                duration: 3000,
                style: {
                    marginTop: '60px',
                },
            });
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="hover:bg-white bg-slate-800 hover:text-slate-900 border-[1px] text-white hover:border-slate-900 ">
                    <FaPaperPlane />
                    Enviar Mensagem
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Formulário</DialogTitle>
                    <DialogDescription>
                        Preencha os campos abaixo para enviar sua mensagem.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmitForm} className="grid gap-4 py-4">
                    <Toaster />
                    <div className="flex flex-col items-start gap-2">
                        <Label htmlFor="name" className="text-right">
                            Nome
                        </Label>
                        <Input
                            placeholder="Seu nome"
                            name="nome"
                            autoComplete="off"
                            id="nome"
                            className="col-span-3"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input
                            placeholder="Seu email"
                            name="email"
                            autoComplete="off"
                            id="email"
                            type="email"
                            className="col-span-3"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <Label htmlFor="pedido" className="text-right">
                            Número do Pedido
                        </Label>
                        <Input
                            placeholder="123487856"
                            name="pedido"
                            autoComplete="off"
                            id="pedido"
                            className="col-span-3"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <Label htmlFor="messagem" className="text-right">
                            Mensagem
                        </Label>
                        <Textarea
                            placeholder="Digite sua mensagem aqui"
                            name="messagem"
                            autoComplete="off"
                            id="messagem"
                            className="col-span-3"
                            rows={4}
                        />
                    </div>
                    <div className="text-end mt-2">
                        <Button type="submit">Enviar</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
