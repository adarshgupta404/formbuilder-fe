import ThemeSwitcher from "@/components/ThemeSwitcher";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex w-full flex-grow">{children}</main>;
};

export default layout;
