import React from "react";
import AsideCard from "./Components/AsideCard";
import AnimeCard from "@/components/AnimeCard";
import EpisodesCard from "@/app/anime/[animeId]/components/Episodes/components/EpisodesCard";
import { getEpisodesById, getRecommendationsById } from "@/config";

type Props = {
  animeId: string;
};

const Recommendations = async ({ animeId }: Props) => {
  const resRecommendeds = await getRecommendationsById(animeId);
  const recommendeds = Array.from(resRecommendeds.data);
  console.log(recommendeds)

  return recommendeds && recommendeds.length > 0 ? (
    <aside className="hidden lg:flex md:flex-col md:w-[23%] gap-6">
      <h3 className="text-anime-gray font-normal text-3xl">Recomendações</h3>
      <div className="w-ful overflow-y-auto flex justify-center max-h-[463px]">
        <div className="flex flex-col overflow-y-scroll  whitespace-nowrap overscroll-contain scrollbar-thin scrollbar-thumb-anime-blue scrollbar-track-anime-dark-200">
          {recommendeds.map((item: any, index: number) => {
            if (index > 10) return null;
            const anime = item.entry;

            return (
              <AsideCard
                id={anime.mal_id}
                index={index}
                key={index}
                image={anime.images.jpg.large_image_url}
                title={anime.title}
              />
            );
          })}
        </div>
      </div>
    </aside>
  ) : (
    <aside className="hidden lg:flex md:flex-col md:w-[23%] gap-6">
      <h3 className="text-anime-gray font-normal text-3xl">
        Sem recomendações
      </h3>
    </aside>
  );
};

export default Recommendations;
