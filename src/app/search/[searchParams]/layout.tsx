import type { Metadata } from "next";

import SecundaryNav from "@/components/SearchNav";

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
      <SecundaryNav />
      {children}
    </div>
  );
}
