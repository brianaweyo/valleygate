import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Importing Poppins font
import "./globals.css";
import Footer from "./components/footer";

import Navbar  from "./components/navbar";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Valleygate Consultancy",
  description: "Expert consultancy services for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1">{children}</main> {/* Ensures content fills space */}
        <Footer />
      </body>
    </html>
  );
}

