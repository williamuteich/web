// components/admin/Sidebar.tsx

import { FaHome, FaUserCircle, FaTshirt, FaCog, FaSignOutAlt } from 'react-icons/fa'; 
import { LogoutDashboard } from "../../../(pages)/login/components/LogoutButton";
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col justify-between min-h-screen">
      
      <div>
        <div className="p-4 text-center">
            <h2 className="text-lg font-semibold">Admin Dashboard</h2>
        </div>
        
        <ul className="space-y-2 p-4">
            <li>
                <Link href="/dashboard">
                    <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700">
                        <FaHome size={24}/> Dashboard
                    </div>
                </Link>
            </li>
            <li>
                <Link href="/users">
                    <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700">
                        <FaUserCircle size={24}/> Usuários
                    </div>
                </Link>
            </li>
            <li>
                <Link href="/Produtos">
                    <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700">
                        <FaTshirt size={24}/> Produtos
                    </div>
                </Link>
            </li>
        </ul>
      </div>
      
      <div className="mb-6 space-y-2 p-4">
            <Link href="/settings" className='text-white'>
                <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-700">
                    <FaCog size={24}/> Configurações
                </div>
            </Link>
            <LogoutDashboard />
        </div>
    </div>
  );
}
