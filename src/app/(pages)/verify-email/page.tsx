"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importando o ícone FaCheckCircle

export default function VerificaEmail() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const [responseData, setResponseData] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!token) return; // Se não houver token, não faz a requisição.

    fetch(`http://localhost:3001/verify-email?token=${token}`)
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data);
        setTimeout(() => {
            router.push("/");   
        }, 3000);
      })
      .catch((err) => {
        setError("Erro ao consumir a API");
        console.error(err);
      })
      .finally(() => setLoading(false)); // Fim do carregamento
  }, [token, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Verificação de E-mail</h1>

        {/* Spinner de Carregamento */}
        {loading && (
          <div className="flex justify-center items-center mb-4">
            <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        )}

        {/* Erro */}
        {error && !loading && (
          <p className="text-red-600 text-center mb-4">{error}</p>
        )}

        {/* Resultado da API */}
        {responseData && !loading && (
          <div className="text-center">
            {/* Exibe a mensagem com ícone de sucesso */}
            {responseData.message === "Este e-mail já foi verificado." ? (
              <div>
                <div className="flex mb-4 justify-center items-center p-4 bg-green-100 text-green-800 border border-green-400 rounded-lg">
                    <FaCheckCircle className="h-6 w-6 mr-2" />
                    <p className="text-lg font-semibold">Este e-mail já foi validado.</p>
                </div>
                <span>redirecionando para a pagina home...</span>
              </div>
            ) : (
            <div>
              <div className="flex mb-4 justify-center items-center p-4 bg-green-100 text-green-800 border border-green-400 rounded-lg">
                <FaCheckCircle className="h-6 w-6 mr-2" />
                <p className="text-lg font-semibold">E-mail validado com sucesso!</p>
              </div>
              <span>redirecionando para a pagina home...</span>
            </div>
            )}
          </div>
        )}

        {/* Mensagem enquanto aguarda resposta */}
        {!responseData && !loading && !error && (
          <p className="text-center text-gray-600">Esperando pela resposta da API...</p>
        )}
      </div>
    </div>
  );
}
