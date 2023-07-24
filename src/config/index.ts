export async function getTopAnimes(num: string) {
  const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${num}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
