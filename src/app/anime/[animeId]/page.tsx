import AnimeVideo from "@/components/AnimeVideo";
import { getAnimeById } from "@/config";
import React from "react";

import Reviews from "./components/Reviews";
import Synopsis from "./components/Synopsis";
import Info from "./components/Info";

const AnimeDetails = async ({ params }: { params: { animeId: string } }) => {
  const res = await getAnimeById(params.animeId);
  const anime = res.data;
  console.log(anime);

  return (
    <div className="flex flex-col gap-y-5">
      {anime && (
        <>
          <h2 className="text-anime-white truncate text-base font-medium">
            {anime.title}
          </h2>
          <AnimeVideo title={anime.title} url={anime.trailer.embed_url} />
          <Info
            gender={anime.genres}
            duration={anime.duration}
            studio={anime.studios}
          />
          <Synopsis synopsis={anime.synopsis} />
          <Reviews animeId={params.animeId} />
        </>
      )}
    </div>
  );
};

export default AnimeDetails;
