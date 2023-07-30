import React, { useEffect, useState } from "react";
import AnimeCard from "@/components/AnimeCard";
import EpisodesCard from "@/app/anime/[animeId]/components/Episodes/components/EpisodesCard";
import { getEpisodesById } from "@/config";

type Props = {
  animeId: string;
  image: string;
};

const Episodes = async ({ animeId, image }: Props) => {
  let episodesList: any[] = [];
  const resEpisodes = await getEpisodesById(animeId);
  if (resEpisodes) episodesList = Array.from(resEpisodes.data);

  // console.log(episodesList);

  if (episodesList && episodesList.length > 0) {
    return (
      <div className="">
        <h2 className="text-anime-white font-normal text-3xl mb-10">
          Lista de Ep
        </h2>

        <div className="w-ful overflow-x-auto flex justify-start ">
          <div className="flex flex-row overflow-x-scroll gap-x-10 scrollbar-thin scrollbar-thumb-anime-blue scrollbar-track-anime-dark-200">
            {episodesList &&
              episodesList.map((episode: any, index: number) => {
                return (
                  <EpisodesCard
                    score={episode.score}
                    id={episode.mal_id}
                    url={episode.url ? episode.url : episode.forum_url}
                    key={index}
                    image={image!}
                    title={episode.title}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
};

export default Episodes;
