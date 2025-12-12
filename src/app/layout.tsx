import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "900"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "ПОРА ПРОВЕРИТЬ ЗРЕНИЕ | KOETE x DSTTP x LUVL",
  description: "Пора проверить зрение, а то я больше не вижу смысла. Интерактивный арт-проект от KOETE, DSTTP и LUVL. 2025.",
  keywords: ["KOETE", "DSTTP", "LUVL", "не вижу смысла", "арт-проект", "интерактив", "2025"],
  authors: [{ name: "KOETE" }, { name: "DSTTP" }, { name: "LUVL" }],
  openGraph: {
    title: "ПОРА ПРОВЕРИТЬ ЗРЕНИЕ",
    description: "Пора проверить зрение, а то я больше не вижу смысла. KOETE x DSTTP x LUVL",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "ПОРА ПРОВЕРИТЬ ЗРЕНИЕ",
    description: "Пора проверить зрение, а то я больше не вижу смысла. KOETE x DSTTP x LUVL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${caveat.variable} antialiased`}>
        {children}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
