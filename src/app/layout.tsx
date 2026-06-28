import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";
import { Analytics } from "@vercel/analytics/next";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const raleway = Raleway({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});



export const metadata: Metadata = {
  title: "Narval · L'élégance en mer",
  description:
    "Location de yachts de luxe. Vivez une expérience maritime d'exception, accessible et inoubliable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${raleway.variable} h-full`}
    >
<body className="min-h-full bg-narval-light text-narval-dark antialiased">
        <ScrollAnimations />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
