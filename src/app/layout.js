import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pacifico, lobster } from "@/components/font";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Damasco",
  description: "Tradición de calidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lobster.className}>
      <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
