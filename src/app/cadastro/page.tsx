// components/Cadastro.js
import Link from "next/link";
import { Container } from "../components/container";

export default function Cadastro() {
    return (
        <Container>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white shadow-md rounded-lg p-8 w-96">
                    <h2 className="text-2xl text-gray-500 font-bold text-center mb-6">Cadastro</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                                Nome de Usuário
                            </label>
                            <input
                                type="text"
                                id="username"
                                required
                                className="mt-1 block w-full border text-gray-800 border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-200 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <input
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
                                min="8"
                                type="password"
                                id="password"
                                required
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
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Já tem uma conta? <Link href="/login" className="text-blue-600 hover:underline">Faça login</Link>
                    </p>
                </div>
            </div>
        </Container>
    );
}
