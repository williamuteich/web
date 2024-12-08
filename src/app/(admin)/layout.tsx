import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { auth as authOptions } from '@/lib/auth-config';
import { redirect } from 'next/navigation';
import Sidebar from './components/sidebar/sidebar';

interface LayoutProps {
  children: ReactNode;
}

export default async function AdminLayout({ children }: LayoutProps) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/login');
  }


  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
}

