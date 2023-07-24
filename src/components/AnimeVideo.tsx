import React from "react";

type Props = {
  url: string;
  title: string;
};

const AnimeVideo = ({ url, title }: Props) => {
  return (
    <iframe
      className="rounded-lg aspect-video"
      src={url}
      title={title}
      frameBorder="0" // Change `frameborder` to `frameBorder`
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen // Use camel case for `allowFullScreen`
    ></iframe>
  );
};

export default AnimeVideo;
