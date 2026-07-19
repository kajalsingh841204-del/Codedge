import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codedge Academy — AI, Data Science & Tech Careers with Placement Guarantee",
  description:
    "Industry-integrated Master's, Degree & Certification programs in AI, Data Science and Cloud. IBM & Microsoft certified, 350+ hiring partners, written placement guarantee.",
  authors: [{ name: "Codedge Academy" }],
  openGraph: {
    title: "Codedge Academy — Land the Tech Career You Actually Deserve",
    description:
      "Live-taught programs in AI, Data Science and Emerging Tech. IBM & Microsoft certified. Written placement guarantee.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codedge Academy — AI & Data Science Careers",
    description:
      "Industry-integrated programs with IBM & Microsoft certifications and written placement guarantee.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
