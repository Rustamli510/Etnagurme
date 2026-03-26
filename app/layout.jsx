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
  title: "Etnagurme - ETNA Kuru Et Lezzetleri",
  description:
    "ETNAGURME'nin kuru et ürünleriyle modern, dengeli ve yoğun lezzet deneyimi. ETNA OREGANO, BİBERLİ TERBİYE, SPECIAL TERBİYE ve ACI çeşitleriyle tanışın.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

