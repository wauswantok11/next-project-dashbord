"use client" 
import React from "react";
import "./globals.css"; 
import { Geist, Geist_Mono } from "next/font/google"; 
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
// import { console } from "inspector/promises";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [toggle, setToggle] = React.useState(true);
  const [path, setPath] = React.useState('');
  React.useEffect(() => {
    console.log('Current path:', window.location.pathname);
    setPath(window.location.pathname);
  }, []);
  return (
    <html lang="th">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-family`}>
        <div className="min-h-screen bg-gray-50">
        {path !== '/Pages/Login' && (
            <>
              <Header toggle={toggle} setToggle={setToggle} />
              <div className="flex">
                <Sidebar toggle={toggle} />
                <main className="flex-1 p-6 overflow-y-auto">
                  {children}
                </main>
              </div>
            </>
          )}
          {path === '/Pages/Login' && (
            <main className="flex-1">
              {children}
            </main>
          )}
        </div>
      </body>
    </html>
  );
}
