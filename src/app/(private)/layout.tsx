import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarProvider from "@/context/SidebarProvider";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Header />
      <div className="flex-1 flex  h-full items-stretch">
        <Sidebar />
        <div className="flex-1 w-full overflow-auto p-8 ">{children}</div>
      </div>
    </SidebarProvider>
  );
}
