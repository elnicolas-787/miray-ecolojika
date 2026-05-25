import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MIRAY ECOLOJIKA",
  description:
    "Le projet MIRAY – ÉCOLOJIKA est une initiative intégrée d’économie circulaire et de valorisation des déchets, visant à transformer les déchets en ressources utiles pour un développement durable en milieu urbain et rural à Madagascar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased text-regular overflow-x-hidden">
      <body className="min-h-full flex flex-col text-regular">
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
