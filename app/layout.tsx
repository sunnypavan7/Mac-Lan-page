import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Macadamia Orchard Plots, Karnataka | Own a Piece of the Grove",
  description:
    "Own a working macadamia plot on a 25-acre owner-operated orchard in Karnataka. Clear title, agronomic support, and a direct route to export markets. Book a free site visit.",
  openGraph: {
    title: "Macadamia Orchard Plots, Karnataka",
    description:
      "Own a working macadamia plot on a 25-acre owner-operated orchard in Karnataka. Clear title, agronomic support, direct market linkage.",
    type: "website",
    locale: "en_IN",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
