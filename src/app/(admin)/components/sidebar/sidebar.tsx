import { FaHome, FaUserCircle, FaCog, FaBoxOpen, FaStore, FaEnvelope, FaTag, FaBoxes } from 'react-icons/fa';
import { LogoutDashboard } from "../../../(pages)/login/components/LogoutButton";
import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className="w-64 bg-gray-800">
            <div className='text-white flex flex-col min-h-screen fixed w-[inherit] justify-between'>
                <div>
                    <div className="p-4 text-center">
                        <h2 className="text-lg font-semibold underline">Admin Dashboard</h2>
                    </div>
                    <ul className="space-y-2 p-4">
                        <li>
                            <Link href="/dashboard">
                                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700">
                                    <FaHome size={24} /> Dashboard
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/usuarios">
                                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700">
                                    <FaUserCircle size={24} /> Usuários
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/produtos">
                                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700">
                                    <FaBoxOpen size={24} /> Produtos
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/Categoria">
                                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700">
                                    <FaBoxes size={24} /> Categoria
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/marcas">
                                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700">
                                    <FaTag size={24} /> marcas
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/vendas">
                                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700">
                                    <FaStore size={24} /> Vendas
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/contatos">
                                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700">
                                    <FaEnvelope size={24} /> Contatos
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mb-6 space-y-2 p-4">
                    <Link href="/settings" className='text-white'>
                        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700">
                            <FaCog size={24} /> Configurações
                        </div>
                    </Link>
                    <LogoutDashboard />
                </div>
            </div>
        </div>
    );
}
