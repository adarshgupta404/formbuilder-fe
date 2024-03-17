import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-[100dvh] min-w-full h-screen bg-background max-h-[100dvh]">
      <nav className="flex justify-between border-b border-border h-[60px] p-4">
        <div className="logo-container">
          <h1 className="logo-text font-extrabold whitespace-nowrap">Form Builder</h1>
        </div>
        <ThemeSwitcher />
        {/* <UserButton /> */}
      </nav>
      <main className="flex w-full flex-grow">{children}</main> <Toaster />
    </div>
  );
};

export default layout;
