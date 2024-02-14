import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./style.css";
import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import CartProvider from "@/providers/CartProvider";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight:['100','200','300','400','500','600','700'] });

export const metadata: Metadata = {
  title: "Pool-shop",
  description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={poppins.className}>
                <Toaster toastOptions={{
                    style: {
                        background: 'rgb(14	165	233)',
                        color: '#fff',
                    }
                }}/>
                <CartProvider>
                    <NavBar/>
                    <main className="main-content">
                        {children}
                    </main>
                    <Footer/>
                </CartProvider>
            </body>
        </html>
    );
}
