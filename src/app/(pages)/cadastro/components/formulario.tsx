"use client"

import { useRef, useState } from "react"
import { useRouter } from 'next/navigation'

interface FormData {
    username: string;
    email: string;
    password: string;
}

interface FormState {
    data: FormData | null;
    errors: string[];
}

export default function Formulario() {
    const [campoForm, setCampoForm] = useState<FormState>({ data: null, errors: [] });
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const errors: string[] = [];
        
        const data: FormData = {
            username: usernameRef.current ? usernameRef.current.value : "",
            email: emailRef.current ? emailRef.current.value : "",
            password: passwordRef.current ? passwordRef.current.value : "",
        };

        if (!data.username) {
            errors.push("O campo Nome de Usuário está vazio.");
        }
        if (!data.email) {
            errors.push("O campo Email está vazio.");
        }
        if (!data.password) {
            errors.push("O campo Senha está vazio.");
        }

        setCampoForm({ data: errors.length === 0 ? data : null, errors });

        if (errors.length > 0) {
            return;
        }
    
        try {
            const response = await fetch(`http://localhost:3001/cadastro`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.username,
                    email: data.email,
                    password: data.password
                })
            });
        
            if (!response.ok) {
                const errorResponse = await response.json();
                setCampoForm(prev => ({ ...prev, errors: [errorResponse.messagem || "Erro desconhecido"] }));
                return;
            }
            router.push('/login');
        } catch (error) {
            setCampoForm(prev => ({ ...prev, errors: ["Erro ao tentar fazer cadastro"] }));
        }
        
    }
    return(
        <div>
            {campoForm.errors.length > 0 && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded">
                    {campoForm.errors.map((msg, index) => (
                        <p key={index}>{msg}</p>
                    ))}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                        Nome de Usuário
                    </label>
                    <input
                        ref={usernameRef}
                        type="text"
                        id="username"
                      
                        className="mt-1 block w-full border text-gray-800 border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        ref={emailRef}
                        type="email"
                        id="email"
                      
                        className="mt-1 block w-full border text-gray-800 border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                        Senha
                    </label>
                    <input
                        ref={passwordRef}
                        min="8"
                        type="password"
                        id="password"
                      
                        className="mt-1 block w-full border text-gray-800 border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
                    />
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="consent"
                        required
                        className="mr-2"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                        Ao usar este formulário, você concorda com o armazenamento e o manuseio de seus dados por este site.
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    )
}