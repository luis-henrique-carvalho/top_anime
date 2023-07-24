import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  image: string;
  episodes: number;
};

const AnimeCard = ({ title, image, episodes }: Props) => {
  return (
    <Link href="/" className=" w-36  rounded-lg flex flex-col ">
      <div className="relative w-36 h-48 ">
        <div className="relative w-36 h-48  bg-gradient-to-t from-anime-dark to-transparent z-20 "></div>
        <Image
          src={image}
          fill
          priority
          style={{
            objectFit: "contain",
          }}
          alt="Picture of the author"
          className="z-10"
          sizes="(max-width: 640px) 100vw, 640px" // Adicione essa linha com o tamanho esperado da imagem
        />

        <p className="relative z-30 text-xs font-medium bottom-8 text-center text-anime-gray">
          Episodio {episodes}
        </p>
      </div>
      <h3 className="text-anime-white  line-clamp-2 font-normal text-sm text-center">
        {title}
      </h3>
    </Link>
  );
};

export default AnimeCard;
