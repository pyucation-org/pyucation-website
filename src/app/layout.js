import Navbar from "./components/navbar";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pyucation",
  description: "Pyustuff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*Navbar is included in the global layout for all pages */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
