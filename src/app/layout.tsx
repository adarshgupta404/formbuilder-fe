import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProviders";
import DesignerContextProvider from "@/components/context/DesignerContext";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Form Builder",
  description: "Make your own forms now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <DesignerContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </DesignerContextProvider>
      </body>
    </html>
  );
}
