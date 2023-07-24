import AnimeCard from "@/components/AnimeCard/Index";
import { getTopAnimes } from "@/config";

export default async function Home() {
  const animes = await getTopAnimes("1");
  const animesArray = Array.from(animes.data);

  console.log(animes);

  return (
    <div className="flex min-h-screen flex-col text-base p-4 items-start">
      <h1 className="text-anime-white text-center mb-4">
        Ultimas atualizações
      </h1>
      <div className="flex flex-row flex-wrap justify-between gap-y-6">
        {animesArray &&
          animesArray.map((anime: any) => (
            <AnimeCard
              key={anime.mal_id}
              id={anime.mal_id}
              episodes={anime.episodes}
              title={anime.title}
              image={anime.images.jpg.large_image_url}
            />
          ))}
      </div>
    </div>
  );
}
