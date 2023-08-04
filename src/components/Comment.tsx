"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  userName: string;
  comment: string;
  image: string;
};

const Comment = ({ userName, comment, image }: Props) => {
  const [view, setView] = useState(false);

  return (
    <div className="text-anime-white flex flex-row items-start gap-4">
      <div
        className={` ${
          view ? "hidden w-0" : ""
        }relative w-10 h-10 md:w-[70px] md:h-[70px] my-auto`}
      >
        <Image
          src={image}
          fill
          style={{
            objectFit: "cover",
          }}
          priority
          alt="Picture of the author"
          className="rounded-full self-center"
          sizes="(max-width: 640px) 100vw, 640px" // Add this line with the expected image size
        />
      </div>
      <div className="flex flex-col w-full">
        <h4
          className={`${
            view ? "text-lg" : ""
          }text-xs md:text-lg font-medium mb-1`}
        >
          {userName}
        </h4>
        <p
          lang="pt-BR"
          className={` ${
            view ? "" : "line-clamp-3"
          } text-anime-gray text-justify md:text-base text-xs font-normal`}
        >
          {comment}
        </p>
        <button
          onClick={() => setView(!view)}
          className="self-end text-anime-blue"
        >
          {view ? "Ver menos" : "Ver mais"}
        </button>
      </div>
    </div>
  );
};

export default Comment;
