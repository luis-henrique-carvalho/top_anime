import Image from "next/image";
import React from "react";

type Props = {
  userName: string;
  comment: string;
  image: string;
};

const Comment = ({ userName, comment, image }: Props) => {
  return (
    <div className="text-anime-white flex flex-row gap-4">
      <div className=" relative w-10 h-10 md:w-[70px] md:h-[70px] my-auto">
        <Image
          src={image}
          fill
          style={{
            objectFit: "cover",
          }}
          alt="Picture of the author"
          className="rounded-full self-center"
          sizes="(max-width: 640px) 100vw, 640px" // Adicione essa linha com o tamanho esperado da imagem
        />
      </div>
      <div className="flex flex-col w-full">
        <h4 className="text-xs md:text-lg font-medium mb-1">{userName}</h4>
        <p className="text-anime-gray text-justify md:text-base text-xs font-normal line-clamp-3">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Comment;
