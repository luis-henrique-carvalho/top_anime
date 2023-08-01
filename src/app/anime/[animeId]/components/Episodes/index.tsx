"use client";
import React, { useEffect, useState } from "react";

import EpisodesCard from "@/app/anime/[animeId]/components/Episodes/components/EpisodesCard";
import { getEpisodesById } from "@/config";

type Props = {
  animeId: string;
  image: string;
};

const Episodes = ({ animeId, image }: Props) => {
  const [episodesList, setEpisodesList] = useState([]);

  const getEpisodes = async () => {
    const resEpisodes = await getEpisodesById(animeId);
    if (resEpisodes) setEpisodesList(Array.from(resEpisodes.data));
  };

  useEffect(() => {
    getEpisodes();
  }, [animeId]);

  console.log(episodesList)
  return (
    <React.Fragment>
      {episodesList && episodesList.length > 0 ? (
        <div className="">
          <h2 className="text-anime-white font-normal text-3xl mb-10">
            Lista de Ep
          </h2>

          <div className="w-ful overflow-x-auto flex justify-start ">
            <div className="flex flex-row overflow-x-scroll gap-x-10 scrollbar-thin scrollbar-thumb-anime-blue scrollbar-track-anime-dark-200">
              {episodesList.map((episode: any, index) => (
                <EpisodesCard
                  key={index}
                  score={episode.score}
                  id={episode.mal_id}
                  url={episode.url ? episode.url : episode.forum_url}
                  image={image!}
                  title={episode.title}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p>Nenhum episódio encontrado.</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default Episodes;
