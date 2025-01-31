import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Louis Profile Card",
  description: "Profile card for Louis Oghenevwede Louis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <div className="main">
          <div className="gradient"/>
        </div>

        <main className="app">
          {children}
        </main>



        
      </body>
    </html>
  );
}
