import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entre Islas Downtown Cozumel",
  description: "Tu hogar vacacional, es una isla que se siente como el paraíso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full" suppressHydrationWarning>{children}</body>
    </html>
  );
}
