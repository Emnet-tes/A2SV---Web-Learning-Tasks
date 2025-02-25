import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@/contexts/UserContext";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salire",
  description: "Job posting platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ToastContainer />
          <SessionProvider>{children}</SessionProvider>
        </UserProvider>
      </body>
    </html>
  );
}
