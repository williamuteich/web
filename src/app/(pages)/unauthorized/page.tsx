"use client"

import React, { useState, useEffect } from 'react';
import { redirect } from 'next/navigation'

export default function Unauthorized() {
    const [contador, setContador] = useState(5);

    useEffect(() => {
        if (contador > 0) {
            const interval = setInterval(() => {
                setContador((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            console.log("contagem finalizada!");
        }

    }, [contador]);

    if (contador === 0) {
        setInterval(() => {
            redirect('/');
        }, 1500);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600 mb-10">Unauthorized</h1>
            <div className="text-center p-6 bg-white shadow-lg rounded-lg w-96">
                <p className="text-lg text-gray-700 mb-6">Você não tem permissão para acessar esta página.</p>

                {contador > 0 ? (
                    <p className="mb-4">
                        Redirecionando: <span className="text-2xl font-bold text-blue-600">{contador}</span> segundos
                    </p>
                ) : (
                    <p className="mb-4">Redirecionando para Home</p>
                )}

                <a
                    href="/"
                    className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Voltar para a página inicial
                </a>

            </div>
        </div>
    );
}
