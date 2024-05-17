import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import VSLayout from "@/components/VSLayout";

const font = Poppins({ subsets: ["latin"], weight: ["200", "400", "800"] });

export const metadata: Metadata = {
  title: "Programming_Seniors_2024",
  description: "The best programers in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} overflow-hidden`}>
        <VSLayout>{children}</VSLayout>
      </body>
    </html>
  );
}
