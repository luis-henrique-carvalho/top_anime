import Comment from "@/components/Comment";
import { getReviewsByAnimeId } from "@/config";
import React from "react";

type Props = {
  animeId: string;
};

const Reviews = async ({ animeId }: Props) => {
  const res = await getReviewsByAnimeId(animeId);
  const reviewsArray = Array.from(res.data);
  console.log(reviewsArray);
  return (
    <div className="flex flex-col gap-3">
      <h3 className="mb-2 font-medium text-sm text-anime-white">Comentários</h3>
      {reviewsArray &&
        reviewsArray.map((iten: any, index) => {
          return index === reviewsArray.length - 1 ? (
            <></>
          ) : (
            <>
              <Comment
                comment={iten.review}
                image={iten.user.images.jpg.image_url}
                userName={iten.user.username}
              />
              <div className="bg-anime-dark-200 w-full mb-4  h-1"></div>
            </>
          );
        })}
    </div>
  );
};

export default Reviews;
