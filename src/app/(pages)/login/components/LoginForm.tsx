"use client";

import { signIn } from "next-auth/react"

export default function Formulario() {

    async function login(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        
        const data = {
            email: formData.get("email"),
            password: formData.get("password")
        }

        signIn("credentials", {
            ...data,
            callbackUrl: "/dashboard"

        })
    }


    return (
        <div>
            <form onSubmit={login}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 block w-full border text-gray-800 border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                        Senha
                    </label>
                    <input
                        type="password"
                        name="password"
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
