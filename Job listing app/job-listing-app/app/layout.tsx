import type { Metadata } from "next";
import { Inter ,Poppins,Epilogue} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] }); 
export const poppins = Poppins({subsets:['latin'], weight: ['900']})
export const epilogue = Epilogue({subsets:['latin'],weight:['400','500','600']})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
