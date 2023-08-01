import React from "react";

type Props = {
  url: string;
  title: string;
};

const AnimeVideo = ({ url, title }: Props) => {
  console.log(url, title);
  return (
    <>
      {url ? (
        <iframe
          className="rounded-lg aspect-video w-full"
          src={url}
          title={title}
          frameBorder="0" // Change `frameborder` to `frameBorder`
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen // Use camel case for `allowFullScreen`
        ></iframe>
      ) : (
        <div className="flex flex-col mt-10" >
          <h2 className="text-anime-gray truncate text-2xl font-medium">Video não disponivél</h2>
        </div>
      )}
    </>
  );
};

export default AnimeVideo;
