import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SCL CONSULTING",
  description: "Empowering your business with expert consulting services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex flex-col  ">
        {children}
        </main>
        </body>
    </html>
  );
}
