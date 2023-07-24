import React from "react";

const AnimeDetails = async ({ params }: { params: { animeId: string } }) => {
  return (
    <div>
      <p className="text-white"> {params.animeId}</p>
    </div>
  );
};

export default AnimeDetails;
