import AnimeVideo from "@/components/AnimeVideo";
import { getAnimeById } from "@/config";
import React from "react";

import Reviews from "./components/Reviews";
import Synopsis from "./components/Synopsis";
import Info from "./components/Info";
import MorePopular from "./components/MorePopular";

const AnimeDetails = async ({ params }: { params: { animeId: string } }) => {
  const res = await getAnimeById(params.animeId);
  const anime = res.data;

  return (
    <div className="flex flex-col gap-y-5">
      {anime && (
        <>
          <div className="lg:flex lg:flex-row lg:justify-between">
            <div className="flex flex-col md:min-w-[75%] gap-6">
              <h2 className="text-anime-white truncate text-3xl font-medium">
                {anime.title}
              </h2>
              <AnimeVideo title={anime.title} url={anime.trailer.embed_url} />
            </div>

            <MorePopular animeId={params.animeId} />
          </div>

          <Synopsis synopsis={anime.synopsis} />
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
