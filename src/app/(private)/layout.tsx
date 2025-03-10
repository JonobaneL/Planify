import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import SidebarProvider from '@/context/SidebarProvider';

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-dvh max-h-dvh min-h-dvh flex-1">
        <Sidebar />
        <div className="h-dvh w-full flex-1 overflow-auto">
          <Header />
          <div className="w-full flex-1 overflow-auto px-8 pb-6 pt-4">
            {children}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
