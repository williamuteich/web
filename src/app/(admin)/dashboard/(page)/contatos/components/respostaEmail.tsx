"use client"

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FiArrowLeft, FiSend, FiMessageCircle } from "react-icons/fi";

interface User {
    id: number;
    nome: string;
    email: string;
    mensagem: string;
    status: boolean;
    pedido: string;
}

interface RespostaEmailProps {
    selectedUser: User | null;
    setSelectedUser: (user: User | null) => void;
}

export default function RespostaEmail({ selectedUser, setSelectedUser }: RespostaEmailProps) {
    const [textMessage, setTextMessage] = useState<string>("");

    const handleSubmitResponse = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!textMessage) {
            return alert("Por favor, escreva uma mensagem para enviar.");
        }
    
        console.log("Enviando para o backend:", {
            nameUser: selectedUser?.nome,
            emailUser: selectedUser?.email,
            message: textMessage,
        });
    
        try {
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nameUser: selectedUser?.nome,
                    emailUser: selectedUser?.email,
                    message: textMessage,
                }),
            });
    
            if (res.ok) {
                alert("Resposta enviada com sucesso!");
            } else {
                alert("Erro ao enviar a resposta.");
            }
        } catch (error) {
            alert("Erro ao enviar a resposta.");
            console.error(error);
        }
    };    

    return (
        <form className="bg-white p-6 rounded-lg shadow-lg mt-6" onSubmit={handleSubmitResponse}>
            <Button
                onClick={() => setSelectedUser(null)}
                className="bg-white shadow-sm border border-slate-300 text-gray-800 hover:text-white  focus:ring-4 focus:ring-gray-200 rounded-lg p-2"
            >
                <FiArrowLeft className="w-8 h-8" />
            </Button>

            <h2 className="mt-6 font-bold text-gray-600 text-2xl">Responder Formulário</h2>

            <div className="mb-10 mt-12 flex flex-col gap-1">
                <p className="text-lg font-normal text-gray-600"><strong>Nome:</strong> <span className="text-blue-700 font-medium">{selectedUser?.nome}</span></p>
                <p className="text-lg font-normal text-gray-700"><strong>Email:</strong> <span className="text-blue-700 font-medium">{selectedUser?.email}</span></p>

                <p className="text-lg font-normal text-gray-700"><strong>Mensagem:</strong></p>
                <div className="text-gray-800 italic p-4 py-3 border border-gray-200 bg-gray-50 rounded-lg shadow-sm">
                    <FiMessageCircle className="w-4 h-4 text-gray-500 inline-block mr-2" />
                    {selectedUser?.mensagem}
                </div>

            </div>

            <div className="mt-4">
                <Label htmlFor="resposta" className="block text-lg font-medium text-gray-700 mb-1">Sua Resposta</Label>
                <textarea
                    id="resposta"
                    rows={6}
                    value={textMessage}
                    onChange={(e) => setTextMessage(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 text-lg text-gray-800 focus:outline-none focus:ring-0 focus:border-gray-400"
                    placeholder="Escreva sua resposta aqui..."
                ></textarea>
            </div>

            <div className="mt-6 text-end">
                <Button
                    type="submit" // Usando o submit diretamente no botão
                    className="bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-lg px-6 py-2 text-sm font-semibold transition duration-150 ease-in-out"
                >
                    <FiSend className="mr-2 w-4 h-4" />
                    Enviar Resposta
                </Button>
            </div>
        </form>
    );
}
