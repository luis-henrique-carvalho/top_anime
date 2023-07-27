import NavBar from "@/components/NavBar/Index";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TopAnimes",
  description: "Veja seus animes favoritos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} bg-anime-dark p-4 mx-auto container max-w-screen-xl`}
      >
        <NavBar />
        <main className="mx-auto md:px-10 md:mx-auto">{children}</main>
      </body>
    </html>
  );
}
