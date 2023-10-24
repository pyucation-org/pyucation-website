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
        <Navbar />
        {children}
      </body>
    </html>
  );
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className="bg-pyucation-1 bg-cover bg-fixed pb-40 -z-30">
//           <Navbar />
//           {children}
//         </div>
//       </body>
//     </html>
//   );
// }
