import Image from "next/image";
import Link from "next/link";
import React from "react";
import Score  from '@/components/Score'

type Props = {
  id: string;
  title: string;
  image: string;
  footer?: boolean;
  url: string;
  score: number;
};

const EpisodesCard = ({ title, image, score, url, id }: Props) => {
  return (
    <Link
      href={url || ""}
      className={" rounded-lg flex flex-col w-36 md:w-[188px] mb-4 "}
    >
      <div className="relative w-36 h-48 md:h-64 md:w-[188px] ">
        <div className="relative w-36 md:w-[188px] h-48 md:h-full bg-gradient-to-t from-anime-dark to-transparent z-20 "></div>
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
        <p className="relative z-40 text-base md:text-lg font-medium bottom-12 text-center text-anime-gray">
          Ep: {id}
        </p>
        <p className="relative z-30 text-xs font-medium bottom-12 text-center text-anime-gray">
         <Score score={score}/>
        </p>
      </div>
      <h3 className="text-anime-white  line-clamp-2 font-normal text-sm md:text-lg text-center">
        Ep {id}: {title}
      </h3>
    </Link>
  );
};

export default EpisodesCard;
