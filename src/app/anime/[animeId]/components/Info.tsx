import React from "react";

interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Studios {
  mal_id: number;
  name: string;
  url: string;
  type: string;
}

type Props = {
  duration: string;
  gender: Genre[];
  studio: Studios[];
};

const Info = ({ duration, gender, studio }: Props) => {
  return (
    <div className="">
      <ul className="flex flex-col list-none text-anime-white gap-3">
        <li className=" font-normal text-xs text-anime-gray">
          <span className="font-medium text-base text-anime-white">
            Duração:{" "}
          </span>
          {duration}
        </li>
        <li className=" font-normal text-xs text-anime-gray">
          <span className="font-medium text-base text-anime-white">
            Gênero:{" "}
          </span>
          {gender &&
            gender.map((item, index) => {
              return index === gender.length - 1 ? item.name : item.name + ", ";
            })}
        </li>
        <li className=" font-normal text-xs text-anime-gray">
          <span className="font-medium text-base text-anime-white">
            Estudio:{" "}
          </span>
          {studio &&
            studio.map((item, index) => {
              return index === studio.length - 1 ? item.name : item.name + ", ";
            })}
        </li>
      </ul>
    </div>
  );
};

export default Info;
