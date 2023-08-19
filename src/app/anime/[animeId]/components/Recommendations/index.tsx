import React from "react";
import AsideCard from "./Components/AsideCard";
import { getRecommendationsById } from "@/config";

type Props = {
  animeId: string;
};

const Recommendations = async ({ animeId }: Props) => {
  let recommendeds: any[] = [];
  const resRecommendeds = await getRecommendationsById(animeId);
  if (resRecommendeds) {
    recommendeds = Array.from(resRecommendeds.data);
  }

  return recommendeds && recommendeds.length > 0 ? (
    <aside className="flex flex-col lg:flex md:flex-col w-full lg:w-[23%] gap-6">
      <h3 className="text-anime-gray text-center md:text-start font-normal text-3xl">
        Recomendações
      </h3>
      <div className="w-full overflow-y-auto flex justify-center max-h-[463px]">
        <div className="flex flex-col w-full overflow-y-scroll  whitespace-nowrap overscroll-contain scrollbar-thin scrollbar-thumb-anime-blue scrollbar-track-anime-dark-200">
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
                votes={item.votes}
              />
            );
          })}
        </div>
      </div>
    </aside>
  ) : (
    <aside className="hidden lg:flex md:flex-col md:w-[23%] gap-6">
      <h3 className="text-anime-gray font-normal text-2xl">
        Sem recomendações
      </h3>
    </aside>
  );
};

export default Recommendations;
