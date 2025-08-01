import { SessionProvider } from 'next-auth/react';

import Header from '@/app/(private)/_components/Header';
import Sidebar from '@/components/Sidebar';
import SidebarProvider from '@/context/SidebarProvider';

import AuthLayer from './_components/AuthLayer';

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <SessionProvider>
        <div className="flex h-dvh max-h-dvh min-h-dvh flex-1">
          <Sidebar />
          <div className="h-dvh w-full flex-1 overflow-auto">
            <Header />
            <div className="h-[calc(100%-60px)] w-full flex-1 overflow-auto">
              {children}
            </div>
          </div>
        </div>
        <AuthLayer />
      </SessionProvider>
    </SidebarProvider>
  );
}
