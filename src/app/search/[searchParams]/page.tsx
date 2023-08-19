import AnimeCard from "@/components/AnimeCard";
import { getSearch } from "@/config";
import Filters from "./components/Filters";
import { Pagination } from "@nextui-org/pagination";
import { useSearchState } from "@/hooks/useSearchState";

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
  const searchName: string = params.searchParams;

  const orderBy = useSearchState.getState().orderBy

  return (
    <div className="flex min-h-screen flex-col text-base my-4 items-start">
      <h1 className="text-anime-white text-center gap-y-4 mb-4">
        Resultados para {searchName.replace(/%20/g, " ")}
      </h1>
      <h2>{orderBy}</h2>
      <Filters />
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
      <Pagination
        total={10}
        className="self-center"
        // onChange={(newPage) => handleOrderByChange(newPage.toString())}
      />
    </div>
  );
}
