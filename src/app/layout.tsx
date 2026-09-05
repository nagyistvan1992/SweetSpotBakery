import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sweet-spot-bakery.vercel.app"),
  title: "Sweet Spot – Homemade Cakes | Cofetărie Artizanală Satu Mare",
  description:
    "De la prăjituri simple la torturi spectaculoase – tot ce ai nevoie pentru a-ți răsfăța sufletul. Cofetărie artizanală de casă în Satu Mare, realizată exclusiv la comandă din ingrediente 100% naturale.",
  keywords: [
    "Sweet Spot Satu Mare",
    "torturi Satu Mare",
    "cofetarie Satu Mare",
    "cinnamon rolls Satu Mare",
    "babka Satu Mare",
    "torturi aniversare Satu Mare",
    "candy bar Satu Mare",
    "torturi la comanda Satu Mare",
    "prajituri de casa Satu Mare",
  ],
  authors: [{ name: "Sweet Spot Bakery Satu Mare" }],
  openGraph: {
    title: "Sweet Spot – Homemade Cakes | Satu Mare",
    description:
      "Torturi personalizate și prăjituri artizanale de casă în Satu Mare. Ingrediente premium, ciocolată belgiană, unt 82% și atenție desăvârșită la detalii.",
    url: "https://sweet-spot-bakery.vercel.app",
    siteName: "Sweet Spot Bakery",
    images: [
      {
        url: "/images/logo.jpg",
        width: 720,
        height: 720,
        alt: "Sweet Spot Homemade Cakes Satu Mare Logo",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ro"
      className={`${playfair.variable} ${jakarta.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#241C18] font-sans antialiased selection:bg-[#E8D4C2] selection:text-[#241C18]">
        {children}
      </body>
    </html>
  );
}
