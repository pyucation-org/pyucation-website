import Navbar from "./components/navbar";
import "./globals.css";

import { Inter, Roboto } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pyucation - Weiterbildung und Beratung in KI und Python",
  description:
    "Wir bieten Weiterbildungen und Beratung in Python und Künstliche Intelligenz an: Python Grundlagen und Machine Learning für Anfänger, Fortgeschrittene, Unternehmen und Bildungseinrichtungen. Wir unterstützen auch bei der Realisierung eigener Ideen.",
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
