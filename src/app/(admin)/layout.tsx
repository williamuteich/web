// app/admin/layout.tsx

import { ReactNode } from 'react';
 // Caminho do seu componente Sidebar
import { getServerSession } from 'next-auth';
import { auth as authOptions } from '@/lib/auth-config';
import { redirect } from 'next/navigation';
import Sidebar from './components/sidebar/sidebar';

interface LayoutProps {
  children: ReactNode;
}

export default async function AdminLayout({ children }: LayoutProps) {
  const session = await getServerSession(authOptions);
  
  // Se o usuário não estiver autenticado, redireciona para a página de login
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo principal do Dashboard */}
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}
