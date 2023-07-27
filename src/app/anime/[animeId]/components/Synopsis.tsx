import React from "react";

type Props = {
  synopsis: string;
};

const Synopsis = ({ synopsis }: Props) => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="mb-2 font-medium text-sm md:text-xl text-anime-white ">Sinopse:</h3>
      <p className=" md:line-clamp-6 text-anime-gray font-normal leading-normal text-xs md:text-lg">
        {synopsis}
      </p>
    </div>
  );
};

export default Synopsis;
