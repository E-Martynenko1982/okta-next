import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const eUkraine = localFont({
  src: [
    { path: "./fonts/e-Ukraine-UltraLight.otf", weight: "100", style: "normal" },
    { path: "./fonts/e-Ukraine-Thin.otf",       weight: "200", style: "normal" },
    { path: "./fonts/e-Ukraine-Light.otf",      weight: "300", style: "normal" },
    { path: "./fonts/e-Ukraine-Regular.otf",    weight: "400", style: "normal" },
    { path: "./fonts/e-Ukraine-Medium.otf",     weight: "500", style: "normal" },
    { path: "./fonts/e-Ukraine-Bold.otf",       weight: "700", style: "normal" },
  ],
  variable: "--font-e-ukraine",
});

export const metadata: Metadata = {
  title: {
    default: "Okta",
    template: "%s | Okta",
  },
  description: "Інтернет-магазин Okta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${eUkraine.variable} h-full antialiased`}>
      <body className="relative min-h-screen flex flex-col overflow-x-hidden">
        {/* Shared background */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/bg.webp')" }}
        />
        <Header />
        <div className="flex flex-1 pt-20 justify-center">
          <div className="flex w-full max-w-350">
            <Sidebar />
            <main className="flex-1 min-w-0">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
