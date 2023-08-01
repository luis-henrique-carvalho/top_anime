import AnimeCard from "@/components/AnimeCard";
import SecundaryNav from "@/components/SearchNav";
import { getSearch } from "@/config";

export default async function Search({
  params,
}: {
  params: { searchParams: string };
}) {
  const inputSearch = {
    keyword: params.searchParams,
  };
  const animes = await getSearch(inputSearch);
  const animesArray = Array.from(animes.data);

  const searchName: string = params.searchParams

  console.log(animesArray);

  return (
    <div className="flex min-h-screen flex-col text-base my-4 items-start">
      <h1 className="text-anime-white text-center mb-4">
        Resultados para {searchName.replace(/%20/g, " ")}
      </h1>
      <div className="flex flex-row flex-wrap justify-between gap-6">
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