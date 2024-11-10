import Link from "next/link";

import Formulario from "./components/LoginForm";
import { Container } from "@/components/container";

export default function Login() {
    return (
        <Container>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="bg-white shadow-md rounded-lg p-8 w-96">
                    <h2 className="text-2xl text-gray-500 font-bold text-center mb-6">Login</h2>
                    <Formulario />
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Não tem uma conta? <Link href="/cadastro" className="text-blue-600 hover:underline">Cadastre-se</Link>
                    </p>
                </div>
            </div>
        </Container>
    );
}
