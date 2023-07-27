import { getRecommendationsById } from "@/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  animeId: string;
};

const MorePopular = async ({ animeId }: Props) => {
  const res = await getRecommendationsById(animeId);
  const recommendeds = Array.from(res.data);

  return recommendeds.length > 0 ? (
    <aside className="hidden lg:flex md:flex-col md:w-[23%] gap-6">
      <h3 className="text-anime-gray font-normal text-3xl">Recomendações</h3>

      <div className="flex flex-col h-full">
        {recommendeds.map((item: any, index: number) => {
          if (index > 3) return null;
          const anime = item.entry;

          return (
            <Link
              href={`/anime/${anime.mal_id}`}
              className="flex flex-row pointer-events-auto mb-[14px] h-28 justify-between bg-anime-dark-200"
              key={index}
            >
              <div className="relative w-[100px] h-28">
                <Image
                  src={anime.images.jpg.large_image_url}
                  fill
                  priority
                  alt="Picture of the author"
                  sizes="(max-width: 640px) 100vw, 640px" // Adicione essa linha com o tamanho esperado da imagem
                />
              </div>

              <div className="text-white flex flex-col w-3/5 justify-center p-2">
                <h4 className="line-clamp-2 text-sm font-medium">
                  {anime.title}
                </h4>
                <p className="text-anime-gray">{anime.mal_id}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  ) : (
    <>
      <aside className="hidden lg:flex md:flex-col md:w-[23%] gap-6">
        <h3 className="text-anime-gray font-normal text-3xl">
          Sem recomendações
        </h3>
      </aside>
    </>
  );
};

export default MorePopular;
