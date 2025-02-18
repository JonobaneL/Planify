"use client";
import { createContext, useContext, useState } from "react";

type SidebarContextParams = {
  isOpen: boolean;
  toggleSidebar: () => void;
};
const SidebarContext = createContext<SidebarContextParams | null>(null);
export const useSidebarContext = () => {
  return useContext(SidebarContext) as SidebarContextParams;
};
const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((p) => !p);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
