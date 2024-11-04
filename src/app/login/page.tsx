import Link from "next/link";
import { Container } from "../components/container";

// components/Login.js
export default function Login() {
    return (
        <Container>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="bg-white shadow-md rounded-lg p-8 w-96">
                    <h2 className="text-2xl text-gray-500 font-bold text-center mb-6">Login</h2>
                    <form>
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
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Não tem uma conta? <Link href="/cadastro" className="text-blue-600 hover:underline">Cadastre-se</Link>
                    </p>
                </div>
            </div>
        </Container>
    );
}
