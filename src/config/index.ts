export async function getTopAnimes(page: number,limite: number) {
  try {
    const res = await fetch(
      `https://api.jikan.moe/v4/top/anime?page=${page}&limit=${limite}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
}

interface Searc {
  keyword: string;
  num?: string;
  order_by?: string;
  sort?: string;
  type?: string;
  status?: string;
  rating?: string;
}

export async function getSearch({
  keyword,
  num,
  order_by,
  rating,
  sort,
  status,
  type,
}: Searc) {
  try {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?${keyword ? `q=${keyword}` : ""}${
        num ? `&page=${num}` : ""
      }&sfw${order_by ? `&order_by=${order_by}` : ""}${
        sort ? `&sort=${sort}` : ""
      }${type ? `&type=${sort}` : ""}${status ? `&status=${status}` : ""}${
        rating ? `&rating=${rating}` : ""
      }`
    );

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

export const getRecommendationsById = async (id: string) => {
  try {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime/${id}/recommendations`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getEpisodesById = async (id: string) => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const getVideoById = async (id: string) => {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/videos`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};
