import React from "react";

type Props = {
  synopsis: string;
};

const AnimeSynopsis = ({ synopsis }: Props) => {
  return (
    <div>
      <h3 className="mb-2 font-medium text-sm text-anime-white">Sinopse:</h3>
      <p className=" text-anime-gray font-normal leading-normal text-xs">
        {synopsis}
      </p>
    </div>
  );
};

export default AnimeSynopsis;
