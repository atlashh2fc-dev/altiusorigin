import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppChat } from "@/components/WhatsAppChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Origen — Desarrollo Web | Altius Ignite",
    template: "%s — Origen | Altius Ignite",
  },
  description:
    "Construimos plataformas listas para generar contactos, ventas y datos desde el primer día.",
  metadataBase: new URL("https://origen.altiusignite.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://origen.altiusignite.com",
    title: "Origen — Desarrollo Web | Altius Ignite",
    description:
      "No necesitas solo una web. Necesitas una operación digital.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Origen — Desarrollo Web | Altius Ignite",
    description:
      "Construimos plataformas listas para generar contactos, ventas y datos desde el primer día.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-zinc-950 text-zinc-50 antialiased`}
      >
        {children}
        <WhatsAppChat />
      </body>
    </html>
  );
}
