"use client"
import { useState } from "react";
import { Toaster, toast } from 'react-hot-toast';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function ConfirmDeleteUser({ id, token, onDelete }) {
    const [loading, setLoading] = useState(false);

    const handleDelete = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:3001/deletar-usuario`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Usuário excluído com sucesso!', {
                    duration: 3000,
                });

                onDelete(id);
            } else {
                throw new Error(data.message || 'Algo deu errado ao tentar excluir o usuário');
            }
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            toast.error(`Erro: ${error.message}`, {
                duration: 3000,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <button className="ml-2 bg-red-500 text-white px-4  rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
                        Deletar
                    </button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Tem certeza que deseja excluir este usuário?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Esta ação é permanente e não pode ser desfeita. O usuário será excluído permanentemente, junto com seus dados, e não poderá ser recuperado.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction
                            className="bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-400"
                            onClick={() => handleDelete(id)}
                            disabled={loading}
                        >
                            Continuar
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <Toaster />
        </>
    );
}
