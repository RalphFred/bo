import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

import Header from '../components/Header'


const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: "Bolu Okunade",
  description: "Bolu Okunade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
