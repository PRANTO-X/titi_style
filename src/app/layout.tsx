import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Open_Sans,
  Rajdhani,
} from "next/font/google";
import { StoreProvider } from "@/lib/store";
import { SiteShell } from "@/components/layout/site-shell";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Titi Style | Premium Watches in Bangladesh",
    template: "%s | Titi Style",
  },
  description:
    "Shop premium, luxury and smart watches at Titi Style. Free delivery across Bangladesh, cash on delivery and easy returns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.variable} ${openSans.variable} ${cormorant.variable} ${inter.variable} font-sans antialiased`}
      >
        <StoreProvider>
          <SiteShell>{children}</SiteShell>
        </StoreProvider>
      </body>
    </html>
  );
}
