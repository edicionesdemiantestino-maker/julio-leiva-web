import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julio Leiva | Música & Covers",
  description:
    "Música, covers y shows en vivo de Julio Leiva. Consultas y contrataciones.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
