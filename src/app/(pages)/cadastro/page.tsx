// components/Cadastro.js
import Link from "next/link";

import FormularioCadastro from "./components/formulario";
import { Container } from "@/components/container";
import { getServerSession } from "next-auth";
import { auth as authOptions } from "@/lib/auth-config";
import { redirect } from "next/navigation";

export default async function Cadastro() {
    const session = await getServerSession(authOptions)

    if (session) {
        redirect("/")
    }

    return (
        <Container>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white shadow-md rounded-lg p-8 w-96">
                    <h2 className="text-2xl text-gray-500 font-bold text-center mb-6">Cadastro</h2>
                    <FormularioCadastro />
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Já tem uma conta? <Link href="/login" className="text-blue-600 hover:underline">Faça login</Link>
                    </p>
                </div>
            </div>
        </Container>
    );
}
