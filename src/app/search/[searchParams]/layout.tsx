import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TopAnimes",
  description: "Veja seus animes favoritos",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
    </div>
  );
}
