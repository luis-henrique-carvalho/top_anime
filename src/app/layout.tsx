import NavBar from "@/components/NavBar/Index";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Providers } from "./provider";

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
    <html lang="pt-BR">
      <body
        className={`${rubik.className} min-h-screen bg-anime-dark p-4 mx-auto container max-w-screen-xl`}
      >
        <Providers>
          <NavBar />
          <main className="mx-auto md:px-10 md:mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
