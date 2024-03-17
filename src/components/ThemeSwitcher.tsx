"use client";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <Tabs defaultValue={theme}>
      <TabsList className="border p-1 rounded-md flex justify-center gap-2 items-center">
        <TabsTrigger value="light" onClick={() => setTheme("light")}>
          <SunIcon className={`${theme === "light" ? "bg-primary-foreground":""} hover:bg-primary-foreground hover:dark:text-black rounded-[5px] p-0.5 h-[1.3rem] w-[1.3rem]`} />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
          <MoonIcon className={`${theme === "dark" ? "bg-primary-foreground text-black":""} hover:bg-primary-foreground hover:dark:text-black rounded-[5px] p-0.5 h-[1.3rem] w-[1.3rem] rotate-90 transition-all dark:rotate-0`} />
        </TabsTrigger>
        <TabsTrigger value="system" onClick={() => setTheme("system")}>
          <DesktopIcon className={`${theme === "system" ? "bg-primary-foreground text-black":""} hover:bg-primary-foreground hover:dark:text-black rounded-[5px] p-0.5 pb-1 h-[1.3rem] w-[1.3rem]`} />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitcher;
