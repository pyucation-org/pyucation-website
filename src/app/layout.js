import Navbar from "./components/navbar";
import "./globals.css";

import { Inter, Roboto } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./styles/scrollbar.css";

export const metadata = {
  title: "Pyucation - Weiterbildung und Beratung in KI und Python",
  description:
    "Wir bieten Weiterbildungen und Beratung in Python und Künstliche Intelligenz an: Python Grundlagen und Machine Learning für Anfänger, Fortgeschrittene, Unternehmen und Bildungseinrichtungen. Wir unterstützen auch bei der Realisierung eigener Ideen.",
  author: "pyucation",
  verification: {
    google: "ihI_EIaHOycb2xrwq3DHgsmFd0b-aK0xbXSPoT7Jr_k",
  },
  keywords:
    "Python, Beratung, Projekte, AI, KI, künstliche Intelligenz, Machine Learning, Deep Learning, Neuronale Netzwerke, Workshops, Usecases KI, Weiterbildung, Unterricht, Kurse, Entwicklung, Software, Python Kurse für Unternehmen, Implementierung mit Python, Python Automatisierung lernen, Workshops in Künstlicher Intelligenz, KI Kurse für Anfänger bis Fortgeschrittene, Machine Learning Workshop, Deep Learning Training, Python Training München, Einführung in neuronale Netzwerke, datenanalyse mit python, deep learning training, gefahren der künstlichen intelligenz, ki anwendungsfälle, machine learning in der industrie, machine learning workshop, Machine Learning Workshop München, python nachhilfe münchen",
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
