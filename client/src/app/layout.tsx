import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DashBoardWrapper from "./dashboardWrapper";

export const metadata: Metadata = {
  title: "BitisHunter",
  description: "BitisHunter is a fashion shop about shoes from VietNam",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* We will need the navbar and the menu with all the pages so best to keep it in layout file */}
        <DashBoardWrapper>{children}</DashBoardWrapper>
      </body>
    </html>
  );
}
