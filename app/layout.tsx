import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Macadamia Farm Plots in Karnataka | Hebbal Orchard",
  description:
    "Own titled macadamia farm plots on a 25-acre owner-operated orchard in Karnataka. Clear title, agronomic support, and direct export market linkage.",
  openGraph: {
    title: "Premium Macadamia Farm Plots in Karnataka",
    description:
      "Own titled macadamia farm plots on a 25-acre owner-operated orchard in Karnataka.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans text-slate-800 antialiased bg-slate-50">
        {children}
      </body>
    </html>
  );
}
