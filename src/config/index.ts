export async function getTopAnimes(num: string) {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${num}&limit=12`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
}

export const getAnimeById = async (id: string) => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getReviewsByAnimeId = async (id: string) => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/reviews`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};