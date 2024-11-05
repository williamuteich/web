"use client";

import { useRef, useState } from "react";
import { useRouter } from 'next/navigation';

interface FormData {
    email: string;
    password: string;
}

interface FormState {
    data: FormData | null;
    errors: string[]; 
}

export default function Formulario() {
    const userEmail = useRef<HTMLInputElement | null>(null);
    const userPassword = useRef<HTMLInputElement | null>(null);
    const [campoForm, setCampoForm] = useState<FormState>({ data: null, errors: [] });
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const errors: string[] = [];

        const data = {
            email: userEmail.current?.value,
            password: userPassword.current?.value,
        };

        if (!data.email) {
            errors.push("O campo Email está vazio.");
        }

        if (!data.password) {
            errors.push("O campo Senha está vazio.");
        }

        if (errors.length > 0) {
            setCampoForm(prev => ({ ...prev, errors }));
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                })
            });

            if(response.ok) {
                const responseData = await response.json();

                if(responseData.token) {
                    localStorage.setItem("token", responseData.token);

                    router.push("/");
                }
            }

            if (!response.ok) {
                const errorResponse = await response.json();
                setCampoForm(prev => ({ ...prev, errors: [errorResponse.message || "Erro desconhecido"] }));
                return;
            }
        } catch (err) {
            setCampoForm(prev => ({ ...prev, errors: ["Erro ao tentar fazer login"] }));
        }
    }

    return (
        <div>
            {campoForm.errors.length > 0 && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded">
                    {campoForm.errors.map((msg, index) => (
                        <p key={index}>{msg}</p>
                    ))}
                </div>
            )}
            
            {/* Formulário de login */}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        ref={userEmail}
                        type="email"
                        id="email"
                        required
                        className="mt-1 block w-full border text-gray-800 border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                        Senha
                    </label>
                    <input
                        ref={userPassword}
                        type="password"
                        id="password"
                        required
                        className="mt-1 block w-full border text-gray-800 border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}
