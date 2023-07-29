import React from "react";
import AsideCard from "./Components/AsideCard";
import AnimeCard from "@/components/AnimeCard";

type Props = {
  recommendeds?: any[];
  footer?: boolean;
  episodes?: any[];
};

const Recommendations = ({ recommendeds, footer }: Props) => {
  return recommendeds && recommendeds.length > 0 ? (
    footer && footer ? (
      <div>
        <h3 className="text-anime-white font-normal text-3xl mb-10">
          Lista de Ep
        </h3>

        <div className="w-ful overflow-x-auto flex justify-center ">
          <div className="flex flex-row overflow-x-scroll gap-x-10 scrollbar-thin scrollbar-thumb-anime-blue scrollbar-track-anime-dark-200">
            {recommendeds.map((item: any, index: number) => {
              const anime = item.entry;

              return (
                <AnimeCard
                  id={anime.mal_id}
                  episodes={10}
                  key={index}
                  image={anime.images.jpg.large_image_url}
                  title={anime.title}
                  footer
                />
              );
            })}
          </div>
        </div>
      </div>
    ) : (
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
    )
  ) : (
    <aside className="hidden lg:flex md:flex-col md:w-[23%] gap-6">
      <h3 className="text-anime-gray font-normal text-3xl">
        Sem recomendações
      </h3>
    </aside>
  );
};

export default Recommendations;
