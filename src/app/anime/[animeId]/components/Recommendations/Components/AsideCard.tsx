import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  id: string;
  title: string;
  index: number;
  votes: number;
};

const AsideCard = ({ id, image, title, index, votes }: Props) => {
  return (
    <Link
      href={`/anime/${id}`}
      className={`flex flex-row w-full pointer-events-auto mb-[14px] md:h-28 justify-between bg-anime-dark-200`}
      key={index}
    >
      <div className="relative w-[100px] h-28">
        <Image
          src={image}
          fill
          priority
          alt="Picture of the author"
          sizes="(max-width: 640px) 100vw, 640px" // Adicione essa linha com o tamanho esperado da imagem
        />
      </div>

      <div className="text-white flex flex-col w-3/5 justify-center p-2">
        <h4 className="line-clamp-2 text-sm font-medium">{title}</h4>
        <p className="text-anime-gray">Rank: {index + 1}</p>
        <p className="text-anime-gray">Votos: {votes}</p>
      </div>
    </Link>
  );
};

export default AsideCard;
