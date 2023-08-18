import AnimeVideo from "@/components/AnimeVideo";
import { getAnimeById } from "@/config";
import React from "react";

import Reviews from "./components/Reviews";
import Synopsis from "./components/Synopsis";
import Info from "./components/Info";

import Image from "next/image";
import Recommendations from "./components/Recommendations";
import Episodes from "./components/Episodes";

const AnimeDetails = async ({ params }: { params: { animeId: string } }) => {
  let anime: any;
  let image: string = "";
  const resAnime = await getAnimeById(params.animeId);
  if (resAnime) {
    anime = resAnime.data;
    image = resAnime.data.images.jpg.large_image_url;
  }

  return (
    <>
      {anime ? (
        <div className="flex flex-col gap-y-10 mt-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="flex flex-col md:min-w-[75%] gap-6">
              <h2 className="text-anime-white truncate text-3xl font-medium">
                {anime.title}
              </h2>
              <AnimeVideo title={anime.title} url={anime.trailer.embed_url} />
            </div>

            <Recommendations animeId={params.animeId} />
          </div>
          <div className="flex flex-row  justify-between w-full gap-6">
            <div className=" hidden lg:flex h-[380px] ">
              <div className="absolute xl:h-[380px] xl:w-[270px] h-[370px] w-[270px]">
                <Image
                  src={image}
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                  alt="Picture of the author"
                  className="rounded-xl"
                  sizes="(max-width: 640px) 100vw, 640px"
                />
              </div>
            </div>

            <div className="flex flex-col text-justify gap-12 w-full lg:w-8/12 xl:w-9/12">
              <Info
                gender={anime.genres}
                duration={anime.duration}
                studio={anime.studios}
              />
              <Synopsis synopsis={anime.synopsis} />
            </div>
          </div>
          <Episodes
            animeId={params.animeId}
            image={anime.images.jpg.large_image_url}
          />
          <Reviews animeId={params.animeId} />
        </div>
      ) : (
        <div className="flex flex-col mt-10 items-center">
          <h2 className="text-anime-white truncate text-4xl font-medium">
            Anime não encontrado
          </h2>
        </div>
      )}
    </>
  );
};

export default AnimeDetails;
