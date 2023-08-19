import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  title: string;
  image: string;
  episodes: number;
  footer?: boolean;
};

const AnimeCard = ({ title, image, episodes, id, footer }: Props) => {
  return (
    <Link
      href={`/anime/${id}`}
      className={" rounded-lg flex flex-col w-[188px]  "}
      prefetch={false}
    >
      <div className="relative h-64 w-full ">
        <div className="relative  w-full h-full  bg-gradient-to-t from-anime-dark to-transparent z-20 "></div>
        <Image
          src={image}
          fill
          priority
          style={{
            objectFit: "fill",
          }}
          alt="Picture of the author"
          className="z-10 rounded-xl"
          sizes="(max-width: 640px) 100vw, 640px" // Adicione essa linha com o tamanho esperado da imagem
        />
        {!footer && (
          <p className="relative z-30 text-xs font-medium bottom-8 text-center text-anime-gray">
            N. Episodios {episodes}
          </p>
        )}
      </div>
      <h3 className="text-anime-white  line-clamp-2 font-normal text-sm md:text-lg text-center">
        {title}
      </h3>
    </Link>
  );
};

export default AnimeCard;
