"use client";
import AnimeCard from "@/components/AnimeCard/Index";
import { getTopAnimes } from "@/config";
import { useEffect, useState } from "react";

export default function Home() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const fetchTopAnimes = async () => {
      const resp = await getTopAnimes("1");
      if (resp && resp.data) {
        setAnimes(resp.data);
      }
    };
    fetchTopAnimes();
  }, []);

  console.log(animes);

  return (
    <div className="flex min-h-screen flex-col text-base p-4 items-start">
      <h1 className="text-anime-white text-center mb-4">
        Ultimas atualizações
      </h1>
      <div className="flex flex-row flex-wrap justify-between gap-y-6">
        {animes.map((anime: any) => (
          <AnimeCard
            episodes={anime.episodes}
            title={anime.title}
            image={anime.images.jpg.large_image_url}
          />
        ))}
      </div>
    </div>
  );
}
