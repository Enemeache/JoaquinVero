import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joaquín Verón | Personal Trainer",
  description:
    "Entrenamiento personalizado con resultados reales. Transforma tu cuerpo y tu vida con Joaquín Verón, entrenador personal certificado.",
  keywords: [
    "personal trainer",
    "entrenador personal",
    "fitness",
    "Joaquín Verón",
    "transformación corporal",
  ],
  openGraph: {
    title: "Joaquín Verón | Personal Trainer",
    description: "Entrenamiento personalizado con resultados reales",
    type: "website",
    locale: "es_AR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
